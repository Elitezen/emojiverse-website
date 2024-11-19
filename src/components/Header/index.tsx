import styles from './index.module.scss';
import variables from '../../variables';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>
                    <a href="/">Expressia</a>
                </h1>

                <ul>
                    {/* <li>
                        <a href="#" className={styles.supportBtn}>
                            Support
                        </a>
                    </li> */}

                    <li>
                        <a href={variables.inviteURL} className={styles.inviteBtn}>
                            Invite
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;