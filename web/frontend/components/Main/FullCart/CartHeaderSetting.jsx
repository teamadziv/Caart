import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';


export default function CartHeaderSetting({ handleInputChange, cartHeaderSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {



    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9806 1.19613C11.0889 0.654566 10.7377 0.127741 10.1961 0.019429C9.65457 -0.0888828 9.12774 0.262334 9.01943 0.803894L7.01943 10.8039C6.91112 11.3455 7.26233 11.8723 7.80389 11.9806C8.34545 12.0889 8.87228 11.7377 8.98059 11.1961L10.9806 1.19613Z" fill="#5C5F62" />
                    <path d="M5.8 2.4C6.13137 2.84183 6.04183 3.46863 5.6 3.8L2.66667 6L5.6 8.2C6.04183 8.53137 6.13137 9.15817 5.8 9.6C5.46863 10.0418 4.84183 10.1314 4.4 9.8L0.4 6.8C0.148194 6.61114 0 6.31475 0 6C0 5.68524 0.148194 5.38885 0.4 5.2L4.4 2.2C4.84183 1.86863 5.46863 1.95817 5.8 2.4Z" fill="#5C5F62" />
                    <path d="M12.2 9.6C11.8686 9.15817 11.9582 8.53137 12.4 8.2L15.3333 6L12.4 3.8C11.9582 3.46863 11.8686 2.84183 12.2 2.4C12.5314 1.95817 13.1582 1.86863 13.6 2.2L17.6 5.2C17.8518 5.38886 18 5.68525 18 6C18 6.31476 17.8518 6.61115 17.6 6.8L13.6 9.8C13.1582 10.1314 12.5314 10.0418 12.2 9.6Z" fill="#5C5F62" />
                </svg>
            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Cart Header</h4>
            {cartHeaderSettings.cart_header.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("cart_header")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("cart_header")}>
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
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9806 1.19613C11.0889 0.654566 10.7377 0.127741 10.1961 0.019429C9.65457 -0.0888828 9.12774 0.262334 9.01943 0.803894L7.01943 10.8039C6.91112 11.3455 7.26233 11.8723 7.80389 11.9806C8.34545 12.0889 8.87228 11.7377 8.98059 11.1961L10.9806 1.19613Z" fill="#5C5F62" />
                            <path d="M5.8 2.4C6.13137 2.84183 6.04183 3.46863 5.6 3.8L2.66667 6L5.6 8.2C6.04183 8.53137 6.13137 9.15817 5.8 9.6C5.46863 10.0418 4.84183 10.1314 4.4 9.8L0.4 6.8C0.148194 6.61114 0 6.31475 0 6C0 5.68524 0.148194 5.38885 0.4 5.2L4.4 2.2C4.84183 1.86863 5.46863 1.95817 5.8 2.4Z" fill="#5C5F62" />
                            <path d="M12.2 9.6C11.8686 9.15817 11.9582 8.53137 12.4 8.2L15.3333 6L12.4 3.8C11.9582 3.46863 11.8686 2.84183 12.2 2.4C12.5314 1.95817 13.1582 1.86863 13.6 2.2L17.6 5.2C17.8518 5.38886 18 5.68525 18 6C18 6.31476 17.8518 6.61115 17.6 6.8L13.6 9.8C13.1582 10.1314 12.5314 10.0418 12.2 9.6Z" fill="#5C5F62" />
                        </svg>
                    </div>
                    <h4>Cart Header</h4>
                    {cartHeaderSettings.cart_header.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("cart_header")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("cart_header")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>Cart Heading</h3>
                        <h4>Heading Text</h4>
                        <textarea
                            value={cartHeaderSettings.cart_header.heading}
                            name='heading'
                            onChange={(e) => handleInputChange(e, "cart_header", "heading")}
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <h3>Colors</h3>
                        <h4>Text Colors</h4>
                        <input type='color'
                            value={cartHeaderSettings.cart_header.color}
                            name='color'
                            onChange={(e) => handleInputChange(e, "cart_header", "color")} />
                    </li>
                </ul>
            </div>
        </li>
    )
}
