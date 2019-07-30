/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import Breakpoint, { BreakpointProvider } from "react-socks";
import Typography from "@material-ui/core/Typography";

function Home() {
  return (
    <BreakpointProvider>
      <Breakpoint medium up>
        <Typography variant="h1" color="inherit" noWrap>
          LexImpact
        </Typography>
      </Breakpoint>
    </BreakpointProvider>
  );
}

export default Home;
