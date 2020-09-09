import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../../../redux/reducers/descriptions/dotations";
import styles from "./SearchList.module.scss";

interface Props {
  communes: Commune[];
  onSelect: (commune: Commune) => void;
}

export class SearchList extends PureComponent<Props> {
  render() {
    const { communes, onSelect } = this.props;

    return (
      <div className={styles.container}>
        <List component="nav">
          {communes.map(commune => (
            <ListItem key={commune.code} button onClick={() => onSelect(commune)}>
              <ListItemText primary={`${commune.name} (${commune.code})`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
