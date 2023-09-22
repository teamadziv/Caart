import React from 'react'
import { badges } from '../../../assets';

export default function NoteBtnsBadgesPreview({ noteBtnBadgesSettings }) {
    return (
        <div className='caart_full_cart_preview_container_order_note_checkout'>
            {/* order note */}

            <div className='caart_full_cart_preview_container_order_note'>
                {noteBtnBadgesSettings.order_notes.show_section && (
                    <>
                        <h3>{noteBtnBadgesSettings.order_notes.notes_title}</h3>
                        <div className='caart_full_cart_preview_container_order_note_text'>
                            {noteBtnBadgesSettings.order_notes.notes_placeholder}
                        </div>
                    </>
                )}
            </div>


            {/* checkout buttons */}
            <div className='caart_full_cart_preview_container_checkout_badges'>

                {noteBtnBadgesSettings.discount_codes.show_section && (
                    <div className='caart_full_cart_preview_container_checkout_badges_disocunt_main'>
                        <input type="text" placeholder={noteBtnBadgesSettings.discount_codes.discount_placeholder} />
                        <div className='caart_full_cart_preview_container_checkout_badges_discount_btn'>
                            {noteBtnBadgesSettings.discount_codes.discount_btn_text}
                        </div>
                    </div>
                )}

                {/* badges */}
                {noteBtnBadgesSettings.trust_badge.show_section && noteBtnBadgesSettings.trust_badge.position === 'top' ? (
                    <div className='caart_full_cart_preview_container_badges'>
                        <img src={noteBtnBadgesSettings.trust_badge.img} />
                    </div>
                ) : ''}
                <div className='caart_full_cart_preview_container_checkout_subtotal_heading'>
                    <h3>Subtotal</h3>
                    <h4>$XX.XX</h4>
                </div>
                <div className='caart_full_cart_preview_container_checkout_btns'>
                    {noteBtnBadgesSettings.checkout_btns.show_section && (
                        <>
                            <div className='btn continue_shopping' style={
                                {
                                    backgroundColor: noteBtnBadgesSettings.checkout_btns.continue_shopping_btn_color,
                                    color: noteBtnBadgesSettings.checkout_btns.continue_shopping_btn_text_color,
                                    "--csbackgroundColorHover": noteBtnBadgesSettings.checkout_btns.continue_shopping_btn_color_hover,
                                    "--csColorHover": noteBtnBadgesSettings.checkout_btns.continue_shopping_btn_text_color_hover,
                                }
                            }>
                                {noteBtnBadgesSettings.checkout_btns.continue_shopping_btn_text}
                            </div>
                            <div className='btn checkout' style={
                                {
                                    backgroundColor: noteBtnBadgesSettings.checkout_btns.checkout_btn_color,
                                    color: noteBtnBadgesSettings.checkout_btns.checkout_btn_text_color,
                                    "--ckbackgroundColorHover": noteBtnBadgesSettings.checkout_btns.checkout_btn_color_hover,
                                    "--ckColorHover": noteBtnBadgesSettings.checkout_btns.checkout_btn_text_color_hover,
                                }
                            }>
                                {noteBtnBadgesSettings.checkout_btns.checkout_btn_text}
                            </div>
                        </>
                    )}

                </div>
                {/* badges */}
                {noteBtnBadgesSettings.trust_badge.show_section && noteBtnBadgesSettings.trust_badge.position === 'bottom' ? (
                    <div className='caart_full_cart_preview_container_badges'>
                        <img src={noteBtnBadgesSettings.trust_badge.img} />
                    </div>
                ) : ''}

            </div>
        </div>
    )
}
