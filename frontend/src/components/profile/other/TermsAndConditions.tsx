import { TERMS_AND_CONDITIONS } from "../../../helpers/termsAndConditionsConstants";

const TermsAndConditions = ({ props }: { props: any; }) => {

    const handleClickBack = () => {
        props.handleBackClick()
    }

    return (
        <div className="update-jawn">
            <br/>
            <div className="terms-section">
                <div className="terms-title">
                    {TERMS_AND_CONDITIONS.TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.UPDATE_DATE}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.INTRODUCTION_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.INTRODUCTION_TEXT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.DEFINITIONS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.DEFINITIONS_USER}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.DEFINITIONS_SERVICE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.DEFINITIONS_CONTENT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.USER_OBLIGATIONS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.USER_OBLIGATIONS_ACCOUNT_CREATION}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.USER_OBLIGATIONS_PROHIBITED_CONDUCT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.USAGE_RIGHTS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.USAGE_RIGHTS_LICENSE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.USAGE_RIGHTS_RESTRICTIONS}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_INTELLECTUAL_PROPERTY}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.CONTENT_OWNERSHIP_USER_CONTENT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_DATA_COLLECTION}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.PRIVACY_AND_DATA_PROTECTION_DATA_SHARING}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_FEES}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_BILLING}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.PAYMENT_AND_SUBSCRIPTIONS_TERMS_REFUNDS}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.THIRD_PARTY_LINKS_AND_SERVICES_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.THIRD_PARTY_LINKS_AND_SERVICES_TEXT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_GOVERNING_LAW}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.DISPUTE_RESOLUTION_TEXT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.LIMITATION_OF_LIABILITY_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.LIMITATION_OF_LIABILITY_TEXT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.TERMINATION_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.TERMINATION_BY_US}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.TERMINATION_BY_YOU}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.CHANGES_TO_TERMS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.CHANGES_TO_TERMS_TEXT}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.CONTACT_INFORMATION_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.CONTACT_INFORMATION_TEXT}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.SUPPORT_EMAIL}
                </div>
            </div>
            <div className="terms-section">
                <div className="terms-sub-title">
                    {TERMS_AND_CONDITIONS.MISCELLANEOUS_TITLE}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.MISCELLANEOUS_ENTIRE_AGREEMENT}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.MISCELLANEOUS_SEVERABILITY}
                </div>
                <div className="terms-text">
                    {TERMS_AND_CONDITIONS.MISCELLANEOUS_WAIVER}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}
export default TermsAndConditions;