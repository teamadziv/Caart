import { ChoiceList, Button } from '@shopify/polaris';
import React from 'react'

export default function Setting({ setProgressBarIndicator, handleChange, selected, saveSettings }) {

    return (
        <>
            <div className='caart_settings_heading_text'>
                <h3>Transform Your Cart into a Visual Delight</h3>
                <p>Lets get start with your Cart's customization</p>
            </div>
            <ChoiceList
                allowMultiple
                choices={[
                    {
                        label: 'Progress Bar',
                        value: 'progress_bar',
                        helpText:
                            'Encourage Shoppers to Cart more Products to avail special Discounts.',
                    },
                    {
                        label: 'Cart Items',
                        value: 'cart_items',
                        helpText:
                            'Customize your cart widget.',
                    },
                    {
                        label: 'Product Recommendations',
                        value: 'product_recommendations',
                        helpText:
                            'Recomment relevant products to earn more.',
                    },
                    {
                        label: 'Discount',
                        value: 'discount',
                        helpText:
                            'Offer Special Discounts to attract more customers.',
                    },
                    {
                        label: 'Product Upsell',
                        value: 'product_upsell',
                        helpText:
                            'Display Product Upsells in carts and checkout to increase Average Order Value.',
                    },
                    {
                        label: 'Checkout Button',
                        value: 'checkout_button',
                        helpText:
                            'Customize your Checkout Button to match your design Needs.',
                    },
                ]}
                selected={selected}
                onChange={handleChange}
            />
            <div className="caart_initial_btn">
                <Button primary onClick={() => {
                    saveSettings()
                    setProgressBarIndicator(3)
                }}>Continue</Button>
                <p>*You can customize your settings later</p>
            </div>
        </>
    );
}
