import styles from './index.module.scss';

import waveSVG from '../../assets/svgs/wave.svg';
// import plusSVG from "../../assets/svgs/plus-svgrepo-com.svg";
// import discordSVG from "../../assets/svgs/discord-alt-5-svgrepo-com.svg"

import expressiaLogo from "../../assets/images/expressia_logo.png";
import variables from '../../variables';

function Showcase() {
    return (
      <main className={styles.showcase}>
        <div className={styles.container}>

            <div className={styles.textSide}>
                <div className={styles.text}>
                    <h1>
                        Emojis<br />Leveled Up
                    </h1>

                    <p>
                        Elevate your chats with <strong>25,000+</strong> emojis, stickers, and 
                        profile pics—just a click away in Expressia’s built-in 
                        browser and feature set!
                    </p>
                </div>

                <div className={styles.buttons}>
                    <ul>
                        <li>
                            <a href={variables.inviteURL}>
                                <p>Add to Server</p>
                            </a>
                        </li>

                        <li className={styles.discordButton}>
                            <a href={variables.discordInviteURL}>
                                <p>Join the Discord</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.imageSide} draggable="false">
                <img src={expressiaLogo} alt='Expressia Logo'/>
            </div>

        </div>

        <img src={waveSVG} className={styles.wave} alt="Wave Graphic"/>
      </main>
    )
  }
  
  export default Showcase;
  