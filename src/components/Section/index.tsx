import styles from './index.module.scss';

interface SectionOptions {
    title: string;
    description: string;
}

function Section({ title, description }: SectionOptions) {
    return (
        <div className={styles.section}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}


export default Section;