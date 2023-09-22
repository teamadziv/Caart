import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon, Select, Button, Modal } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';
import UpsellSingle from './UpsellSingle';

export default function YouMayAlsoLikeSetting({ handleUpsellProductsArr, handleFullCartSelectChange, handleInputChange, upsellSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {

    const [selected, setSelected] = useState('top');
    const options = [
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' }
    ];
    const handleSelectChange = (value) => {
        setSelected(value)
        handleFullCartSelectChange(value, "upsells", "upsell_position")
    }

    const [selected2, setSelected2] = useState('block');
    const options2 = [
        { label: 'Block', value: 'block' },
        { label: 'Carousel', value: 'carousel' }
    ];
    const handleSelectChange2 = (value) => {
        setSelected2(value)
        handleFullCartSelectChange(value, "upsells", "upsell_direction")
    }

    const [active, setActive] = useState(false);

    const handleChange = useCallback(() => setActive(!active), [active]);



    const [upsellsCount, setUpsellsCount] = useState([]);



    const addUpsell = () => {
        setUpsellsCount(prev => {
            return [...prev, upsellsCount.length]
        })
    }

    const removeUpsell = (id) => {
        setUpsellsCount(prev => {
            return upsellsCount.filter(i => i != id)
        })
    }

    const [upsellsProducts, setUpsellsProducts] = useState([]);

    useEffect(() => {
        console.log(upsellsProducts)
    }, [upsellsProducts])

    const handelUpsellsProducts = (id, trigger, upsell_product) => {

        let foundId = false
        const newArray = upsellsProducts.map(obj => {
            if (obj.id === id) {
                foundId = true
                return {
                    ...obj,
                    "trigger": trigger,
                    "upsell_product": upsell_product
                }
            }
            return obj;
        });


        if (foundId) {
            setUpsellsProducts(newArray)
        } else {
            setUpsellsProducts(prev => {
                return [
                    ...upsellsProducts,
                    {
                        "id": id,
                        "trigger": trigger,
                        "upsell_product": upsell_product
                    }
                ]
            })
        }
    }

    const handleUpsellUpdate = () => {
        handleUpsellProductsArr(upsellsProducts)

        setActive(!active)
    }

    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg style={{ position: 'relative', top: '-2px' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.1706C7.83462 5.58229 7 6.69338 7 8C7 9.01344 7.35979 9.76984 8.025 10.2688C8.56526 10.6739 9.23974 10.8415 9.69136 10.9537L9.75746 10.9701C10.3076 11.1077 10.5923 11.1942 10.775 11.3313C10.8598 11.3948 11 11.5134 11 12C11 12.5473 10.5615 12.9911 10.0164 12.9999C10.0078 12.9992 9.99193 12.9976 9.96955 12.9944C9.91271 12.9863 9.81561 12.9678 9.69123 12.9263C9.44593 12.8446 9.08494 12.6707 8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071C7.89115 14.3054 8.50498 14.6299 9 14.8036V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V14.8294C12.1654 14.4177 13 13.3066 13 12C13 10.9866 12.6402 10.2302 11.975 9.73125C11.4347 9.32606 10.7603 9.15851 10.3086 9.04632L10.2425 9.02986C9.6924 8.89232 9.40769 8.80577 9.225 8.66875C9.14021 8.60516 9 8.48656 9 8C9 7.45275 9.43848 7.00885 9.98364 7.00013C9.99218 7.00083 10.0081 7.00238 10.0305 7.00557C10.0873 7.01369 10.1844 7.03222 10.3088 7.07368C10.5541 7.15545 10.9151 7.32927 11.2929 7.70711C11.6834 8.09763 12.3166 8.09763 12.7071 7.70711C13.0976 7.31658 13.0976 6.68342 12.7071 6.29289C12.1089 5.69464 11.495 5.37006 11 5.19642V5Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Upsells</h4>
            {upsellSettings.upsells.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("upsells")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("upsells")}>
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
                        <svg style={{ position: 'relative', top: '-2px' }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 20C4.486 20 0 15.514 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.514 15.514 20 10 20ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.1706C7.83462 5.58229 7 6.69338 7 8C7 9.01344 7.35979 9.76984 8.025 10.2688C8.56526 10.6739 9.23974 10.8415 9.69136 10.9537L9.75746 10.9701C10.3076 11.1077 10.5923 11.1942 10.775 11.3313C10.8598 11.3948 11 11.5134 11 12C11 12.5473 10.5615 12.9911 10.0164 12.9999C10.0078 12.9992 9.99193 12.9976 9.96955 12.9944C9.91271 12.9863 9.81561 12.9678 9.69123 12.9263C9.44593 12.8446 9.08494 12.6707 8.70711 12.2929C8.31658 11.9024 7.68342 11.9024 7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071C7.89115 14.3054 8.50498 14.6299 9 14.8036V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V14.8294C12.1654 14.4177 13 13.3066 13 12C13 10.9866 12.6402 10.2302 11.975 9.73125C11.4347 9.32606 10.7603 9.15851 10.3086 9.04632L10.2425 9.02986C9.6924 8.89232 9.40769 8.80577 9.225 8.66875C9.14021 8.60516 9 8.48656 9 8C9 7.45275 9.43848 7.00885 9.98364 7.00013C9.99218 7.00083 10.0081 7.00238 10.0305 7.00557C10.0873 7.01369 10.1844 7.03222 10.3088 7.07368C10.5541 7.15545 10.9151 7.32927 11.2929 7.70711C11.6834 8.09763 12.3166 8.09763 12.7071 7.70711C13.0976 7.31658 13.0976 6.68342 12.7071 6.29289C12.1089 5.69464 11.495 5.37006 11 5.19642V5Z" fill="#5C5F62" />
                        </svg>

                    </div>
                    <h4>Upsells</h4>
                    {upsellSettings.upsells.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("upsells")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("upsells")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>Select Product</h3>
                        <label htmlFor='use_ai_recommend' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
                            <input type='checkbox'
                                name='use_ai_recommend'
                                id='use_ai_recommend'
                                onChange={(e) => handleInputChange(e, "upsells", "use_ai_recommend")} />
                            <span>Use AI Recommended Upsells</span>
                        </label>
                        <br />
                        <Button primary fullWidth onClick={handleChange}>Configure Manual Upsells</Button>
                        <Modal
                            open={active}
                            onClose={handleChange}
                            title="Configure Manual Upsells"
                            primaryAction={{
                                content: 'Update',
                                onAction: handleUpsellUpdate,
                            }}
                            secondaryActions={[
                                {
                                    content: 'Cancel',
                                    onAction: handleChange,
                                },
                            ]}
                        >
                            <Modal.Section>
                                <div className='caart_full_cart_upsell_head'>
                                    <div>
                                        Trigger Product
                                    </div>
                                    <div>
                                        Upsell Product
                                    </div>
                                </div>
                                <div className='caart_full_cart_upsell_container'>
                                    <div className='caart_full_cart_upsell_container_pbtn'>
                                        <Button primary fullWidth onClick={addUpsell}>Add New Upsell</Button>
                                    </div>

                                    {upsellsCount.map((item, i) => <UpsellSingle key={i} handelUpsellsProducts={handelUpsellsProducts} id={item} removeUpsell={removeUpsell} />)}


                                </div>

                                {/* <ResourcePicker resourceType="Product" /> */}
                            </Modal.Section>
                        </Modal>
                    </li>
                    <li>
                        <h3>Upsell Settings</h3>
                        <label htmlFor='show_upsell_in_cart' style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "5px" }}>
                            <input type='checkbox'
                                name='show_upsell_in_cart'
                                id='show_upsell_in_cart'
                                onChange={(e) => handleInputChange(e, "upsells", "show_upsell_in_cart")} />
                            <span>Show upsell offer if item already in cart?</span>
                        </label>
                        <h4><br />Upsell Title</h4>
                        <textarea
                            value={upsellSettings.upsells.upsell_title}
                            name='upsell_title'
                            onChange={(e) => handleInputChange(e, "upsells", "upsell_title")}
                            autoComplete="off"
                        />
                        <h4><br />Upsell Position</h4>
                        <Select
                            label=""
                            options={options}
                            name='upsell_position'
                            onChange={handleSelectChange}
                            value={upsellSettings.upsells.upsell_position}
                        />
                        <h4><br />Upsell Direction</h4>
                        <Select
                            label=""
                            options={options2}
                            name='upsell_direction'
                            onChange={handleSelectChange2}
                            value={upsellSettings.upsells.upsell_direction}
                        />
                    </li>
                </ul>
            </div>
        </li>
    )
}

