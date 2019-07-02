import Button from "@material-ui/core/Button"
import styles from "components/header/links.scss"

function LinksView() {
    return (
        <div>
            <Button color="inherit" className={styles.Links}>
                Impôt sur le revenu
            </Button>
        </div>
    )
}

export default LinksView
