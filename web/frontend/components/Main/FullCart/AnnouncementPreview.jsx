import React, { useState, useRef, useEffect } from 'react'
import Countdown from 'react-countdown';

export default function AnnouncementPreview({ announcementSettings }) {

    const convertToMilliseconds = (timeString) => {
        const timeParts = timeString.split(':');
        let totalMilliseconds = 0;

        if (timeParts.length === 4) {
            const [days, hours, minutes, seconds] = timeParts;
            totalMilliseconds = (Number(days) * 24 * 3600 + Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)) * 1000;
        } else if (timeParts.length === 3) {
            const [hours, minutes, seconds] = timeParts;
            totalMilliseconds = (Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)) * 1000;
        } else if (timeParts.length === 2) {
            const [minutes, seconds] = timeParts;
            totalMilliseconds = (Number(minutes) * 60 + Number(seconds)) * 1000;
        }

        return totalMilliseconds;
    };
    const milliseconds1 = convertToMilliseconds(announcementSettings.announcement.timer);



    const [showOtherText, setShowOtherText] = useState(false);
    const [isRestarting, setIsRestarting] = useState(false);
    const countdownRef = useRef(null);
    useEffect(() => {
        if (isRestarting) {
            countdownRef.current.start();
            setIsRestarting(false);
        }
        console.log('h')
    }, [isRestarting, announcementSettings.announcement.timer, announcementSettings.announcement.timer_action]);

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <span></span>;
        } else {
            // Render the countdown timer
            const timerClass = announcementSettings.announcement.timer_type
            return (
                <div className={"countdown-timer " + timerClass}>
                    <span className="countdown-item">{hours < 10 ? '0' + hours : hours}</span>
                    <span className="countdown-separator">:</span>
                    <span className="countdown-item">{minutes < 10 ? '0' + minutes : minutes}</span>
                    <span className="countdown-separator">:</span>
                    <span className="countdown-item">{seconds < 10 ? '0' + seconds : seconds}</span>
                </div>
            );
        }
    };

    const handleCountdownComplete = () => {
        if (announcementSettings.announcement.timer_action == 'reset_time') {
            setIsRestarting(true);
        } else {
            setShowOtherText(true)
        }
    };

    const spliter = announcementSettings.announcement.heading.split('[TIMER]')
    const updated_string = spliter.map((part, index) => (
        <React.Fragment key={index}>
            {part}
            {index < spliter.length - 1 && <Countdown ref={countdownRef} date={Date.now() + milliseconds1} onComplete={handleCountdownComplete} renderer={renderer} />}
        </React.Fragment>
    ));


    return (
        <div className='caart_full_cart_preview_container_announcenments' style={{ backgroundColor: `${announcementSettings.announcement.bg_color}` }}>
            <span style={{ color: `${announcementSettings.announcement.color}` }}>
                {showOtherText == true ? announcementSettings.announcement.timer_end_text : updated_string}
            </span>
        </div>
    )
}
