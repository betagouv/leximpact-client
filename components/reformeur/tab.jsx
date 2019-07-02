import Typography from "@material-ui/core/Typography"
import styles from "components/reformeur/tab-styles.scss"

function Tab({ dir, children }) {
    return (
        <Typography component="div" dir={dir} className={styles.tab}>
            {children}
        </Typography>
    )
}

export default Tab
