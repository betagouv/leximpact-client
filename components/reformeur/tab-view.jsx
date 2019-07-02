import Typography from "@material-ui/core/Typography"
import styles from "components/reformeur/tab.scss"

function TabView({ dir, children }) {
    return (
        <Typography component="div" dir={dir} className={styles.Tab}>
            {children}
        </Typography>
    )
}

export default TabView
