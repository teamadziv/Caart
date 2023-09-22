import React from 'react'

export default function CartHeaderPreview({ cartHeaderSettings }) {
    return (
        <div className='caart_full_cart_preview_container_cart_header' style={{ color: `${cartHeaderSettings.cart_header.color}` }}>
            <span>{cartHeaderSettings.cart_header.heading}</span>
            <span>x</span>
        </div >
    )
}
