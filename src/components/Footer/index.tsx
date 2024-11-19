import styles from './index.module.scss';

import WaveSVG from '../../assets/svgs/wave-bottom.svg';
import variables from '../../variables';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={WaveSVG} className={styles.wave} alt="Wave graphic"/>

            <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>

                <li>
                    <a href="/terms-of-service">
                        Terms of Service
                    </a>
                </li>

                <li>
                    <a href="/privacy-policy">
                        Privacy Policy
                    </a>
                </li>

                <li>
                    <a href={variables.discordInviteURL}>
                        Discord
                    </a>
                </li>
            </ul>

            <p>&copy;2024 Elitezen</p>
        </footer>
    )
}

export default Footer;