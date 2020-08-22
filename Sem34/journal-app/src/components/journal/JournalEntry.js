import React from 'react';
import moment from 'moment';

export const JournalEntry = ({ id, date, title, body, url }) => {

    const noteDate = moment(date);

    return (
        <div className="journal__entry pointer">
            
            {
                url &&
                <div
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                >
                </div>
            }

            <div className="journal__entry-body">
                <p className="journal__main-title">
                    { title }
                </p>
                <p className="journal__main-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span>
                <h4>{ noteDate.format('DD') }</h4>
            </div>
            
        </div>
    )
}
