import type { Node } from "react"

type Props = {
    children: Node,
}

function Theme({ children }: Props) {
    return <div>{children}</div>
}

export default Theme
