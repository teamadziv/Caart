import React from 'react'
import { d_badges } from '../../../assets';
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


import { useAuthenticatedFetch } from "./../../../hooks/useAuthenticatedFetch.js";
import { SkeletonBodyText } from '@shopify/polaris';

export default function IndexDrawerCart({ options, selected, handleSelectChange }) {
    const fetch = useAuthenticatedFetch();
    const [haveData, setHaveData] = useState(false)

    const [toastHtml, setToastHtml] = useState(false);
    const toggleActive = () => setToastHtml((toastHtml) => !toastHtml)
    const toastContent = <>
        <Icon
            source={TickMinor}
            color="base"
        />
        Drawer Cart Settings Saved
    </>
    const toastMarkup = toastHtml ? (
        <Toast content={toastContent} onDismiss={toggleActive} duration={45000} />
    ) : null;



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
    const [drawerCartSettings, setdrawerCartSettings] = useState({
        isFullCart: 1,
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
            show_first_tier_section: false,

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
            img: d_badges,
            position: 'bottom',
            show_section: true
        },
        upsells: {
            use_ai_recommend: false,
            show_upsell_in_cart: false, 
            upsell_title: 'You May Also Like',
            upsell_position: 'bottom',
            upsell_direction: 'block',
            show_section: true
        }
    });




    useEffect(() => {
        fetchSetting();
    }, [])

    const fetchSetting = async () => {
        const response = await fetch('/api/settings/cart/1');
        const data = await response.json()

        if (data.data === undefined || data.data.length == 0) {
            setHaveData(true)
        } else {
            console.log("from db", data.data);
            setdrawerCartSettings(data.data);
            setHaveData(true)
        }
    }


    const handleUpsellProductsArr = (products) => {
        setdrawerCartSettings(prev => {
            return {
                ...prev,
                upsells: {
                    ...drawerCartSettings.upsells,
                    upsell_products: [
                        ...products
                    ]
                }
            }
        })
    }


    // progress bar product add to state

    const handleProgressBarProduct = (feild, value) => {
        setdrawerCartSettings((prev) => {
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
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    cart_header: {
                        ...drawerCartSettings.cart_header,
                        show_section: !drawerCartSettings.cart_header.show_section
                    }
                }
            })
        }
        if (section === "announcement") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...drawerCartSettings.announcement,
                        show_section: !drawerCartSettings.announcement.show_section
                    }
                }
            })
        }
        if (section === "progress_bar") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...drawerCartSettings.progress_bar,
                        show_section: !drawerCartSettings.progress_bar.show_section
                    }
                }
            })
        }

        if (section === "order_notes") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    order_notes: {
                        ...drawerCartSettings.order_notes,
                        show_section: !drawerCartSettings.order_notes.show_section
                    }
                }
            })
        }

        if (section === "checkout_btns") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    checkout_btns: {
                        ...drawerCartSettings.checkout_btns,
                        show_section: !drawerCartSettings.checkout_btns.show_section
                    }
                }
            })
        }

        if (section === "cart_items") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    cart_items: {
                        ...drawerCartSettings.cart_items,
                        show_section: !drawerCartSettings.cart_items.show_section
                    }
                }
            })
        }

        if (section === "discount_codes") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    discount_codes: {
                        ...drawerCartSettings.discount_codes,
                        show_section: !drawerCartSettings.discount_codes.show_section
                    }
                }
            })
        }

        if (section === "trust_badge") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    trust_badge: {
                        ...drawerCartSettings.trust_badge,
                        show_section: !drawerCartSettings.trust_badge.show_section
                    }
                }
            })
        }

        if (section === "upsells") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...drawerCartSettings.upsells,
                        show_section: !drawerCartSettings.upsells.show_section
                    }
                }
            })
        }


    }


    // input setting change update state
    const handleInputChange = (e, section, feild) => {

        if (section === "cart_header") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    cart_header: {
                        ...drawerCartSettings.cart_header,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "announcement") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...drawerCartSettings.announcement,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "progress_bar") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...drawerCartSettings.progress_bar,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "order_notes") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    order_notes: {
                        ...drawerCartSettings.order_notes,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "checkout_btns") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    checkout_btns: {
                        ...drawerCartSettings.checkout_btns,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "cart_items") {
            setdrawerCartSettings(prev => {
                if (e.target.type == 'checkbox') {
                    return {
                        ...prev,
                        cart_items: {
                            ...drawerCartSettings.cart_items,
                            [e.target.name]: e.target.value
                        }
                    }
                } else {
                    return {
                        ...prev,
                        cart_items: {
                            ...drawerCartSettings.cart_items,
                            [e.target.name]: e.target.value
                        }
                    }
                }

            })
        }

        if (section === "discount_codes") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    discount_codes: {
                        ...drawerCartSettings.discount_codes,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

        if (section === "upsells") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...drawerCartSettings.upsells,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

    }

    const handleFullCartSelectChange = (value, section, feild) => {
        if (section === "announcement") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...drawerCartSettings.announcement,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "progress_bar") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...drawerCartSettings.progress_bar,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "trust_badge") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    trust_badge: {
                        ...drawerCartSettings.trust_badge,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "upsells") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    upsells: {
                        ...drawerCartSettings.upsells,
                        [feild]: value
                    }
                }
            })
        }

        if (section === "announcement") {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    announcement: {
                        ...drawerCartSettings.announcement,
                        [feild]: value
                    }
                }
            })
        }
    }


    // this is for progress bar
    const handleCheckboxChange = (e, section, feild, type) => {
        if (section === "progress_bar" && type === 'add') {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...drawerCartSettings.progress_bar,
                        [feild]: true,
                        total_tiers: drawerCartSettings.progress_bar.total_tiers < 3 ? drawerCartSettings.progress_bar.total_tiers + 1 : drawerCartSettings.progress_bar.total_tiers
                    }
                }
            })
        }
        if (section === "progress_bar" && type === 'remove') {
            setdrawerCartSettings(prev => {
                return {
                    ...prev,
                    progress_bar: {
                        ...drawerCartSettings.progress_bar,
                        [feild]: false,
                        total_tiers: drawerCartSettings.progress_bar.total_tiers > 1 ? drawerCartSettings.progress_bar.total_tiers - 1 : drawerCartSettings.progress_bar.total_tiers
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
        console.log("from drawer", drawerCartSettings);
        const resp = await fetch('/api/settings/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress",
            },
            body: JSON.stringify(drawerCartSettings)
        })
        resp.text().then(data => {
            const RespData = JSON.parse(data)
            console.log(RespData)
        });
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
                    Drawer Cart Editor
                </h3>
                <ul className='caart_full_cart_sidebar_list'>
                    <CartHeaderSetting handleInputChange={handleInputChange} cartHeaderSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={cartHeaderRef} removeActiveInMenu={removeActiveInMenu} />
                    <AnnouncementSetting handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} announcementSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={announcementRef} removeActiveInMenu={removeActiveInMenu} />
                    <ProgressBarSetting handleProgressBarProduct={handleProgressBarProduct} handleCheckboxChange={handleCheckboxChange} handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} progressBarSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={progressBarRef} removeActiveInMenu={removeActiveInMenu} />
                    <CartItemsSettings handleInputChange={handleInputChange} cartItemsSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={cartItemsRef} removeActiveInMenu={removeActiveInMenu} />
                    <YouMayAlsoLikeSetting handleUpsellProductsArr={handleUpsellProductsArr} handleFullCartSelectChange={handleFullCartSelectChange} handleInputChange={handleInputChange} upsellSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={noteRef} removeActiveInMenu={removeActiveInMenu} />
                    <NoteSettings handleInputChange={handleInputChange} noteSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={upsellRef} removeActiveInMenu={removeActiveInMenu} />
                    <DiscountCodeSettings handleInputChange={handleInputChange} discountCodeSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={discountCodeRef} removeActiveInMenu={removeActiveInMenu} />
                    <BtnsSettings handleInputChange={handleInputChange} btnsSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={btnsRef} removeActiveInMenu={removeActiveInMenu} />
                    <TrustBadgeSetting setdrawerCartSettings={setdrawerCartSettings} handleFullCartSelectChange={handleFullCartSelectChange} trustBadgeSettings={{ ...drawerCartSettings }} handleIconShowHide={handleIconShowHide} addActiveInMenu={addActiveInMenu} id={trustBadgeRef} removeActiveInMenu={removeActiveInMenu} />
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
                {haveData && <div className='caart_full_cart_preview_container_main caart_drawer_preview_main'>

                    {drawerCartSettings.cart_header.show_section ? (
                        <CartHeaderPreview cartHeaderSettings={{ ...drawerCartSettings }} />
                    ) : ''}

                    {/* announcenment */}
                    {drawerCartSettings.announcement.show_section ? (
                        <AnnouncementPreview announcementSettings={{ ...drawerCartSettings }} />
                    ) : ''}

                    {/* Progress Bar  */}
                    {drawerCartSettings.progress_bar.show_section ? (
                        <ProgressBarPreview progressBarSettings={{ ...drawerCartSettings }} />
                    ) : ''}

                    {/* Cart Items  */}
                    {drawerCartSettings.cart_items.show_section ? (
                        <CartItemsPreview cartItemsSettings={{ ...drawerCartSettings }} />
                    ) : ''}


                    {/* order note and checkout buttons + badges */}
                    <NoteBtnsBadgesPreview noteBtnBadgesSettings={{ ...drawerCartSettings }} />



                </div>}

            </div>
        </div>
    )
}
