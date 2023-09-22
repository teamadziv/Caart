import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris'

export default function BtnsSettings({ handleInputChange, btnsSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H18.5C19.3284 0 20 0.671573 20 1.5V7.5C20 8.32843 19.3284 9 18.5 9H12.6111C11.7827 9 11.1111 8.32843 11.1111 7.5V5.11111C11.1111 4.49746 10.6137 4 10 4C9.38635 4 8.88889 4.49746 8.88889 5.11111V7.5C8.88889 8.32843 8.21732 9 7.38889 9H1.5C0.671573 9 0 8.32843 0 7.5V1.5Z" fill="#5C5F62" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5V9.38395C13 9.60476 13.1448 9.79942 13.3563 9.86287L16.0509 10.6712C17.2356 11.0266 17.9823 12.1949 17.8074 13.4194L17.1739 17.8536C16.998 19.0852 15.9432 20 14.6991 20H6.95975C5.98462 20 5.09848 19.433 4.68985 18.5476L2.62971 14.084C2.37545 13.5331 2.32482 12.8823 2.52306 12.3066C2.73208 11.6995 3.24171 11.1479 4.03865 11.0341C5.07368 10.8862 6.0549 11.2254 7 11.8533V5ZM10 4C9.44772 4 9 4.44772 9 5V12.7929C9 14.1829 7.39135 14.7143 6.47314 13.9539C5.52573 13.1694 4.88246 12.9663 4.40411 13.0048C4.40179 13.0243 4.40076 13.0481 4.40256 13.076C4.40622 13.1328 4.42085 13.1922 4.44563 13.2459L6.50577 17.7095C6.5875 17.8866 6.76472 18 6.95975 18H14.6991C14.9479 18 15.1588 17.817 15.194 17.5707L15.8275 13.1365C15.8625 12.8916 15.7131 12.658 15.4762 12.5869L12.7816 11.7785C11.7242 11.4613 11 10.488 11 9.38395V5C11 4.44772 10.5523 4 10 4Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Checkout Buttons</h4>
            {btnsSettings.checkout_btns.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("checkout_btns")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("checkout_btns")}>
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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H18.5C19.3284 0 20 0.671573 20 1.5V7.5C20 8.32843 19.3284 9 18.5 9H12.6111C11.7827 9 11.1111 8.32843 11.1111 7.5V5.11111C11.1111 4.49746 10.6137 4 10 4C9.38635 4 8.88889 4.49746 8.88889 5.11111V7.5C8.88889 8.32843 8.21732 9 7.38889 9H1.5C0.671573 9 0 8.32843 0 7.5V1.5Z" fill="#008060" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5V9.38395C13 9.60476 13.1448 9.79942 13.3563 9.86287L16.0509 10.6712C17.2356 11.0266 17.9823 12.1949 17.8074 13.4194L17.1739 17.8536C16.998 19.0852 15.9432 20 14.6991 20H6.95975C5.98462 20 5.09848 19.433 4.68985 18.5476L2.62971 14.084C2.37545 13.5331 2.32482 12.8823 2.52306 12.3066C2.73208 11.6995 3.24171 11.1479 4.03865 11.0341C5.07368 10.8862 6.0549 11.2254 7 11.8533V5ZM10 4C9.44772 4 9 4.44772 9 5V12.7929C9 14.1829 7.39135 14.7143 6.47314 13.9539C5.52573 13.1694 4.88246 12.9663 4.40411 13.0048C4.40179 13.0243 4.40076 13.0481 4.40256 13.076C4.40622 13.1328 4.42085 13.1922 4.44563 13.2459L6.50577 17.7095C6.5875 17.8866 6.76472 18 6.95975 18H14.6991C14.9479 18 15.1588 17.817 15.194 17.5707L15.8275 13.1365C15.8625 12.8916 15.7131 12.658 15.4762 12.5869L12.7816 11.7785C11.7242 11.4613 11 10.488 11 9.38395V5C11 4.44772 10.5523 4 10 4Z" fill="#008060" />
                        </svg>

                    </div>
                    <h4>Checkout Buttons</h4>
                    {btnsSettings.checkout_btns.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("checkout_btns")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("checkout_btns")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>Checkout Button Settings</h3>
                        <h4>Button Text</h4>
                        <input type="text"
                            value={btnsSettings.checkout_btns.checkout_btn_text}
                            name='checkout_btn_text'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "checkout_btn_text")}
                        />
                        <h4><br />Button Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.checkout_btn_color}
                            name='checkout_btn_color'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "checkout_btn_color")} />
                        <h4><br />Button Color Hover</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.checkout_btn_color_hover}
                            name='checkout_btn_color_hover'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "checkout_btn_color_hover")} />
                        <h4><br />Button Text Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.checkout_btn_text_color}
                            name='checkout_btn_text_color'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "checkout_btn_text_color")} />
                        <h4><br />Button Text Hover Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.checkout_btn_text_color_hover}
                            name='checkout_btn_text_color_hover'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "checkout_btn_text_color_hover")} />
                    </li>
                    <li>
                        <h3>Continue Shopping Button Settings</h3>
                        <h4>Button Text</h4>
                        <input type="text"
                            value={btnsSettings.checkout_btns.continue_shopping_btn_text}
                            name='continue_shopping_btn_text'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "continue_shopping_btn_text")}
                        />
                        <h4><br />Button Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.continue_shopping_btn_color}
                            name='continue_shopping_btn_color'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "continue_shopping_btn_color")} />
                        <h4><br />Button Color Hover</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.continue_shopping_btn_color_hover}
                            name='continue_shopping_btn_color_hover'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "continue_shopping_btn_color_hover")} />
                        <h4><br />Button Text Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.continue_shopping_btn_text_color}
                            name='continue_shopping_btn_text_color'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "continue_shopping_btn_text_color")} />
                        <h4><br />Button Text Hover Color</h4>
                        <input type='color'
                            value={btnsSettings.checkout_btns.continue_shopping_btn_text_color_hover}
                            name='continue_shopping_btn_text_color_hover'
                            onChange={(e) => handleInputChange(e, "checkout_btns", "continue_shopping_btn_text_color_hover")} />
                    </li>

                </ul>
            </div>
        </li>
    )
}
