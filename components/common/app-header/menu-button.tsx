import MenuIcon from "@material-ui/icons/Menu";
import { useRouter } from "next/router";

import { HeaderButton } from "./header-button";

interface Props {
  isMobile: boolean;
}

function HeaderMenuButton({ isMobile }: Props) {
  const router = useRouter();

  const onClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <HeaderButton
      caption="Accueil"
      icon={<MenuIcon fontSize="small" />}
      isMobile={isMobile}
      onClick={onClick} />
  );
}

export default HeaderMenuButton;
