import ScrollAnimation from 'react-animate-on-scroll';
import styles from './index.module.scss';

type ContentSide = 'left' | 'right' | 'bottom';

interface FeatureEntry {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    textSide: ContentSide;
    smallImage?: boolean;
}

function FeatureEntry({
    title,
    description,
    image,
    imageAlt,
    textSide,
    smallImage
}: FeatureEntry) {
    let contentOrder:Record<ContentSide, string> = {
        'left': styles.textSideLeft,
        'right': styles.textSideRight,
        'bottom': styles.textSideBottom
    }

    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce>
            <div className={`${styles.featureEntry} ${contentOrder[textSide]}`}>
                <div 
                    className={styles.text}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <img src={image} className={smallImage ? styles.smallImage : ''} alt={imageAlt}/>
            </div>
        </ScrollAnimation>
    )
}

export default FeatureEntry;
