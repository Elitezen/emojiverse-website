import styles from './index.module.scss';

interface CardOptions {
    title: string;
    description: string;
    icon: string;
    iconAlt: string;
}

function Card({
    title,
    description,
    icon,
    iconAlt
}: CardOptions) {
    return (
        <figure className={styles.card}>
            <div className={styles.iconAndText}>
                <img src={icon} alt={iconAlt}/>
                <h3>{title}</h3>
            </div>

            
            <p>{description}</p>
        </figure>
    )
}

export default Card;
