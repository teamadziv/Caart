import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

export default function NoteSettings({ handleInputChange, noteSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg style={{ position: 'relative', top: '-3px' }} width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.37868 0C8.7765 0 9.15804 0.158035 9.43934 0.439339L13.5607 4.56066C13.842 4.84196 14 5.2235 14 5.62132V18.5C14 19.3284 13.3284 20 12.5 20H1.5C0.671573 20 0 19.3284 0 18.5V1.5C0 0.671573 0.671573 0 1.5 0H8.37868ZM3 5H7V7H3V5ZM11 9V11H3V9H11ZM3 15V13H10V15H3Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Order Notes</h4>
            {noteSettings.order_notes.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("order_notes")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("order_notes")}>
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
                        <svg style={{ position: 'relative', top: '-3px' }} width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.37868 0C8.7765 0 9.15804 0.158035 9.43934 0.439339L13.5607 4.56066C13.842 4.84196 14 5.2235 14 5.62132V18.5C14 19.3284 13.3284 20 12.5 20H1.5C0.671573 20 0 19.3284 0 18.5V1.5C0 0.671573 0.671573 0 1.5 0H8.37868ZM3 5H7V7H3V5ZM11 9V11H3V9H11ZM3 15V13H10V15H3Z" fill="#008060" />
                        </svg>
                    </div>
                    <h4>Order Notes</h4>
                    {noteSettings.order_notes.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("order_notes")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("order_notes")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h4>Notes Title</h4>
                        <textarea
                            value={noteSettings.order_notes.notes_title}
                            name='notes_title'
                            onChange={(e) => handleInputChange(e, "order_notes", "notes_title")}
                            autoComplete="off"
                        />

                        <h4><br />Notes Title</h4>
                        <input type="text"
                            value={noteSettings.order_notes.notes_placeholder}
                            name='notes_placeholder'
                            onChange={(e) => handleInputChange(e, "order_notes", "notes_placeholder")}
                            autoComplete="off"
                        />
                    </li>
                </ul>
            </div>
        </li>
    )
}
