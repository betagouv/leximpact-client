import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import debounce from "lodash/debounce";
import { PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../../redux/reducers/descriptions/dotations";
import request from "../../../../common/utils/request";

interface Props {
  onChange: (commune: Commune) => void;
}

interface State {
  open: boolean;
  communes: Commune[] | null;
  value: Commune | null;
}

type ResponseBody = Commune[];

export class SearchInput extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      communes: [],
      open: false,
      value: null,
    };
    this.search = debounce(this.search.bind(this), 300);
  }

  // eslint-disable-next-line no-unused-vars
  async search(search: string): Promise<void> {
    this.setState({ communes: null });

    if (!search) {
      return;
    }

    await request
      .get(`/search?commune=${encodeURI(search)}`)
      .then((communes: ResponseBody) => {
        this.setState({ communes });
      })
      .catch(() => {});
  }

  render() {
    const { onChange } = this.props;
    const { communes, open, value } = this.state;
    return (
      <Autocomplete
        freeSolo
        getOptionLabel={option => `${option.name} (${option.code})`}
        open={open}
        options={communes || []}
        renderInput={params => (
          <TextField
            {...params}
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {communes === null && <CircularProgress color="secondary" size={20} style={{ marginRight: 10 }} />}
                  <SearchIcon />
                </InputAdornment>
              ),
              ref: params.InputProps.ref,
            }}
            label="Nom de la commune"
            margin="normal"
            variant="filled"
          />
        )}
        style={{ width: "100%" }}
        value={value}
        onChange={(event: any, commune: Commune | null) => {
          if (commune) {
            onChange(commune);
            this.setState({ communes: [], value: commune });
            // Small hack to clear the input.
            setTimeout(() => this.setState({ value: null }), 0);
          }
        }}
        onClose={() => this.setState({ open: false })}
        onInputChange={(event, search) => {
          this.search(search);
        }}
        onOpen={() => this.setState({ open: true })}
      />
    );
  }
}
