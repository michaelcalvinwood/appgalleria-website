import React from "react";
import './SerenityRegardlessTimer.scss';
import ProductImage from '../../assets/images/serenity-regardless-timer.png';
const SerenityRegardlessTimer = () => {
    return (
        <div className='serenityregardlesstimer'>
            <div className='serenityregardlesstimer__info'>
                {/* be sure to set document icon in index.html */}
                {/* icon */}
                <h1 className='serenityregardlesstimer__title'>Serenity Regardless Timer</h1> 
                <img className='serenityregardlesstimer__image' src={ProductImage} />
                {/* description */}
                <p className='serenityregardlesstimer__privacy-label'>Privacy Policy</p>
                <p className='serenityregardlesstimer__privacy'>Serenity Regardless Timer does not collect any personal information.</p>
                <p className='serenityregardlesstimer__support-label'>Technical Support</p>
                <p className='serenityregardlesstimer__support'>
                    For technical support, send an email to <a href="mailto:support@appgalleria.com?subject=Serenity Regardless Timer">support@appgalleria.com</a>. To expedite assistance, be sure to include Serenity Regardless Timer in the Subject.
                </p>
            </div>
        </div>
    )
}

export default SerenityRegardlessTimer;