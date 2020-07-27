import MenuIcon from "@material-ui/icons/Menu";

import { HeaderButton } from "./header-button";

interface Props {
  isMobile: boolean;
}

function HeaderMenuButton({ isMobile }: Props) {
  return (
    <HeaderButton
      caption="Accueil"
      icon={<MenuIcon fontSize="small" />}
      isMobile={isMobile}
      onClick={() => {}} />
  );
}

export default HeaderMenuButton;
