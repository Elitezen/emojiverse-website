import Header from '../Header';
import styles from './index.module.scss';
import Footer from '../Footer';
import React from 'react';

interface SupportPageOptions {
    title: string;
    effectiveDate: string;
    about: string;
    children: React.ReactNode;
}

function SupportPage({ 
    title,
    effectiveDate,
    about,
    children
}:SupportPageOptions) {
    return (
        <main>
            <Header />
            
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1>{title}</h1>
                    <h2>{effectiveDate}</h2>
                </div>

                <div className={styles.about}>
                    <p>{about}</p>
                </div>

                <div className={styles.sections}>
                    {children}
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default SupportPage;