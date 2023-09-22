import React from 'react'
import { p1, p2, p3 } from '../../../assets';

export default function CartItemsPreview({ cartItemsSettings }) {
    return (
        <div className='caart_full_cart_preview_container_cart_items_main' style={{ backgroundColor: cartItemsSettings.cart_items.background_color }}>
            <div className='caart_full_cart_preview_container_cart_items_table'>
                <div className='caart_full_cart_preview_container_cart_items_header'>
                    <div className='caart_full_cart_preview_container_cart_items_header_item' style={{ color: cartItemsSettings.cart_items.text_color }}>
                        PRODUCT
                    </div>
                    <div className='caart_full_cart_preview_container_cart_items_header_item' style={{ color: cartItemsSettings.cart_items.text_color }}>
                        PRICE
                    </div>
                    <div className='caart_full_cart_preview_container_cart_items_header_item' style={{ color: cartItemsSettings.cart_items.text_color }}>
                        QTY
                    </div>
                    <div className='caart_full_cart_preview_container_cart_items_header_item' style={{ color: cartItemsSettings.cart_items.text_color }}>
                        TOTAL
                    </div>
                </div>
                <div className='caart_full_cart_preview_container_cart_items_content'>
                    <div className='caart_full_cart_preview_container_cart_items_item'>
                        <div className='caart_full_cart_preview_container_cart_items_item_col product_img'>
                            <div className='caart_full_cart_preview_container_cart_items_product_img'>
                                <div className='caart_full_cart_preview_container_cart_items_img'>
                                    <img src={p1} />
                                </div>
                                <div className='caart_full_cart_preview_container_cart_items_product_detail'>
                                    <h3>Product Title</h3>
                                    <h4>Product Properties</h4>
                                    <p>$XX.XX</p>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col qty'>
                            <div className='qty'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                    </div>
                    <div className='caart_full_cart_preview_container_cart_items_item'>
                        <div className='caart_full_cart_preview_container_cart_items_item_col product_img'>
                            <div className='caart_full_cart_preview_container_cart_items_product_img'>
                                <div className='caart_full_cart_preview_container_cart_items_img'>
                                    <img src={p2} />
                                </div>
                                <div className='caart_full_cart_preview_container_cart_items_product_detail'>
                                    <h3>Product Title</h3>
                                    <h4>Product Properties</h4>
                                    <p>$XX.XX</p>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col qty'>
                            <div className='qty'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                    </div>
                    <div className='caart_full_cart_preview_container_cart_items_item'>
                        <div className='caart_full_cart_preview_container_cart_items_item_col product_img'>
                            <div className='caart_full_cart_preview_container_cart_items_product_img'>
                                <div className='caart_full_cart_preview_container_cart_items_img'>
                                    <img src={p3} />
                                </div>
                                <div className='caart_full_cart_preview_container_cart_items_product_detail'>
                                    <h3>Product Title</h3>
                                    <h4>Product Properties</h4>
                                    <p>$XX.XX</p>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col qty'>
                            <div className='qty'>
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            <span>$XX.XX</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
