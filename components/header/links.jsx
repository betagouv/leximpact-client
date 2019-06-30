/* @flow */

import React, { type Node } from "react"
import Button from "@material-ui/core/Button"
import styles from "components/header/links-styles.scss"

function Links(): Node {
    return (
        <div>
            <Button color="inherit" className={styles.links}>
                Impôt sur le revenu
            </Button>
        </div>
    )
}

export default Links
