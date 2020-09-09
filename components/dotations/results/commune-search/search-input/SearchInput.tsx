import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import debounce from "lodash/debounce";
import { Fragment, PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../../redux/reducers/descriptions/dotations";
import request from "../../../../common/utils/request";
import { SearchList } from "./search-list";

interface Props {
  onChange: (commune: Commune) => void;
}

interface State {
  communes: Commune[];
  value: string;
  loading: boolean;
}

type ResponseBody = Commune[];

export class SearchInput extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      communes: [],
      loading: false,
      value: "",
    };

    this.search = this.search.bind(this);
    this.fetchCommunes = debounce(this.fetchCommunes.bind(this), 500);
    this.select = this.select.bind(this);
  }

  search(value: string): void {
    this.setState({
      communes: [],
      value,
    });

    if (value.length < 3) {
      return;
    }

    this.fetchCommunes(value);
  }

  async fetchCommunes(value: string): Promise<void> {
    this.setState({ loading: true });

    await request
      .get(`/search?commune=${encodeURI(value)}`)
      .then((communes: ResponseBody) => {
        this.setState({
          communes,
          loading: false,
        });
      })
      .catch(() => { });
  }

  select(commune: Commune): void {
    this.setState({
      communes: [],
      value: "",
    });

    // eslint-disable-next-line react/destructuring-assignment
    this.props.onChange(commune);
  }

  render() {
    const {
      communes, loading, value,
    } = this.state;
    return (
      <Fragment>
        <TextField
          fullWidth
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {loading && <CircularProgress color="secondary" size={20} style={{ marginRight: 10 }} />}
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          label="Nom de la commune"
          margin="normal"
          value={value}
          variant="filled"
          onChange={e => this.search(e.target.value)}
          onKeyDown={e => e.key === "Enter" && this.fetchCommunes(value)}
        />
        {communes.length !== 0 && <SearchList communes={communes} onSelect={this.select} />}
      </Fragment>
    );
  }
}
