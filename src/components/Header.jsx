import React from 'react';

const Header = ({currentUSD, currentEUR}) => {
    return (
        <div className='header'>
            <h1 className="title-header">Currency converter</h1>
            <div className="courses">
                <div className="course-card">
                    <div className="course-item-title">USD</div>
                    <div className="course-item-value">{currentUSD && currentUSD.toFixed(3)}</div>
                </div>
                <div className="course-card">
                    <div className="course-item-title">EUR</div>
                    <div className="course-item-value">{currentEUR && currentEUR.toFixed(3)}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;