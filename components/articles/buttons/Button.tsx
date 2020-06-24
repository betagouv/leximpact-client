import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { PureComponent } from "react";

import styles from "./Button.module.scss";

const style = {
  Button: {
    margin: "10px",
    padding: "3px",
  },
  Div: {
    marginBottom: "1.5em",
    marginLeft: "1.5em",
    marginRight: "1.5em",
    marginTop: "0",
  },
};

interface Props {
  onClick: () => void;
  icons: JSX.Element;
  caption: string
}

export class Button extends PureComponent<Props> {
  render() {
    const { caption, icons, onClick } = this.props;
    return (
      <div>
        <Fab color="primary" size="medium" style={style.Button} variant="extended" onClick={onClick}>
          {icons}
        </Fab>
        <Typography className={styles.amendementText} variant="caption" onClick={onClick}>
          {caption}
        </Typography>
      </div>
    );
  }
}
