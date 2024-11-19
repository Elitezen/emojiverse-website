import FeatureEntry from '../FeatureEntry';
import styles from './index.module.scss';

import Feature1 from "../../assets/images/feature_1.png";
import Feature2 from "../../assets/images/feature_2.png";
import Feature3 from "../../assets/images/feature_3.png";
import { useEffect, useState } from 'react';

function Features() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const SCREEN_WIDTH_THRESHHOLD = 900;

    const usingMobileLayout = screenWidth < SCREEN_WIDTH_THRESHHOLD;

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return (
        <section className={styles.features}>
            <FeatureEntry
                title="Never Seen Before"
                description="Effortlessly find and manage emojis, stickers, and profile pictures with powerful search and organized categories."
                image={Feature1}
                imageAlt='Emoji browser preview'
                smallImage={usingMobileLayout}
                textSide={usingMobileLayout ? 'bottom' : 'left'} />

            <FeatureEntry
                title="Seamless Integration"
                description="Instantly import expressions and enjoy built-in image tools for effortless customization."
                image={Feature2}
                imageAlt='Emoji importer preview'
                smallImage={usingMobileLayout}
                textSide={usingMobileLayout ? 'bottom' : 'right'} />

            <FeatureEntry
                title="Built-in Background Remover"
                description="Eliminate boxy backgrounds and create immersive, polished assets with ease!"
                image={Feature3}
                imageAlt='Background remover with result preview'
                textSide='bottom' />
        </section>
    )
}

export default Features
