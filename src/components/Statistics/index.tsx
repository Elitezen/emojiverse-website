import styles from './index.module.scss';
import Card from '../Card';
import ScrollAnimation from 'react-animate-on-scroll';

import checkmarkSVG from '../../assets/svgs/checkmark-svgrepo-com.svg';
import chatHeartSVG from '../../assets/svgs/chat-heart-svgrepo-com.svg';
import usersSVG from '../../assets/svgs/users-svgrepo-com.svg';
import imagesSVG from '../../assets/svgs/images-interface-symbol-svgrepo-com.svg';

const Checkmark = () => (
    <img src={checkmarkSVG} className={styles.checkmark} alt="Checkmark icon"/>
)

function Statistics() {
    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce offset={250}>
            <section className={styles.statistics}>
                <h2 className={styles.title}><span>Verified <Checkmark /></span> by Discord, Loved by Thousands</h2>

                <div className={styles.cards}>
                    <Card
                        title='+800'
                        description='Servers actively managing and keeping their emojis and stickers trendy.'
                        icon={chatHeartSVG}
                        iconAlt='Chatting icon'/>

                    <Card 
                        title='+80,000'
                        description='Users exploring stylish and eye-catching profile pictures.'
                        icon={usersSVG}
                        iconAlt='Multiple users icon'/>

                    <Card 
                        title='+25,000'
                        description='Available assets, including emojis, stickers, and profile pictures, neatly organized into dozens of categories.'
                        icon={imagesSVG}
                        iconAlt='Image file icon'/>
                </div>
            </section>
        </ScrollAnimation>
    )
}

export default Statistics
