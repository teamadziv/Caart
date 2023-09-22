import React from 'react'

export default function ProgressBarPreview({ progressBarSettings }) {

    let progressBarhtml;
    if (progressBarSettings.progress_bar.total_tiers == 1) {
        progressBarhtml = <>
            <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_foreground_color }}>
                {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                    <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{progressBarSettings.progress_bar.first_tier_description}</span> */}
            </div>
        </>
    } else if (progressBarSettings.progress_bar.total_tiers == 2) {
        progressBarhtml = <>
            <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_foreground_color }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                    <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{progressBarSettings.progress_bar.first_tier_description}</span>
            </div>
            {progressBarSettings.progress_bar.show_second_tier_section == true ? (
                <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_background_color }}>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                        <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{progressBarSettings.progress_bar.second_tier_description}</span>

                </div>
            ) : (
                <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_background_color }}>

                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                        <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{progressBarSettings.progress_bar.third_tier_description}</span>

                </div>
            )}

        </>
    } else {
        progressBarhtml = <>
            <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_foreground_color }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                    <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{progressBarSettings.progress_bar.first_tier_description}</span>
            </div>
            <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_background_color }}>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                    <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{progressBarSettings.progress_bar.second_tier_description}</span>

            </div>
            <div className='caart_full_cart_preview_container_progress_bar_single' style={{ borderTopColor: progressBarSettings.progress_bar.bar_background_color }}>

                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill={progressBarSettings.progress_bar.bar_foreground_color} />
                    <path d="M11.5557 5.33333L6.6668 10.2222L4.44458 8" stroke="white" strokeWidth="1.01532" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{progressBarSettings.progress_bar.third_tier_description}</span>

            </div>
        </>
    }

    return (
        <div className='caart_full_cart_preview_container_progress_bar_main'>
            <div className="caart_full_cart_preview_container_progress_bar_heading">
                {progressBarSettings.progress_bar.reward_basis == 'item_count' ? (
                    <>
                        {progressBarSettings.progress_bar.first_tier_reward_count_text.replace('{COUNT}', progressBarSettings.progress_bar.first_tier_reward_count)}
                    </>
                ) :
                    <>
                        {progressBarSettings.progress_bar.first_tier_minimum_total_text.replace('{AMOUNT}', progressBarSettings.progress_bar.first_tier_minimum_total + '.00')}
                    </>
                }

            </div>
            <div className='caart_full_cart_preview_container_progress_bars'>
                {progressBarhtml}

            </div>
        </div>
    )
}
