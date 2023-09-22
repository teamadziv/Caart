import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

export default function DiscountCodeSettings({ handleInputChange, discountCodeSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4142 0.585786C9.63316 -0.195262 8.36683 -0.195262 7.58578 0.585786L7.05055 1.12102C6.48794 1.68363 5.72488 1.9997 4.92923 1.9997H4C2.89543 1.9997 2 2.89513 2 3.9997V4.92893C2 5.72458 1.68393 6.48764 1.12132 7.05025L0.585786 7.58579C-0.195263 8.36683 -0.195262 9.63316 0.585787 10.4142L1.12132 10.9497C1.68393 11.5124 2 12.2754 2 13.0711V13.9997C2 15.1043 2.89543 15.9997 4 15.9997H4.92863C5.72428 15.9997 6.48734 16.3158 7.04995 16.8784L7.58579 17.4142C8.36683 18.1953 9.63316 18.1953 10.4142 17.4142L10.95 16.8784C11.5127 16.3158 12.2757 15.9997 13.0714 15.9997H14C15.1046 15.9997 16 15.1043 16 13.9997V13.0711C16 12.2754 16.3161 11.5124 16.8787 10.9497L17.4142 10.4142C18.1953 9.63316 18.1953 8.36683 17.4142 7.58578L16.8787 7.05025C16.3161 6.48764 16 5.72458 16 4.92893V3.9997C16 2.89513 15.1046 1.9997 14 1.9997H13.0708C12.2751 1.9997 11.5121 1.68363 10.9494 1.12102L10.4142 0.585786ZM11.8321 6.5547C12.1384 6.09517 12.0142 5.4743 11.5547 5.16795C11.0952 4.8616 10.4743 4.98577 10.1679 5.4453L6.16795 11.4453C5.8616 11.9048 5.98577 12.5257 6.4453 12.8321C6.90483 13.1384 7.5257 13.0142 7.83205 12.5547L11.8321 6.5547ZM5.5 8C6.32843 8 7 7.32843 7 6.5C7 5.67157 6.32843 5 5.5 5C4.67157 5 4 5.67157 4 6.5C4 7.32843 4.67157 8 5.5 8ZM14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10C13.3284 10 14 10.6716 14 11.5Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Discount Codes</h4>
            {discountCodeSettings.discount_codes.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("discount_codes")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("discount_codes")}>
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
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.4142 0.585786C9.63316 -0.195262 8.36683 -0.195262 7.58578 0.585786L7.05055 1.12102C6.48794 1.68363 5.72488 1.9997 4.92923 1.9997H4C2.89543 1.9997 2 2.89513 2 3.9997V4.92893C2 5.72458 1.68393 6.48764 1.12132 7.05025L0.585786 7.58579C-0.195263 8.36683 -0.195262 9.63316 0.585787 10.4142L1.12132 10.9497C1.68393 11.5124 2 12.2754 2 13.0711V13.9997C2 15.1043 2.89543 15.9997 4 15.9997H4.92863C5.72428 15.9997 6.48734 16.3158 7.04995 16.8784L7.58579 17.4142C8.36683 18.1953 9.63316 18.1953 10.4142 17.4142L10.95 16.8784C11.5127 16.3158 12.2757 15.9997 13.0714 15.9997H14C15.1046 15.9997 16 15.1043 16 13.9997V13.0711C16 12.2754 16.3161 11.5124 16.8787 10.9497L17.4142 10.4142C18.1953 9.63316 18.1953 8.36683 17.4142 7.58578L16.8787 7.05025C16.3161 6.48764 16 5.72458 16 4.92893V3.9997C16 2.89513 15.1046 1.9997 14 1.9997H13.0708C12.2751 1.9997 11.5121 1.68363 10.9494 1.12102L10.4142 0.585786ZM11.8321 6.5547C12.1384 6.09517 12.0142 5.4743 11.5547 5.16795C11.0952 4.8616 10.4743 4.98577 10.1679 5.4453L6.16795 11.4453C5.8616 11.9048 5.98577 12.5257 6.4453 12.8321C6.90483 13.1384 7.5257 13.0142 7.83205 12.5547L11.8321 6.5547ZM5.5 8C6.32843 8 7 7.32843 7 6.5C7 5.67157 6.32843 5 5.5 5C4.67157 5 4 5.67157 4 6.5C4 7.32843 4.67157 8 5.5 8ZM14 11.5C14 12.3284 13.3284 13 12.5 13C11.6716 13 11 12.3284 11 11.5C11 10.6716 11.6716 10 12.5 10C13.3284 10 14 10.6716 14 11.5Z" fill="#5C5F62" />
                        </svg>

                    </div>
                    <h4>Discount Codes</h4>
                    {discountCodeSettings.discount_codes.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("discount_codes")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("discount_codes")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h4>Discount Input Placeholder</h4>
                        <input type='text'
                            value={discountCodeSettings.discount_codes.discount_placeholder}
                            name='discount_placeholder'
                            onChange={(e) => handleInputChange(e, "discount_codes", "discount_placeholder")}
                            autoComplete="off"
                        />
                        <h4><br />Discount Apply Button Text</h4>
                        <input type='text'
                            value={discountCodeSettings.discount_codes.discount_btn_text}
                            name='discount_btn_text'
                            onChange={(e) => handleInputChange(e, "discount_codes", "discount_btn_text")}
                            autoComplete="off"
                        />
                    </li>
                </ul>
            </div>
        </li>
    )
}
