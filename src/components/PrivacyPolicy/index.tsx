import Section from "../Section";
import SupportPage from "../SupportPage";

function PrivacyPolicy() {
    return (
        <SupportPage
            title='Privacy Policy'
            effectiveDate='Effective date: November 17, 2024'
            about='
            Your privacy is important to me. This Privacy Policy explains how Expressia Discord Bot ("Bot") 
            collects, uses, and protects your information. By using the Bot, you consent to the practices described below.'
            >
                <Section
                    title="1. Information Collected"
                    description="
                    Expressia may collect user IDs while processing command requests.
                    " />

                <Section
                    title="2. How We Use Your Information"
                    description="
                    User IDs serve to identify server members and their authorization for importing and managing server assets.
                    " />

                <Section
                    title="3. Data Storage and Retention"
                    description="
                    User IDs are stored for a maximum of 15 minutes after a command request.
                    " />

                <Section
                    title="4. Contact"
                    description="
                    For inquiries or concerns, contact me at dev.elitezen@gmail.com.
                    " />
        </SupportPage>
    )
}

export default PrivacyPolicy;