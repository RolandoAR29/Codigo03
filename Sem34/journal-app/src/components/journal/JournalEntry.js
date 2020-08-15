import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://cdn1.i-scmp.com/sites/default/files/topics/2017/09/26/3-space_science.jpg)'
                }}
            >
            </div>
            
            <div className="journal__entry-body">
                <p className="journal__main-title">
                    Un nuevo día
                </p>
                <p className="journal__main-content">
                    lorem impsum dolo et it samet
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>13</h4>
            </div>
            
        </div>
    )
}
