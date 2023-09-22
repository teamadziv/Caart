import React from 'react'
import { useState, useCallback } from 'react';
import { annuncement, annuncement_green } from '../../../assets'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon, Select } from '@shopify/polaris';

export default function AnnouncementSetting({ handleFullCartSelectChange, handleInputChange, announcementSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    const [selected, setSelected] = useState('basic');
    const handleSelectChange = (value) => {
        setSelected(value)
        handleFullCartSelectChange(value, "announcement", "timer_type")
    }

    const options = [
        { label: 'Basic', value: 'basic' },
        { label: 'Round Backgrond', value: 'round_background' },
        { label: 'Solid Background', value: 'solid_background' }
    ];

    const [selected2, setSelected2] = useState('do_nothing');
    const handleSelectChange2 = (value) => {
        setSelected2(value)
        handleFullCartSelectChange(value, "announcement", "timer_action")
    }

    const options2 = [
        { label: 'Do nothing', value: 'do_nothing' },
        { label: 'Clear cart', value: 'clear_cart' },
        { label: 'Reset time', value: 'reset_time' }
    ];

    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <img src={annuncement} />
            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Announcements</h4>
            {announcementSettings.announcement.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("announcement")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("announcement")}>
                    <Icon source={HideMinor} color="base" />
                </div>
            )}


            <div ref={id} className='caart_full_cart_sidebar_single_menu_inputs_container'>
                <h3 className='caart_full_cart_sidebar_single_menu_inputs_container_heading' onClick={() => removeActiveInMenu(id)}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.00001 12C5.74401 12 5.48801 11.902 5.29301 11.707L0.293006 6.70701C-0.0979941 6.31601 -0.0979941 5.68401 0.293006 5.29301L5.29301 0.293006C5.68401 -0.0979941 6.31601 -0.0979941 6.70701 0.293006C7.09801 0.684006 7.09801 1.31601 6.70701 1.70701L2.41401 6.00001L6.70701 10.293C7.09801 10.684 7.09801 11.316 6.70701 11.707C6.51201 11.902 6.25601 12 6.00001 12Z" fill="#008060" />
                    </svg>
                    <span>Back to Menu</span>
                </h3>
                <div className='caart_full_cart_sidebar_heading_icon_view'>
                    <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_left'>
                        <img src={annuncement_green} />
                    </div>
                    <h4>Announcements</h4>
                    {announcementSettings.announcement.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("announcement")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("announcement")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>Announcement Settings</h3>
                        <h4>Timer {"{minutes}"}</h4>
                        <input
                            type='text'
                            value={announcementSettings.announcement.timer}
                            name='timer'
                            onChange={(e) => handleInputChange(e, "announcement", "timer")}
                            autoComplete="off"
                        />
                        <h4><br />Timer Type</h4>
                        <Select
                            label=""
                            options={options}
                            onChange={handleSelectChange}
                            value={announcementSettings.announcement.timer_type}
                        />
                        <h4><br />Announcement Text</h4>
                        <textarea
                            value={announcementSettings.announcement.heading}
                            name='heading'
                            onChange={(e) => handleInputChange(e, "announcement", "heading")}
                            autoComplete="off"
                        />

                        <h4><br />Text After Timer Ends</h4>
                        <input
                            type='text'
                            value={announcementSettings.announcement.timer_end_text}
                            name='timer_end_text'
                            onChange={(e) => handleInputChange(e, "announcement", "timer_end_text")}
                            autoComplete="off"
                        />
                        <h4><br />Action After Timer Ends</h4>
                        <Select
                            label=""
                            options={options2}
                            onChange={handleSelectChange2}
                            value={announcementSettings.announcement.timer_action}
                        />
                    </li>
                    <li>
                        <h3>Colors</h3>
                        <h4>Background Color</h4>
                        <input type='color'
                            value={announcementSettings.announcement.bg_color}
                            name='bg_color'
                            onChange={(e) => handleInputChange(e, "announcement", "bg_color")} />

                        <h4><br />Text Color</h4>
                        <input type='color'
                            value={announcementSettings.announcement.color}
                            name='color'
                            onChange={(e) => handleInputChange(e, "announcement", "color")} />
                    </li>
                </ul>
            </div>
        </li>
    )
}
