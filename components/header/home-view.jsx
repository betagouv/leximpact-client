import Breakpoint, { BreakpointProvider } from "react-socks"
import Typography from "@material-ui/core/Typography"

function HomeView() {
    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <Typography variant="h1" color="inherit" noWrap>
                    LexImpact
                </Typography>
            </Breakpoint>
            <Breakpoint small down />
        </BreakpointProvider>
    )
}

export default HomeView
