import MaterialButton from "@material-ui/core/Button";

import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  icon?: JSX.Element;
  caption: string;
  mobileCaption: string;
  mobileIcon?: JSX.Element;
  isMobileView: boolean;
  type: "primary"|"secondary";
}

export function Button(props: Props) {
  const {
    caption, icon, isMobileView, mobileCaption, mobileIcon, onClick, type,
  } = props;
  return (
    <MaterialButton
      color={type === "primary" ? "secondary" : "default"}
      size="medium"
      variant="contained"
      onClick={onClick}>
      {
        isMobileView && mobileIcon && <span className={styles.icon}>{mobileIcon}</span>
      }
      {
        !isMobileView && icon && <span className={styles.icon}>{icon}</span>
      }
      {isMobileView ? mobileCaption : caption}
    </MaterialButton>
  );
}
