import variables from "../../variables";
import styles from "./index.module.scss";

const Downloader = () => {
    return (
        <div className={styles.downloader}>
            <h3>Join the emoji revolution today!</h3>
            <a href={variables.inviteURL}>
                Invite
            </a>
        </div>
    )
}

export default Downloader;