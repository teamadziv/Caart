import React from 'react'
import { p1, p2, p3 } from '../../../assets';

export default function CartItemsPreview({ cartItemsSettings }) {
    return (
        <div className='caart_full_cart_preview_container_cart_items_main caart_drawer_cart_items' style={{ backgroundColor: cartItemsSettings.cart_items.background_color }}>
            <div className='caart_full_cart_preview_container_cart_items_table'>
                <div className='caart_full_cart_preview_container_cart_items_content'>
                    <div className='caart_full_cart_preview_container_cart_items_item'>
                        <div className='caart_full_cart_preview_container_cart_items_item_col product_img'>
                            <div className='caart_full_cart_preview_container_cart_items_product_img'>
                                <div className='caart_full_cart_preview_container_cart_items_img'>
                                    <img src={p1} />
                                </div>
                                <div className='caart_full_cart_preview_container_cart_items_product_detail'>
                                    <h3>Product Title</h3>
                                    <p>$XX.XX</p>
                                    <div className='qty'>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            Remove
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
                                    <p>$XX.XX</p>
                                    <div className='qty'>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            Remove
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
                                    <p>$XX.XX</p>
                                    <div className='qty'>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='caart_full_cart_preview_container_cart_items_item_col price'>
                            Remove
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
