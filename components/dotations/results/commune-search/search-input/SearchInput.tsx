import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";
import debounce from "lodash/debounce";
import { PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../../redux/reducers/descriptions/dotations";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

interface Props {
  onChange: (commune: Commune) => void;
}

interface State {
  open: boolean;
  communes: Commune[] | null;
}

export class SearchInput extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      communes: [],
      open: false,
    };
    this.search = debounce(this.search.bind(this), 300);
  }

  async search(search: string): Promise<void> {
    this.setState({ communes: null });
    await sleep(1e3);
    this.setState({
      communes: [
        {
          code: "76384",
          departement: "Seine-Maritime",
          habitants: 9101,
          name: "Lillebonne",
          potentielFinancier: 2188.612857,
        },
        {
          code: "76214",
          departement: "Seine-Maritime",
          habitants: 262,
          name: "Dénestanville",
          potentielFinancier: 706.242647,
        },
      ],
    });
  }

  render() {
    const { onChange } = this.props;
    const { communes, open } = this.state;
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
        onChange={(event: any, commune: Commune | null) => {
          if (commune) {
            onChange(commune);
            // Reset
            this.setState({ communes: [] });
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
