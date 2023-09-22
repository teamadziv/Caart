import React from 'react'
import { badges } from '../../../assets';
import { Select, Button, Toast, Frame, Icon } from '@shopify/polaris';
import { useState, useRef, useEffect } from 'react';
import {
    TickMinor
} from '@shopify/polaris-icons';

import CartHeaderSetting from './CartHeaderSetting';
import AnnouncementSetting from './AnnouncementSetting';
import ProgressBarSetting from './ProgressBarSetting';
import NoteSettings from './NoteSettings';
import BtnsSettings from './BtnsSettings';
import CartItemsSettings from './CartItemsSettings';
import DiscountCodeSettings from './DiscountCodeSettings';
import TrustBadgeSetting from './TrustBadgeSetting';
import YouMayAlsoLikeSetting from './YouMayAlsoLikeSetting';

// previews
import CartHeaderPreview from './CartHeaderPreview';
import AnnouncementPreview from './AnnouncementPreview';
import ProgressBarPreview from './ProgressBarPreview';
import CartItemsPreview from './CartItemsPreview';
import NoteBtnsBadgesPreview from './NoteBtnsBadgesPreview';
import YouMayAlsoLikePreview from './YouMayAlsoLikePreview';


import { SkeletonBodyText } from '@shopify/polaris';
import { useAuthenticatedFetch } from "./../../../hooks/useAuthenticatedFetch.js";


export default function IndexFullCart({ options, selected, handleSelectChange }) {

    const [haveData, setHaveData] = useState(false)

    const [toastHtml, setToastHtml] = useState(false);
    const toggleActive = () => setToastHtml((toastHtml) => !toastHtml)
    const toastContent = <>
        <Icon
            source={TickMinor}
            color="base"
        />
        Full Cart Settings Saved
    </>
    const toastMarkup = toastHtml ? (
        <Toast content={toastContent} onDismiss={toggleActive} duration={45000} />
    ) : null;


    const fetch = useAuthenticatedFetch();

    const cartHeaderRef = useRef(null);
    const announcementRef = useRef(null);
    const progressBarRef = useRef(null);
    const noteRef = useRef(null);
    const btnsRef = useRef(null);
    const cartItemsRef = useRef(null);
    const discountCodeRef = useRef(null);
    const trustBadgeRef = useRef(null);
    const upsellRef = useRef(null);



    // initial state data for full cart
    const [fullCartSettings, setFullCartSettings] = useState({
        isFullCart: 0,
        cart_header: {
            heading: "Shopping Cart",
            color: '#333133',
            show_section: true
        },
        announcement: {
            heading: "Your deal expires in [TIMER]",
            color: '#202223',
            bg_color: '#DFFDF1',
            timer: "00:15",
            timer_type: 'basic',
            timer_end_text: 'Offer has expired',
            timer_action: 'reset_time',
            show_section: true
        },
        progress_bar: {
            bar_background_color: '#EDEEEF',
            bar_foreground_color: '#E780E2',
            reward_basis: 'item_count',
            text_after_completing: 'Free shipping unlocked!',
            show_section: true,
            total_tiers: 1,

            first_tier_minimum_total: 125.00,
            first_tier_reward_count: 7,
            first_tier_description: "Free Delivery",
            first_tier_reward_count_text: 'You’re {COUNT} products away from product _____',
            first_tier_minimum_total_text: 'You’re {AMOUNT} from free shipping!',
            show_first_tier_section: true,

            second_tier_minimum_total: 155.00,
            second_tier_reward_count: 7,
            second_tier_description: "Save 150",
            second_tier_reward_count_text: 'You’re {COUNT} products away from product _____',
            second_tier_minimum_total_text: 'You’re {AMOUNT} from free shipping!',
            show_second_tier_section: false,

            third_tier_minimum_total: 175.00,
            third_tier_reward_count: 7,
            third_tier_description: "Save 250",
            third_tier_reward_count_text: 'You’re {COUNT} products away from product _____',
            third_tier_minimum_total_text: 'You’re {AMOUNT} from free shipping!',
            show_third_tier_section: false,
        },
        cart_items: {
            inherit_font: false,
            show_strike_price: false,
            background_color: "#ffffff",
            text_color: "#202223",
            show_section: true
        },
        order_notes: {
            notes_title: 'Order Notes',
            notes_placeholder: 'Special instructions for your order',
            show_section: true
        },
        discount_codes: {
            discount_placeholder: 'Discount code',
            discount_btn_text: 'Apply',
            show_section: true
        },
        checkout_btns: {
            checkout_btn_text: 'Checkout',
            checkout_btn_color: '#008060',
            checkout_btn_color_hover: '#008060',
            checkout_btn_text_color: '#FFFFFF',
            checkout_btn_text_color_hover: '#FFFFFF',
            continue_shopping_btn_text: 'Continue Shopping',
            continue_shopping_btn_color: '#008060',
            continue_shopping_btn_color_hover: '#008060',
            continue_shopping_btn_text_color: '#FFFFFF',
            continue_shopping_btn_text_color_hover: '#FFFFFF',
            show_section: true
        },
        trust_badge: {
            img: badges,
            position: 'bottom',
            show_section: true
        },
        upsells: {
            use_ai_recommend: false,
            show_upsell_in_cart: false,
            upsell_title: 'Free shipping unlocked!',
            upsell_position: 'bottom',
            upsell_direction: 'block',
            show_section: true
        }
    });




    useEffect(() => {
        //console.log(fullCartSettings)
        fetchSetting();
    }, [])
    const fetchSetting = async () => {
        let isfullcart = 0;
        const response = await fetch('/api/settings/cart/' + isfullcart);
        const data = await response.json()
        //console.log("from db", data.data[0]);
        if (data.data === undefined || data.data.length == 0) {
            setHaveData(true)
        } else {

            setFullCartSettings(data.data);
            console.log(data.data)
            setHaveData(true)
        }


    }
    const handleUpsellProductsArr = (products) => {
        setFullCartSettings(prev => {
            return {
                ...prev,
                upsells: {
                    ...fullCartSettings.upsells,
                    upsell_products: [
                        ...products
                    ]
                }
            }
        })
    }


    // progress bar product add to state

    const handleProgressBarProduct = (feild, value) => {
        setFullCartSettings((prev) => {
            return {
                ...prev,
                progress_bar: {
                    ...prev.progress_bar,
                    [feild]: value
                }
            }
        })
    }
    // Code to hide show each section
    const handleIconShowHide = (section) => {
        if (section === "cart_header") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    cart_header: {
                        ...fullCartSettings.cart_header,
                        show_section: !fullCartSettings.cart_header.show_section
                    }
                }
            })
        }
        if (section === "announcement") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...fullCartSettings.announcement,
                        show_section: !fullCartSettings.announcement.show_section
                    }
                }
            })
        }
        if (section === "progress_bar") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...fullCartSettings.progress_bar,
                        show_section: !fullCartSettings.progress_bar.show_section
                    }
                }
            })
        }

        if (section === "order_notes") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    order_notes: {
                        ...fullCartSettings.order_notes,
                        show_section: !fullCartSettings.order_notes.show_section
                    }
                }
            })
        }

        if (section === "checkout_btns") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    checkout_btns: {
                        ...fullCartSettings.checkout_btns,
                        show_section: !fullCartSettings.checkout_btns.show_section
                    }
                }
            })
        }

        if (section === "cart_items") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    cart_items: {
                        ...fullCartSettings.cart_items,
                        show_section: !fullCartSettings.cart_items.show_section
                    }
                }
            })
        }

        if (section === "discount_codes") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    discount_codes: {
                        ...fullCartSettings.discount_codes,
                        show_section: !fullCartSettings.discount_codes.show_section
                    }
                }
            })
        }

        if (section === "trust_badge") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    trust_badge: {
                        ...fullCartSettings.trust_badge,
                        show_section: !fullCartSettings.trust_badge.show_section
                    }
                }
            })
        }

        if (section === "upsells") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...fullCartSettings.upsells,
                        show_section: !fullCartSettings.upsells.show_section
                    }
                }
            })
        }


    }


    // input setting change update state
    const handleInputChange = (e, section, feild) => {

        if (section === "cart_header") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    cart_header: {
                        ...fullCartSettings.cart_header,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "announcement") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...fullCartSettings.announcement,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "progress_bar") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...fullCartSettings.progress_bar,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "order_notes") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    order_notes: {
                        ...fullCartSettings.order_notes,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "checkout_btns") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    checkout_btns: {
                        ...fullCartSettings.checkout_btns,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "cart_items") {
            setFullCartSettings(prev => {
                if (e.target.type == 'checkbox') {
                    return {
                        ...prev,
                        cart_items: {
                            ...fullCartSettings.cart_items,
                            [e.target.name]: e.target.value
                        }
                    }
                } else {
                    return {
                        ...prev,
                        cart_items: {
                            ...fullCartSettings.cart_items,
                            [e.target.name]: e.target.value
                        }
                    }
                }

            })
        }

        if (section === "discount_codes") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    discount_codes: {
                        ...fullCartSettings.discount_codes,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "upsells") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...fullCartSettings.upsells,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

    }

    const handleFullCartSelectChange = (value, section, feild) => {
        if (section === "progress_bar") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...fullCartSettings.progress_bar,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "trust_badge") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    trust_badge: {
                        ...fullCartSettings.trust_badge,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "upsells") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...fullCartSettings.upsells,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "announcement") {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...fullCartSettings.announcement,
                        [feild]: value
                    }
                }
            })
        }
    }


    // this is for progress bar
    const handleCheckboxChange = (e, section, feild, type) => {
        if (section === "progress_bar" && type === 'add') {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...fullCartSettings.progress_bar,
                        [feild]: true,
                        total_tiers: fullCartSettings.progress_bar.total_tiers < 3 ? fullCartSettings.progress_bar.total_tiers + 1 : fullCartSettings.progress_bar.total_tiers
                    }
                }
            })
        }
        if (section === "progress_bar" && type === 'remove') {
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...fullCartSettings.progress_bar,
                        [feild]: false,
                        total_tiers: fullCartSettings.progress_bar.total_tiers > 1 ? fullCartSettings.progress_bar.total_tiers - 1 : fullCartSettings.progress_bar.total_tiers
                    }
                }
            })
        }
    }
    // this is for progress bar ends






    const addActiveInMenu = (ref) => {
        ref.current.classList.add('active');
    }
    const removeActiveInMenu = (ref) => {
        ref.current.classList.remove('active');
    }



    // full cart save function
    const handleFullCartData = async () => {
        const resp = await fetch('/api/settings/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress",
            },
            body: JSON.stringify({ isFullCart: 0, ...fullCartSettings })
        })
        resp.text().then(data => {
            const RespData = JSON.parse(data)
            console.log(RespData)
        });

        console.log(fullCartSettings)
        toggleActive()
    }

    return (
        <div className='caart_full_cart_main'>
            <div style={{ height: '50px', position: 'absolute' }}>
                <Frame>
                    {toastMarkup}
                </Frame>
            </div>
            <div className='caart_full_cart_sidebar'>
                <h3 className='caart_full_cart_sidebar_heading'>
                    Full Cart Editor
                </h3>
                <ul className='caart_full_cart_sidebar_list'>
                    <CartHeaderSetting handleInputChange={handleInputChange} cartHeaderSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={cartHeaderRef} removeActiveInMenu={removeActiveInMenu} />
                    <AnnouncementSetting handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} announcementSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={announcementRef} removeActiveInMenu={removeActiveInMenu} />
                    <ProgressBarSetting handleProgressBarProduct={handleProgressBarProduct} handleCheckboxChange={handleCheckboxChange} handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} progressBarSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={progressBarRef} removeActiveInMenu={removeActiveInMenu} />
                    <CartItemsSettings handleInputChange={handleInputChange} cartItemsSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={cartItemsRef} removeActiveInMenu={removeActiveInMenu} />
                    <YouMayAlsoLikeSetting handleUpsellProductsArr={handleUpsellProductsArr} handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} upsellSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={noteRef} removeActiveInMenu={removeActiveInMenu} />
                    <NoteSettings handleInputChange={handleInputChange} noteSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={upsellRef} removeActiveInMenu={removeActiveInMenu} />
                    <DiscountCodeSettings handleInputChange={handleInputChange} discountCodeSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={discountCodeRef} removeActiveInMenu={removeActiveInMenu} />
                    <BtnsSettings handleInputChange={handleInputChange} btnsSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={btnsRef} removeActiveInMenu={removeActiveInMenu} />
                    <TrustBadgeSetting setFullCartSettings={setFullCartSettings} handleFullCartSelectChange={handleFullCartSelectChange} trustBadgeSettings={{ ...fullCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={trustBadgeRef} removeActiveInMenu={removeActiveInMenu} />
                </ul>
            </div>
            <div className='caart_full_cart_preview_container'>
                <div className='caart_full_cart_preview_bnts'>
                    <div className='caart_full_cart_preview_btn_left'>
                        <Select
                            label=""
                            options={options}
                            onChange={handleSelectChange}
                            value={selected}
                        />
                    </div>
                    <div className='caart_full_cart_preview_btn_right'>
                        <Button primary onClick={handleFullCartData}>Save</Button>
                    </div>
                </div>

                {haveData === false && <div style={{ marginTop: '20px' }}><SkeletonBodyText lines={50} /></div>}

                {haveData && <div className='caart_full_cart_preview_container_main'>
                    <div className='caart_full_cart_preview_container_nav'>
                        <div className='caart_full_cart_preview_container_nav_logo'>
                            XYZ Studio
                        </div>
                        <div className='caart_full_cart_preview_container_nav_nav'>
                            <ul>
                                <li>Home</li>
                                <li>Catalog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='caart_full_cart_preview_container_icons'>
                            <div>
                                <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#1A1C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M21 20.9999L16.65 16.6499" stroke="#1A1C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_302_598)">
                                        <path d="M19 17.4L17.4 3.99999H14.45C14.1 1.94999 12.25 0.399994 9.99996 0.399994C7.74996 0.399994 5.89996 1.94999 5.54996 3.99999H2.59996L0.999962 17.4C0.899962 18.15 1.19996 18.6 1.44996 18.9C1.69996 19.15 2.14996 19.5 2.99996 19.5H17C17.65 19.5 18.2 19.3 18.55 18.85C18.9 18.5 19.05 17.95 19 17.4ZM9.99996 2.39999C11.1 2.39999 12.05 3.09999 12.35 3.99999H7.59996C7.94996 3.04999 8.89996 2.39999 9.99996 2.39999ZM2.99996 17.5L4.39996 5.99999H5.49996V7.49999C5.49996 8.04999 5.94996 8.49999 6.49996 8.49999C7.04996 8.49999 7.49996 8.04999 7.49996 7.49999V5.99999H12.5V7.49999C12.5 8.04999 12.95 8.49999 13.5 8.49999C14.05 8.49999 14.5 8.04999 14.5 7.49999V5.99999H15.6L17 17.5H2.99996Z" fill="#1A1C1D"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_302_598">
                                            <rect width="20" height="20" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {fullCartSettings.cart_header.show_section ? (
                        <CartHeaderPreview cartHeaderSettings={{ ...fullCartSettings }} />
                    ) : ''}

                    {/* announcenment */}
                    {fullCartSettings.announcement.show_section ? (
                        <AnnouncementPreview announcementSettings={{ ...fullCartSettings }} />
                    ) : ''}

                    {/* Progress Bar  */}
                    {fullCartSettings.progress_bar.show_section ? (
                        <ProgressBarPreview progressBarSettings={{ ...fullCartSettings }} />
                    ) : ''}

                    {/* Cart Items  */}
                    {fullCartSettings.cart_items.show_section ? (
                        <CartItemsPreview cartItemsSettings={{ ...fullCartSettings }} />
                    ) : ''}


                    {/* order note and checkout buttons + badges */}
                    <NoteBtnsBadgesPreview noteBtnBadgesSettings={{ ...fullCartSettings }} />

                    {/* you may also like */}
                    {fullCartSettings.upsells.show_section ? (
                        <YouMayAlsoLikePreview upsellsSettings={{ ...fullCartSettings }} />
                    ) : ''}

                </div>}



            </div>
        </div>

    )
}
