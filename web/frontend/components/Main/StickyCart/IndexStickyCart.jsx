import React from 'react'
import { Select, Button, Toast, Frame, Icon } from '@shopify/polaris';
import { useState, useRef, useEffect } from 'react';
import {
    TickMinor, ViewMinor, HideMinor, CartMajor, CartDownMajor
} from '@shopify/polaris-icons';
import { useAuthenticatedFetch } from '../../../hooks/useAuthenticatedFetch';



export default function IndexStickyCart({ options, selected, handleSelectChange }) {
    const fetch = useAuthenticatedFetch();

    const [shop, setShop] = useState('')


    const [toastHtml, setToastHtml] = useState(false);
    const toggleActive = () => setToastHtml((toastHtml) => !toastHtml)
    const toastContent = <>
        <Icon
            source={TickMinor}
            color="base"
        />
        Sticky Cart Settings Saved
    </>
    const toastMarkup = toastHtml ? (
        <Toast content={toastContent} onDismiss={toggleActive} duration={45000} />
    ) : null;


    const stickyCartRef = useRef(null);


    const [stickyCartPosition, setStickyCartPosition] = useState('bottom_right');
    const stickyCartPositionOptions = [
        { label: 'Bottom Right', value: 'bottom_right' },
        { label: 'Center Right', value: 'center_right' },
        { label: 'Top Right', value: 'top_right' },
        { label: 'Bottom Left', value: 'bottom_left' },
        { label: 'Center Left', value: 'center_left' },
        { label: 'Top Left', value: 'top_left' }
    ];


    const [deviceSettings, setDeviceSettings] = useState('show_all');
    const deviceSettingsOptions = [
        { label: 'Show on all devices', value: 'show_all' },
        { label: 'Show on mobile only', value: 'show_mbl' },
        { label: 'Show desktop only', value: 'show_desktop' }
    ];

    const [buttonAction, setButtonAction] = useState('drawer');
    const buttonActionOptions = [
        { label: 'Open cart drawer', value: 'drawer' },
        { label: 'Go to cart', value: 'cart' },
        { label: 'Go to checkout page', value: 'checkout' }
    ];
    // initial state data for full cart
    const [stickyCartSettings, setStickyCartSettings] = useState({
        sticky_cart_setting: {
            icon_option: "option_1",
            bg_color: '#008060',
            icon_color: '#FFFFFF',
            qty_bg_color: '#E42626',
            qty_text_color: '#FFFFFF',
            sticky_cart_position: 'bottom_right',
            device_settings: 'show_all',
            button_action: 'drawer',
            show_section: true
        }
    });




    useEffect(() => {
        console.log(stickyCartSettings)
        fetchSetting();
    }, [])

    // useEffect(() => {
    //     console.log('hello')
    //     fetchShop();
        
    // }, [])

    const fetchShop = async () => {
        const response = await fetch('/api/shop');
        const data = await response.json()
        //console.log("from db", data.data[0]);
        if (data.shop === undefined || data.shop == '') {
            setShop('')
        } else {
            setShop(data.shop)
        }
    }
    const fetchSetting = async () => {
        let isfullcart = 0;
        const response = await fetch('/api/stickycartsetting');
        const data = await response.json()
        //console.log("from db", data.data[0]);
        if (data.data === undefined || data.data.length == 0) {
            setHaveData(true)
        } else {

            setStickyCartSettings(prevState => {
                if (data && data.data && typeof data.data === 'object') {
                  if ('sticky_cart_setting' in data.data) {
                    return {
                      ...prevState,
                      sticky_cart_setting: data.data.sticky_cart_setting
                    };
                  } else {
                    return {
                      ...prevState,
                      sticky_cart_setting: {
                        ...prevState.sticky_cart_setting,
                        ...data.data
                      }
                    };
                  }
                }
                return prevState; });
            console.log(data.data)
            //setHaveData(true)
        }


    }




    // Code to hide show each section
    const handleIconShowHide = (section) => {
        if (section === "sticky_cart_setting") {
            setStickyCartSettings(prev => {
                return {
                    ...prev,
                    sticky_cart_setting: {
                        ...stickyCartSettings.sticky_cart_setting,
                        show_section: !stickyCartSettings.sticky_cart_setting.show_section
                    }
                }
            })
        }

    }


    // input setting change update state
    const handleInputChange = (e, section, feild) => {

        if (section === "sticky_cart_setting") {
            setStickyCartSettings(prev => {
                return {
                    ...prev,
                    sticky_cart_setting: {
                        ...stickyCartSettings.sticky_cart_setting,
                        [e.target.name]: e.target.value
                    }
                }
            })
        }

    }


    const handleSelectChange1 = (value) => {
        setStickyCartPosition(value)
        handleStickyCartSelectChange(value, "sticky_cart_setting", "sticky_cart_position")
    }
    const handleSelectChange2 = (value) => {
        setDeviceSettings(value)
        handleStickyCartSelectChange(value, "sticky_cart_setting", "device_settings")
    }
    const handleSelectChange3 = (value) => {
        setButtonAction(value)
        handleStickyCartSelectChange(value, "sticky_cart_setting", "button_action")
    }

    const handleStickyCartSelectChange = (value, section, feild) => {
        if (section === "sticky_cart_setting") {
            setStickyCartSettings(prev => {
                return {
                    ...prev,
                    sticky_cart_setting: {
                        ...stickyCartSettings.sticky_cart_setting,
                        [feild]: value
                    }
                }
            })
        }
    }



    const addActiveInMenu = (ref) => {
        ref.current.classList.add('active');
    }
    const removeActiveInMenu = (ref) => {
        ref.current.classList.remove('active');
    }

    // handle sticky cart icon option change
    const handleStickyCartOptionChange = (e) => {
        console.log(e.target.value)
        setStickyCartSettings(prev => {
            return {
                ...prev,
                sticky_cart_setting: {
                    ...stickyCartSettings.sticky_cart_setting,
                    icon_option: e.target.value
                }
            }
        })
    }


    // full cart save function
    const handleStickyCartData = async () => {
        const resp = await fetch('/api/stickycartsetting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Accept-Encoding": "gzip,deflate,compress",
            },
            body: JSON.stringify({ ...stickyCartSettings })
        })
        resp.text().then(data => {
            const RespData = JSON.parse(data)
            console.log(RespData)
        });
        console.log(stickyCartSettings)
        toggleActive()
    }


    let icon_options = {
        'option_1': <Icon source={CartMajor} color="base" />,
        'option_2': <Icon source={CartDownMajor} color="base" />,
        'option_3': <Icon source={CartMajor} color="base" />,
        'option_4': <Icon source={CartMajor} color="base" />,
        'option_5': <Icon source={CartMajor} color="base" />,
    }

    return (
        <div className='caart_full_cart_main sticky_cart'>
            <div style={{ height: '50px', position: 'absolute' }}>
                <Frame>
                    {toastMarkup}
                </Frame>
            </div>
            <div className='caart_full_cart_sidebar'>
                <h3 className='caart_full_cart_sidebar_heading'>
                    Sticky Cart Editor
                </h3>
                <ul className='caart_full_cart_sidebar_list'>
                    <li className='caart_full_cart_sidebar_single_menu'>


                        <div ref={stickyCartRef} className='caart_full_cart_sidebar_single_menu_inputs_container active'>
                            <div className='caart_full_cart_sidebar_heading_icon_view'>
                                <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_left'>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9806 1.19613C11.0889 0.654566 10.7377 0.127741 10.1961 0.019429C9.65457 -0.0888828 9.12774 0.262334 9.01943 0.803894L7.01943 10.8039C6.91112 11.3455 7.26233 11.8723 7.80389 11.9806C8.34545 12.0889 8.87228 11.7377 8.98059 11.1961L10.9806 1.19613Z" fill="#5C5F62" />
                                        <path d="M5.8 2.4C6.13137 2.84183 6.04183 3.46863 5.6 3.8L2.66667 6L5.6 8.2C6.04183 8.53137 6.13137 9.15817 5.8 9.6C5.46863 10.0418 4.84183 10.1314 4.4 9.8L0.4 6.8C0.148194 6.61114 0 6.31475 0 6C0 5.68524 0.148194 5.38885 0.4 5.2L4.4 2.2C4.84183 1.86863 5.46863 1.95817 5.8 2.4Z" fill="#5C5F62" />
                                        <path d="M12.2 9.6C11.8686 9.15817 11.9582 8.53137 12.4 8.2L15.3333 6L12.4 3.8C11.9582 3.46863 11.8686 2.84183 12.2 2.4C12.5314 1.95817 13.1582 1.86863 13.6 2.2L17.6 5.2C17.8518 5.38886 18 5.68525 18 6C18 6.31476 17.8518 6.61115 17.6 6.8L13.6 9.8C13.1582 10.1314 12.5314 10.0418 12.2 9.6Z" fill="#5C5F62" />
                                    </svg>
                                </div>
                                <h4>Sticky Cart Editor</h4>
                                {stickyCartSettings.sticky_cart_setting.show_section ? (
                                    <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("sticky_cart_setting")}>
                                        <Icon source={ViewMinor} color="base" />
                                    </div>
                                ) : (
                                    <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("sticky_cart_setting")}>
                                        <Icon source={HideMinor} color="base" />
                                    </div>
                                )}
                            </div>
                            <ul className='caart_full_cart_sidebar_setting_ul'>
                                <li>
                                    <h3>Button Design Settings</h3>
                                    <h4>Heading Text</h4>
                                    <div className='caart_sticky_options'>
                                        <div className='caart_sticky_single_option'>
                                            <input id="label_option_1" className={stickyCartSettings.sticky_cart_setting.icon_option == 'option_1' && 'active'} type="radio" name="icon_option" value='option_1' onChange={handleStickyCartOptionChange} />
                                            <label htmlFor='label_option_1'>
                                                <Icon
                                                    source={CartMajor}
                                                    color="base"
                                                />
                                            </label>
                                        </div>
                                        <div className='caart_sticky_single_option'>
                                            <input id="label_option_2" className={stickyCartSettings.sticky_cart_setting.icon_option == 'option_2' && 'active'} type="radio" name="icon_option" value='option_2' onChange={handleStickyCartOptionChange} />
                                            <label htmlFor='label_option_2'>
                                                <Icon
                                                    source={CartDownMajor}
                                                    color="base"
                                                />
                                            </label>
                                        </div>
                                        <div className='caart_sticky_single_option'>
                                            <input id="label_option_3" className={stickyCartSettings.sticky_cart_setting.icon_option == 'option_3' && 'active'} type="radio" name="icon_option" value='option_3' onChange={handleStickyCartOptionChange} />
                                            <label htmlFor='label_option_3'>
                                                <Icon
                                                    source={CartMajor}
                                                    color="base"
                                                />
                                            </label>
                                        </div>
                                        <div className='caart_sticky_single_option'>
                                            <input id="label_option_4" className={stickyCartSettings.sticky_cart_setting.icon_option == 'option_4' && 'active'} type="radio" name="icon_option" value='option_4' onChange={handleStickyCartOptionChange} />
                                            <label htmlFor='label_option_4'>
                                                <Icon
                                                    source={CartMajor}
                                                    color="base"
                                                />
                                            </label>
                                        </div>
                                        <div className='caart_sticky_single_option'>
                                            <input id="label_option_5" className={stickyCartSettings.sticky_cart_setting.icon_option == 'option_5' && 'active'} type="radio" name="icon_option" value='option_5' onChange={handleStickyCartOptionChange} />
                                            <label htmlFor='label_option_5'>
                                                <Icon
                                                    source={CartMajor}
                                                    color="base"
                                                />
                                            </label>
                                        </div>

                                    </div>
                                    <h4><br />Background Color</h4>
                                    <input type='color'
                                        value={stickyCartSettings.sticky_cart_setting.bg_color}
                                        name='bg_color'
                                        onChange={(e) => handleInputChange(e, "sticky_cart_setting", "bg_color")} />
                                    <h4><br />Icon Color</h4>
                                    <input type='color'
                                        value={stickyCartSettings.sticky_cart_setting.icon_color}
                                        name='icon_color'
                                        onChange={(e) => handleInputChange(e, "sticky_cart_setting", "icon_color")} />
                                    <h4><br />Quantity Background Color</h4>
                                    <input type='color'
                                        value={stickyCartSettings.sticky_cart_setting.qty_bg_color}
                                        name='qty_bg_color'
                                        onChange={(e) => handleInputChange(e, "sticky_cart_setting", "qty_bg_color")} />
                                    <h4><br />Quantity Text Color</h4>
                                    <input type='color'
                                        value={stickyCartSettings.sticky_cart_setting.qty_text_color}
                                        name='qty_text_color'
                                        onChange={(e) => handleInputChange(e, "sticky_cart_setting", "qty_text_color")} />
                                    <h4><br />Sticky Cart Position</h4>
                                    <Select
                                        label=""
                                        options={stickyCartPositionOptions}
                                        name='sticky_cart_position'
                                        onChange={handleSelectChange1}
                                        value={stickyCartSettings.sticky_cart_setting.sticky_cart_position}
                                    />
                                    <h4><br />Device Settings</h4>
                                    <Select
                                        label=""
                                        options={deviceSettingsOptions}
                                        name='device_settings'
                                        onChange={handleSelectChange2}
                                        value={stickyCartSettings.sticky_cart_setting.device_settings}
                                    />
                                    <h4><br />Sticky Cart Button Action</h4>
                                    <Select
                                        label=""
                                        options={buttonActionOptions}
                                        name='button_action'
                                        onChange={handleSelectChange3}
                                        value={stickyCartSettings.sticky_cart_setting.button_action}
                                    />
                                </li>

                            </ul>
                        </div>
                    </li>
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
                        <Button primary onClick={handleStickyCartData}>Save</Button>
                    </div>
                </div>

                {/* {shop != '' && <iframe src={`https://${shop}/`} height="500" width="100%"></iframe>} */}


                <div className='caart_full_cart_preview_container_main caart_sticky_preview_main'>
                    {stickyCartSettings.sticky_cart_setting.show_section ? (
                        <div className={`caart_sticky_preview_icon ${stickyCartSettings.sticky_cart_setting.sticky_cart_position}`}
                            style={{
                                '--bgColor': stickyCartSettings.sticky_cart_setting.bg_color,
                                '--iconColor': stickyCartSettings.sticky_cart_setting.icon_color,
                                '--qtyBgColor': stickyCartSettings.sticky_cart_setting.qty_bg_color,
                                '--qtyTextColor': stickyCartSettings.sticky_cart_setting.qty_text_color,
                            }}
                        >
                            {icon_options[stickyCartSettings.sticky_cart_setting.icon_option]}
                            <span>1</span>
                        </div>
                    ) : ''}

                </div>





            </div>
        </div>
    )
}
