import Breakpoint, { BreakpointProvider } from "react-socks"
import Typography from "@material-ui/core/Typography"

function Home() {
    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <Typography variant="h1" color="inherit" noWrap>
                    LexImpact
                </Typography>
            </Breakpoint>
        </BreakpointProvider>
    )
}

export default Home
