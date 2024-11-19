import Section from '../Section';
import SupportPage from '../SupportPage';

import { Link } from 'react-router-dom';

function TermsOfService() {
    return (
        <SupportPage
            title='Terms of Service'
            effectiveDate='Effective date: November 17, 2024'
            about='Welcome to Expressia! These Terms of Service ("Terms") 
                govern your use of the Expressia Discord Bot ("Bot"). 
                By using the Bot, you agree to comply with these Terms. 
                If you do not agree, you may not use the Bot.'
            >
                <Section
                    title="1. Overview of Expressia"
                    description="
                    Expressia is a Discord Bot designed to assist users in searching and importing emojis, stickers, 
                    and profile pictures within Discord servers.
                    " />

                <Section
                    title="2. Acceptable Use"
                    description="
                    To use the Bot, you must agree to: use the bot in accordance with Discord's Terms of Service and Community Guidelines,
                    Not abuse, exploit, or modify the Bot in any unauthorized manner,
                    or use the Bot for illegal activities, harassment, or to distribute inappropriate content.
                    " />

                <Section
                    title="3. Data Collection and Privacy"
                    description="
                    Expressia may collect certain data to improve functionality and provide services. 
                    This data may include but is not limited to:
                    User IDs and usernames (for verifying member's emoji and sticker permissions in a Discord server).
                    " />

                <p>
                    <strong>
                        For detailed information about how your data is handled, please review the <Link to="/privacy-policy">Privacy Policy</Link>
                    </strong>
                </p>

                <Section
                    title="4. Contact"
                    description="
                    For inquiries or concerns, contact me at dev.elitezen@gmail.com.
                    " />
        </SupportPage>
    )
}


export default TermsOfService;