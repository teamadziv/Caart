import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Card, Select, Icon, TextField, ButtonGroup, Toast, Frame } from "@shopify/polaris"
import {
    CircleAlertMajor
} from '@shopify/polaris-icons';
import { fullCartType, drawerCartType, stickyCartType, tickE } from '../../assets'
import { useAuthenticatedFetch } from '../../hooks/useAuthenticatedFetch.js';
export default function Settings() {
    const fetch = useAuthenticatedFetch();
    let initialState = {
        enable_carts: {
            full_cart: false,
            drawer_cart: false,
            sticky_cart: false
        },
        review_app: '',
        cart_limit: 0,
        apply_discount: 'both',
        html_position: '',
        cart_html: ``,
        cart_css: ``
    }
    const [settingsData, setsettingsData] = useState(initialState)



    const optionsReviewApp = [
        { label: 'Select review app', value: '' },
        { label: 'Loox', value: 'loox' },
        { label: 'Product reviews', value: 'product_reviews' },
        { label: 'Yotpo', value: 'yotpo' },
        { label: 'Reviews.io', value: 'reviews_io' },
    ];
    const optionsReviewApp2 = [
        { label: 'Apply both discount', value: 'both' },
        { label: "Apply Shopify's Discount", value: 'shoipfy_discount' },
        { label: "Apply Caart's Discount", value: 'caart_discount' },
    ];
    const optionsReviewApp3 = [
        { label: 'Select HTML Location', value: '' },
        { label: "Above announcements/rewards", value: 'above_announcements_rewards' },
        { label: "Below header/announcements/rewards", value: 'below_announcements_rewards' },
        { label: "Above footer/add-ons", value: 'below_footer_addons' },
        { label: "Below checkout button", value: 'below_checkout_buttons' },
        { label: "On empty cart screen", value: 'on_empty_cart_screen' }
    ];

    const handleSelectChange = (val, feild) => {
        setsettingsData(prev => {
            return {
                ...prev,
                [feild]: val
            }
        })
    }


    const [active, setActive] = useState(false);

    const toggleActive = () => setActive((active) => !active)

    const toastMarkup = active ? (
        <Toast content="Settings Saved" onDismiss={toggleActive} />
    ) : null;


    const handleSettingData = async() => {
        console.log("yes");
        const resp = await fetch('/api/settingsData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress",
            },
            body: JSON.stringify({ ...settingsData })
        })
        resp.text().then(data => {
            const RespData = JSON.parse(data)
            console.log(RespData)
        });
        console.log(settingsData)
        toggleActive()
    }
    useEffect(() => {
        //console.log(fullCartSettings)
        fetchSetting();
    }, [])
    const fetchSetting = async () => {
        let isfullcart = 0;
        const response = await fetch('/api/settingsData');
        const data = await response.json()
        //console.log("from db", data.data[0]);
        if (data.data === undefined || data.data.length == 0) {
            setHaveData(true)
        } else {

            setsettingsData(data.data);
            console.log(data.data)
            setHaveData(true)
        }


    }
    const handleSettingDataCancel = () => {
        setsettingsData(initialState)
    }

    return (
        <div className="caart_settings_page">
            <Card>
                <div className='caart_settings_page_content'>
                    <h1>Cart Settings</h1>
                    <div className='caart_settings_page_application_status_btn'>
                        <div className='caart_settings_page_application_status'>
                            <h2>Application status</h2>
                            <p>Enabling this will show Homepage icart page.</p>
                        </div>
                        <div className='caart_settings_page_status_btn'>
                            <Button primary fullWidth>Enable Caart</Button>
                        </div>
                    </div>

                    <div className='caart_settings_page_type_main'>
                        <div className='caart_settings_page_type_main_headings'>
                            <h2>Choose cart type</h2>
                            <p>Select the cart type you would like to use in your store.</p>
                        </div>
                        <div className='caart_settings_page_types'>
                            <label htmlFor='full_cart' className={settingsData.enable_carts.full_cart ? 'active caart_settings_page_type_single' : 'caart_settings_page_type_single'}>
                                <input type="checkbox" name="full_cart" id="full_cart" onChange={() => setsettingsData(prev => {
                                    return {
                                        ...prev, enable_carts: {
                                            ...prev.enable_carts,
                                            full_cart: !prev.enable_carts.full_cart
                                        }
                                    }
                                })}
                                    value={settingsData.enable_carts.full_cart} />
                                <img src={drawerCartType} />
                                <p>Full Cart</p>
                                <div className='tick_icon'>
                                    <img src={tickE} />
                                </div>
                            </label>
                            <label htmlFor='drawer_cart' className={settingsData.enable_carts.drawer_cart ? 'active caart_settings_page_type_single' : 'caart_settings_page_type_single'}>
                                <input type="checkbox" name="drawer_cart" id="drawer_cart" onChange={() => setsettingsData(prev => {
                                    return {
                                        ...prev, enable_carts: {
                                            ...prev.enable_carts,
                                            drawer_cart: !prev.enable_carts.drawer_cart
                                        }
                                    }
                                })}
                                    value={settingsData.enable_carts.drawer_cart} />
                                <img src={drawerCartType} />
                                <p>Drawer Cart</p>
                                <div className='tick_icon'>
                                    <img src={tickE} />
                                </div>
                            </label>
                            <label htmlFor='sticky_cart' className={settingsData.enable_carts.sticky_cart ? 'active caart_settings_page_type_single' : 'caart_settings_page_type_single'}>
                                <input type="checkbox" name="sticky_cart" id="sticky_cart" onChange={() => setsettingsData(prev => {
                                    return {
                                        ...prev, enable_carts: {
                                            ...prev.enable_carts,
                                            sticky_cart: !prev.enable_carts.sticky_cart
                                        }
                                    }
                                })}
                                    value={settingsData.enable_carts.sticky_cart} />
                                <img src={stickyCartType} />
                                <p>Sticky Cart</p>
                                <div className='tick_icon'>
                                    <img src={tickE} />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className='caart_settings_page_application_status_btn' style={{ flexWrap: 'wrap' }}>
                        <div className='caart_settings_page_application_status' style={{ width: '60%' }}>
                            <h2>Star reviews third-party integration</h2>
                            <p>With this, You can integrate with product reviews app to display star ratings on product recommendations and product upsell widgets.</p>
                        </div>
                        <div className='caart_settings_page_status_btn' >
                            <Select
                                options={optionsReviewApp}
                                onChange={(val) => handleSelectChange(val, 'review_app')}
                                value={settingsData.review_app}
                            />
                        </div>
                        {settingsData.review_app != '' && <>
                            <div className='caart_settings_review_app_content' style={{ width: '60%' }}>
                                <Icon
                                    source={CircleAlertMajor}
                                    color="base"
                                />
                                <p>
                                    You must have {settingsData.review_app == 'loox' ? 'Loox' : settingsData.review_app == 'product_reviews' ? 'Product Reviews' : settingsData.review_app == 'reviews_io' ? 'Reviews.io' : 'Yotpo'} installed on your store in order for this integration to work. If you don't have the app installed, star reviews will not be displayed.
                                </p>
                            </div>
                            <div className='caart_settings_review_app_content_colors'>
                                <label>Colors</label>
                                <div className='caart_settings_review_app_content_colors_div'>
                                    <div className='caart_settings_review_app_content_color_single'>
                                        <label>Star color</label>
                                        <input type='color' onChange={(e) => setsettingsData(prev => {
                                            return {
                                                ...prev,
                                                star_color: e.target.value
                                            }
                                        })} />
                                    </div>
                                    <div className='caart_settings_review_app_content_color_single'>
                                        <label>Review count color</label>
                                        <input type='color' onChange={(e) => setsettingsData(prev => {
                                            return {
                                                ...prev,
                                                review_count_color: e.target.value
                                            }
                                        })} />
                                    </div>
                                </div>
                            </div>
                        </>}

                    </div>

                    <div className='caart_settings_page_application_status_btn'>
                        <div className='caart_settings_page_application_status'>
                            <h2>Enable checkout button</h2>
                            <p>You can set limit for user for checkout after cart total reach at limit</p>
                        </div>
                        <div className='caart_settings_page_status_btn'>
                            <TextField
                                type="number"
                                value={settingsData.cart_limit}
                                onChange={(e) => {
                                    console.log(e)
                                    if (e > 0) {
                                        setsettingsData(prev => {
                                            return {
                                                ...prev,
                                                cart_limit: e
                                            }
                                        })
                                    } else {
                                        setsettingsData(prev => {
                                            return {
                                                ...prev,
                                                cart_limit: 0
                                            }
                                        })
                                    }
                                }}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className='caart_settings_page_application_status_btn' style={{ flexWrap: 'wrap' }}>
                        <div className='caart_settings_page_application_status' style={{ width: '60%' }}>
                            <h2>Discount option to be apply for customers</h2>
                            <p>Choose specific discount type from the drop-down to give discounts either Shopify's, Caart upsell's or both.</p>
                        </div>
                        <div className='caart_settings_page_status_btn' >
                            <Select
                                options={optionsReviewApp2}
                                onChange={(val) => handleSelectChange(val, 'apply_discount')}
                                value={settingsData.apply_discount}
                            />
                        </div>
                        <strong>
                            Note: If you have created any Shopify automatic discount, it'll apply with top priority.
                        </strong>
                    </div>

                    <div className='caart_settings_page_application_status_btn' style={{ flexWrap: 'wrap' }}>
                        <div className='caart_settings_page_application_status' style={{ width: '60%' }}>
                            <h2>Custom HTML</h2>
                        </div>
                        <div className='caart_settings_page_status_btn' >
                            <Select
                                options={optionsReviewApp3}
                                onChange={(val) => handleSelectChange(val, 'html_position')}
                                value={settingsData.html_position}
                            />
                        </div>
                        <div className='caart_settings_page_application_input'>
                            <TextField
                                type="text"
                                value={settingsData.cart_html}
                                multiline={10}
                                onChange={(e) => {
                                    setsettingsData(prev => {
                                        return {
                                            ...prev,
                                            cart_html: e
                                        }
                                    })
                                }}
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    <div className='caart_settings_page_application_status_btn' style={{ flexWrap: 'wrap' }}>
                        <div className='caart_settings_page_application_status' style={{ width: '60%' }}>
                            <h2>Custom CSS</h2>
                        </div>
                        <div className='caart_settings_page_status_btn' >
                        </div>
                        <div className='caart_settings_page_application_input'>
                            <TextField
                                type="text"
                                value={settingsData.cart_css}
                                multiline={10}
                                onChange={(e) => {
                                    setsettingsData(prev => {
                                        return {
                                            ...prev,
                                            cart_css: e
                                        }
                                    })
                                }}
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <ButtonGroup>
                            <Button onClick={handleSettingDataCancel}>Cancel</Button>
                            <Button primary onClick={handleSettingData}>Save</Button>
                        </ButtonGroup>
                    </div>

                </div>
            </Card>
            <div style={{ height: '50px' }}>
                <Frame>
                    {toastMarkup}
                </Frame>
            </div>
        </div>
    )
}
