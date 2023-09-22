import React from 'react'
import { ViewMinor, HideMinor } from '@shopify/polaris-icons';
import { Icon, Select } from '@shopify/polaris';
import { useState } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';
import { dummy } from '../../../assets';


export default function ProgressBarSetting({ handleProgressBarProduct, handleCheckboxChange, handleFullCartSelectChange, handleInputChange, progressBarSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {
    const [tierOneProductOne, setTierOneProductOne] = useState({});
    const [tierOneProducTwo, setTierOneProductTwo] = useState({});
    const [tierOneProductThree, setTierOneProductThree] = useState({});

    const [tierTwoProductOne, setTierTwoProductOne] = useState({});
    const [tierTwoProducTwo, setTierTwoProductTwo] = useState({});
    const [tierTwoProductThree, setTierTwoProductThree] = useState({});

    const [tierThreeProductOne, setTierThreeProductOne] = useState({});
    const [tierThreeProducTwo, setTierThreeProductTwo] = useState({});
    const [tierThreeProductThree, setTierThreeProductThree] = useState({});

    const [selectedButton, setSelectedButton] = useState();
    const [showResourcePicker, setResourcePicker] = useState(false);
    const handleResourcePickerProductChange = ({ selection }) => {
        if (selectedButton == 'first_tier_product_one') {
            setTierOneProductOne({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'first_tier_product_two') {
            setTierOneProductTwo({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'first_tier_product_three') {
            setTierOneProductThree({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }


        if (selectedButton == 'second_tier_product_one') {
            setTierTwoProductOne({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'second_tier_product_two') {
            setTierTwoProductTwo({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'second_tier_product_three') {
            setTierTwoProductThree({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }

        if (selectedButton == 'third_tier_product_one') {
            setTierThreeProductOne({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'third_tier_product_two') {
            setTierThreeProductTwo({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }
        if (selectedButton == 'third_tier_product_three') {
            setTierThreeProductThree({
                title: selection[0].title,
                image: selection[0].images[0],
                handle: selection[0].handle,
                id: selection[0].id
            })
        }


        handleProgressBarProduct(selectedButton, {
            title: selection[0].title,
            image: selection[0].images[0],
            handle: selection[0].handle,
            id: selection[0].id
        })
        setResourcePicker(false);
    }
    const toggleResourcePicker = () => setResourcePicker(!showResourcePicker)



    const [selected, setSelected] = useState('item_count');
    const options = [
        { label: 'Item Count', value: 'item_count' },
        { label: 'Cart Total', value: 'cart_total' }
    ];
    const handleSelectChange = (value) => {
        setSelected(value)
        handleFullCartSelectChange(value, "progress_bar", "reward_basis")
    }


    const [firstTierDiscountType, setFirstTierDiscountType] = useState('discount');
    const options2 = [
        { label: 'Discount', value: 'discount' },
        { label: 'Product', value: 'product' },
        { label: 'Shipping', value: 'shipping' }
    ];
    const handleSelectChange2 = (value) => {
        setFirstTierDiscountType(value)
        handleFullCartSelectChange(value, "progress_bar", "first_tier_discount_type")
    }


    const [secondTierDiscountType, setSecondTierDiscountType] = useState('discount');
    const options3 = [
        { label: 'Discount', value: 'discount' },
        { label: 'Product', value: 'product' },
        { label: 'Shipping', value: 'shipping' }
    ];
    const handleSelectChange3 = (value) => {
        setSecondTierDiscountType(value)
        handleFullCartSelectChange(value, "progress_bar", "second_tier_discount_type")
    }

    const [thirdTierDiscountType, setThirdTierDiscountType] = useState('discount');
    const options4 = [
        { label: 'Discount', value: 'discount' },
        { label: 'Product', value: 'product' },
        { label: 'Shipping', value: 'shipping' }
    ];
    const handleSelectChange4 = (value) => {
        setThirdTierDiscountType(value)
        handleFullCartSelectChange(value, "progress_bar", "third_tier_discount_type")
    }

    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            {showResourcePicker && (
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    selectMultiple={false}
                    onCancel={toggleResourcePicker}
                    onSelection={handleResourcePickerProductChange}
                    open
                />
            )}



            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg style={{ position: 'relative', top: '-3px' }} width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="5" rx="2.5" fill="#D9D9D9" />
                    <path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11V5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Progress Bar</h4>
            {progressBarSettings.progress_bar.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("progress_bar")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("progress_bar")}>
                    <Icon source={HideMinor} color="base" />
                </div>
            )}


            <div ref={id} className='caart_full_cart_sidebar_single_menu_inputs_container progress_bar'>
                <h3 className='caart_full_cart_sidebar_single_menu_inputs_container_heading' onClick={() => removeActiveInMenu(id)}>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.00001 12C5.74401 12 5.48801 11.902 5.29301 11.707L0.293006 6.70701C-0.0979941 6.31601 -0.0979941 5.68401 0.293006 5.29301L5.29301 0.293006C5.68401 -0.0979941 6.31601 -0.0979941 6.70701 0.293006C7.09801 0.684006 7.09801 1.31601 6.70701 1.70701L2.41401 6.00001L6.70701 10.293C7.09801 10.684 7.09801 11.316 6.70701 11.707C6.51201 11.902 6.25601 12 6.00001 12Z" fill="#008060" />
                    </svg>
                    <span>Back to Menu</span>
                </h3>
                <div className='caart_full_cart_sidebar_heading_icon_view'>
                    <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_left'>
                        <svg style={{ position: 'relative', top: '-3px' }} width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="5" rx="2.5" fill="#D9D9D9" />
                            <path d="M0 2.5C0 1.11929 1.11929 0 2.5 0H11V5H2.5C1.11929 5 0 3.88071 0 2.5Z" fill="#5C5F62" />
                        </svg>
                    </div>
                    <h4>Progress Bar</h4>
                    {progressBarSettings.progress_bar.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("progress_bar")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("progress_bar")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <h3>General Settings</h3>
                        <h4>Bar Background Color</h4>
                        <input type='color'
                            value={progressBarSettings.progress_bar.bar_background_color}
                            name='bar_background_color'
                            onChange={(e) => handleInputChange(e, "progress_bar", "bar_background_color")} />

                        <h4><br />Bar Foreground Color</h4>
                        <input type='color'
                            value={progressBarSettings.progress_bar.bar_foreground_color}
                            name='bar_foreground_color'
                            onChange={(e) => handleInputChange(e, "progress_bar", "bar_foreground_color")} />

                        <h4><br />Reward Basis</h4>
                        <Select
                            label=""
                            options={options}
                            name='reward_basis'
                            onChange={handleSelectChange}
                            value={progressBarSettings.progress_bar.reward_basis}
                        />
                        <h4><br />Text after completing full progress bar</h4>
                        <textarea
                            value={progressBarSettings.progress_bar.text_after_completing}
                            name='text_after_completing'
                            onChange={(e) => handleInputChange(e, "progress_bar", "text_after_completing")}
                            autoComplete="off"
                        />
                    </li>
                    <li>
                        <h3>Reward Settings</h3>
                        <>
                            <h4>Reward Type</h4>
                            <Select
                                label=""
                                options={options2}
                                name='first_tier_discount_type'
                                onChange={handleSelectChange2}
                                value={firstTierDiscountType}
                            />
                            <h4><br />Reward Description</h4>
                            <input type="text"
                                value={progressBarSettings.progress_bar.first_tier_description}
                                name={`first_tier_description`}
                                onChange={(e) => handleInputChange(e, "progress_bar", `first_tier_description`)}
                                autoComplete="off"
                            />


                            {selected == 'item_count' ? (
                                <>
                                    <h4><br />Item Count</h4>
                                    <input type='number'
                                        value={progressBarSettings.progress_bar.first_tier_reward_count}
                                        name={`first_tier_reward_count`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `first_tier_reward_count`)}
                                    />
                                </>
                            ) : (<>
                                <h4><br />Minimum Amount</h4>
                                <input type='number'
                                    value={progressBarSettings.progress_bar.first_tier_minimum_total}
                                    name={`first_tier_minimum_total`}
                                    onChange={(e) => handleInputChange(e, "progress_bar", `first_tier_minimum_total`)}
                                />
                            </>)}

                            {firstTierDiscountType == 'product' ? (
                                <div className='caart_full_cart_sidebar_setting_ul_products'>
                                    <div className='caart_full_cart_sidebar_setting_ul_product'>
                                        <span>Select Product 1</span>
                                        <img src={tierOneProductOne.image ? tierOneProductOne.image.originalSrc : dummy} />
                                        <span>{tierOneProductOne.title ? tierOneProductOne.title : 'Not selected'}</span>
                                        <button onClick={() => {
                                            setSelectedButton('first_tier_product_one')
                                            setResourcePicker(!showResourcePicker)
                                        }}>Selected Products</button>
                                    </div>
                                    <div className='caart_full_cart_sidebar_setting_ul_product'>
                                        <span>Select Product 2</span>
                                        <img src={tierOneProducTwo.image ? tierOneProducTwo.image.originalSrc : dummy} />
                                        <span>{tierOneProducTwo.title ? tierOneProducTwo.title : 'Not selected'}</span>
                                        <button onClick={() => {
                                            setSelectedButton('first_tier_product_two')
                                            setResourcePicker(!showResourcePicker)
                                        }}>Selected Products</button>
                                    </div>
                                    <div className='caart_full_cart_sidebar_setting_ul_product'>
                                        <span>Select Product 3</span>
                                        <img src={tierOneProductThree.image ? tierOneProductThree.image.originalSrc : dummy} />
                                        <span>{tierOneProductThree.title ? tierOneProductThree.title : 'Not selected'}</span>
                                        <button onClick={() => {
                                            setSelectedButton('first_tier_product_three')
                                            setResourcePicker(!showResourcePicker)
                                        }}>Selected Products</button>
                                    </div>
                                </div>
                            ) : ''}


                            {selected == 'item_count' ? (
                                <>
                                    <h4><br />Text before achieving</h4>
                                    <textarea
                                        value={progressBarSettings.progress_bar.first_tier_reward_count_text}
                                        name={`first_tier_reward_count_text`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `first_tier_reward_count_text`)}
                                        autoComplete="off"
                                    />
                                    <small>
                                        Use {"{COUNT}"} to show the remaining number of items needed to reach reward
                                    </small>
                                </>
                            ) : (<>
                                <h4><br />Text before achieving</h4>
                                <textarea
                                    value={progressBarSettings.progress_bar.first_tier_minimum_total_text}
                                    name={`first_tier_minimum_total_text`}
                                    onChange={(e) => handleInputChange(e, "progress_bar", `first_tier_minimum_total_text`)}
                                    autoComplete="off"
                                />
                                <small>
                                    Use {"{AMOUNT}"} to show the remaining amount needed to reach reward
                                </small>
                            </>)}






                            {progressBarSettings.progress_bar.total_tiers != 3 ? (
                                <div className='new_add_discount_tier' onClick={(e) => handleCheckboxChange(e, "progress_bar", `show_second_tier_section`, 'add')}>
                                    Add New Rewards Tier
                                </div>
                            ) : ''}



                        </>

                        {progressBarSettings.progress_bar.show_second_tier_section ?
                            <>
                                <hr style={{ border: '1px solid rgb(217, 217, 217)' }} />
                                <br />
                                <h4>Reward Type</h4>
                                <Select
                                    label=""
                                    options={options3}
                                    name='second_tier_discount_type'
                                    onChange={handleSelectChange3}
                                    value={secondTierDiscountType}
                                />
                                <h4><br />Reward Description</h4>
                                <input type="text"
                                    value={progressBarSettings.progress_bar.second_tier_description}
                                    name={`second_tier_description`}
                                    onChange={(e) => handleInputChange(e, "progress_bar", `second_tier_description`)}
                                    autoComplete="off"
                                />
                                {selected == 'item_count' ? (
                                    <>
                                        <h4><br />Item Count</h4>
                                        <input type='number'
                                            value={progressBarSettings.progress_bar.second_tier_reward_count}
                                            name={`second_tier_reward_count`}
                                            onChange={(e) => handleInputChange(e, "progress_bar", `second_tier_reward_count`)}
                                        />
                                    </>
                                ) : (<>
                                    <h4><br />Minimum Amount</h4>
                                    <input type='number'
                                        value={progressBarSettings.progress_bar.second_tier_minimum_total}
                                        name={`second_tier_minimum_total`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `second_tier_minimum_total`)}
                                    />
                                </>)}


                                {secondTierDiscountType == 'product' ? (
                                    <div className='caart_full_cart_sidebar_setting_ul_products'>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 1</span>
                                            <img src={tierTwoProductOne.image ? tierTwoProductOne.image.originalSrc : dummy} />
                                            <span>{tierTwoProductOne.title ? tierTwoProductOne.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('second_tier_product_one')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 2</span>
                                            <img src={tierTwoProducTwo.image ? tierTwoProducTwo.image.originalSrc : dummy} />
                                            <span>{tierTwoProducTwo.title ? tierTwoProducTwo.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('second_tier_product_two')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 3</span>
                                            <img src={tierTwoProductThree.image ? tierTwoProductThree.image.originalSrc : dummy} />
                                            <span>{tierTwoProductThree.title ? tierTwoProductThree.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('second_tier_product_three')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                    </div>
                                ) : ''}




                                {selected == 'item_count' ? (
                                    <>
                                        <h4><br />Text before achieving</h4>
                                        <textarea
                                            value={progressBarSettings.progress_bar.second_tier_reward_count_text}
                                            name={`second_tier_reward_count_text`}
                                            onChange={(e) => handleInputChange(e, "progress_bar", `second_tier_reward_count_text`)}
                                            autoComplete="off"
                                        />
                                        <small>
                                            Use {"{COUNT}"} to show the remaining number of items needed to reach reward
                                        </small>
                                    </>
                                ) : (<>
                                    <h4><br />Text before achieving</h4>
                                    <textarea
                                        value={progressBarSettings.progress_bar.second_tier_minimum_total_text}
                                        name={`second_tier_minimum_total_text`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `second_tier_minimum_total_text`)}
                                        autoComplete="off"
                                    />
                                    <small>
                                        Use {"{AMOUNT}"} to show the remaining amount needed to reach reward
                                    </small>
                                </>)}




                                {progressBarSettings.progress_bar.total_tiers != 3 ? (
                                    <div className='new_add_discount_tier' onClick={(e) => handleCheckboxChange(e, "progress_bar", `show_third_tier_section`, 'add')}>
                                        Add New Rewards Tier
                                    </div>
                                ) : ''}

                                {progressBarSettings.progress_bar.total_tiers > 1 ? (
                                    <div className='new_remove_discount_tier' onClick={(e) => handleCheckboxChange(e, "progress_bar", `show_second_tier_section`, 'remove')}>
                                        Remove Rewards Tier
                                    </div>
                                ) : ''}
                                <br />
                            </>

                            : ''}

                        {progressBarSettings.progress_bar.show_third_tier_section ?
                            <>
                                <hr style={{ border: '1px solid rgb(217, 217, 217)' }} />
                                <br />
                                <h4>Reward Type</h4>
                                <Select
                                    label=""
                                    options={options4}
                                    name='third_tier_discount_type'
                                    onChange={handleSelectChange4}
                                    value={thirdTierDiscountType}
                                />
                                <h4><br />Reward Description</h4>
                                <input type="text"
                                    value={progressBarSettings.progress_bar.third_tier_description}
                                    name={`third_tier_description`}
                                    onChange={(e) => handleInputChange(e, "progress_bar", `third_tier_description`)}
                                    autoComplete="off"
                                />
                                {selected == 'item_count' ? (
                                    <>
                                        <h4><br />Item Count</h4>
                                        <input type='number'
                                            value={progressBarSettings.progress_bar.third_tier_reward_count}
                                            name={`third_tier_reward_count`}
                                            onChange={(e) => handleInputChange(e, "progress_bar", `third_tier_reward_count`)}
                                        />
                                    </>
                                ) : (<>
                                    <h4><br />Minimum Amount</h4>
                                    <input type='number'
                                        value={progressBarSettings.progress_bar.third_tier_minimum_total}
                                        name={`third_tier_minimum_total`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `third_tier_minimum_total`)}
                                    />
                                </>)}


                                {thirdTierDiscountType == 'product' ? (
                                    <div className='caart_full_cart_sidebar_setting_ul_products'>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 1</span>
                                            <img src={tierThreeProductOne.image ? tierThreeProductOne.image.originalSrc : dummy} />
                                            <span>{tierThreeProductOne.title ? tierThreeProductOne.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('third_tier_product_one')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 2</span>
                                            <img src={tierThreeProducTwo.image ? tierThreeProducTwo.image.originalSrc : dummy} />
                                            <span>{tierThreeProducTwo.title ? tierThreeProducTwo.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('third_tier_product_two')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                        <div className='caart_full_cart_sidebar_setting_ul_product'>
                                            <span>Select Product 3</span>
                                            <img src={tierThreeProductThree.image ? tierThreeProductThree.image.originalSrc : dummy} />
                                            <span>{tierThreeProductThree.title ? tierThreeProductThree.title : 'Not selected'}</span>
                                            <button onClick={() => {
                                                setSelectedButton('third_tier_product_three')
                                                setResourcePicker(!showResourcePicker)
                                            }}>Selected Products</button>
                                        </div>
                                    </div>
                                ) : ''}



                                {selected == 'item_count' ? (
                                    <>
                                        <h4><br />Text before achieving</h4>
                                        <textarea
                                            value={progressBarSettings.progress_bar.third_tier_reward_count_text}
                                            name={`third_tier_reward_count_text`}
                                            onChange={(e) => handleInputChange(e, "progress_bar", `third_tier_reward_count_text`)}
                                            autoComplete="off"
                                        />
                                        <small>
                                            Use {"{COUNT}"} to show the remaining number of items needed to reach reward
                                        </small>
                                    </>
                                ) : (<>
                                    <h4><br />Text before achieving</h4>
                                    <textarea
                                        value={progressBarSettings.progress_bar.third_tier_minimum_total_text}
                                        name={`third_tier_minimum_total_text`}
                                        onChange={(e) => handleInputChange(e, "progress_bar", `third_tier_minimum_total_text`)}
                                        autoComplete="off"
                                    />
                                    <small>
                                        Use {"{AMOUNT}"} to show the remaining amount needed to reach reward
                                    </small>
                                </>)}

                                {progressBarSettings.progress_bar.total_tiers > 1 ? (
                                    <div className='new_remove_discount_tier' onClick={(e) => handleCheckboxChange(e, "progress_bar", `show_third_tier_section`, 'remove')}>
                                        Remove Rewards Tier
                                    </div>
                                ) : ''}

                            </>

                            : ''}
                    </li>
                </ul>
            </div>
        </li>
    )
}

