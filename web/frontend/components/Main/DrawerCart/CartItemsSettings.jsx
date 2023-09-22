import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris'

export default function CartItemsSettings({ handleInputChange, cartItemsSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillrule="evenodd" cliprule="evenodd" d="M0 1C0 0.447715 0.449317 0 1.00358 0H2.50894C3.34034 0 4.01431 0.671572 4.01431 1.5V2.06055L16.5883 2.96818C17.4651 3.02278 18.1089 3.81081 17.9846 4.67739L17.1194 10.7121C17.0135 11.4511 16.3783 12 15.6292 12H4.01431V14H14.0572C15.72 14 17.068 15.3431 17.068 17C17.068 18.6569 15.72 20 14.0572 20C12.3945 20 11.0465 18.6569 11.0465 17C11.0465 16.6494 11.1069 16.3128 11.2178 16H5.85015C5.9611 16.3128 6.02147 16.6494 6.02147 17C6.02147 18.6569 4.67352 20 3.01073 20C1.34795 20 0 18.6569 0 17C0 15.6938 0.837794 14.5825 2.00716 14.1707V3.00923C2.00711 3.00372 2.00711 2.99821 2.00716 2.99268V2H1.00358C0.449317 2 0 1.55228 0 1ZM13.0537 17C13.0537 16.4477 13.503 16 14.0572 16C14.6115 16 15.0608 16.4477 15.0608 17C15.0608 17.5523 14.6115 18 14.0572 18C13.503 18 13.0537 17.5523 13.0537 17ZM2.00716 17C2.00716 16.4477 2.45647 16 3.01073 16C3.56499 16 4.01431 16.4477 4.01431 17C4.01431 17.5523 3.56499 18 3.01073 18C2.45647 18 2.00716 17.5523 2.00716 17Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Cart Items</h4>
            {cartItemsSettings.cart_items.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("cart_items")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("cart_items")}>
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
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.449317 0 1.00358 0H2.50894C3.34034 0 4.01431 0.671572 4.01431 1.5V2.06055L16.5883 2.96818C17.4651 3.02278 18.1089 3.81081 17.9846 4.67739L17.1194 10.7121C17.0135 11.4511 16.3783 12 15.6292 12H4.01431V14H14.0572C15.72 14 17.068 15.3431 17.068 17C17.068 18.6569 15.72 20 14.0572 20C12.3945 20 11.0465 18.6569 11.0465 17C11.0465 16.6494 11.1069 16.3128 11.2178 16H5.85015C5.9611 16.3128 6.02147 16.6494 6.02147 17C6.02147 18.6569 4.67352 20 3.01073 20C1.34795 20 0 18.6569 0 17C0 15.6938 0.837794 14.5825 2.00716 14.1707V3.00923C2.00711 3.00372 2.00711 2.99821 2.00716 2.99268V2H1.00358C0.449317 2 0 1.55228 0 1ZM13.0537 17C13.0537 16.4477 13.503 16 14.0572 16C14.6115 16 15.0608 16.4477 15.0608 17C15.0608 17.5523 14.6115 18 14.0572 18C13.503 18 13.0537 17.5523 13.0537 17ZM2.00716 17C2.00716 16.4477 2.45647 16 3.01073 16C3.56499 16 4.01431 16.4477 4.01431 17C4.01431 17.5523 3.56499 18 3.01073 18C2.45647 18 2.00716 17.5523 2.00716 17Z" fill="#5C5F62" />
                        </svg>

                    </div>
                    <h4>Cart Items</h4>
                    {cartItemsSettings.cart_items.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("cart_items")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("cart_items")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>Theme Settings</h3>
                        <label htmlFor='inherit_font' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
                            <input type='checkbox'
                                name='inherit_font'
                                id='inherit_font'
                                onChange={(e) => handleInputChange(e, "cart_items", "inherit_font")} />
                            <span>Inherit Fonts from Theme</span>
                        </label>

                        <label htmlFor='show_strike_price' style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <input type='checkbox'
                                name='show_strike_price'
                                id='show_strike_price'
                                onChange={(e) => handleInputChange(e, "cart_items", "show_strike_price")} />
                            Show strike-through price
                        </label>

                    </li>
                    <li>
                        <h3>Colors</h3>
                        <h4>Background Color</h4>
                        <input type='color'
                            value={cartItemsSettings.cart_items.background_color}
                            name='background_color'
                            onChange={(e) => handleInputChange(e, "cart_items", "background_color")} />
                        <h4> <br />Cart Text Color</h4>
                        <input type='color'
                            value={cartItemsSettings.cart_items.text_color}
                            name='text_color'
                            onChange={(e) => handleInputChange(e, "cart_items", "text_color")} />
                    </li>
                </ul>
            </div>
        </li>
    )
}
