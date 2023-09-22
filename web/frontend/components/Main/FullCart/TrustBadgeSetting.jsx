
import React from 'react'
import { ViewMinor, HideMinor, NoteMinor } from '@shopify/polaris-icons';
import { Icon, DropZone, Thumbnail, Select } from '@shopify/polaris';

import { useState } from 'react';


export default function TrustBadgeSetting({ setFullCartSettings, handleFullCartSelectChange, trustBadgeSettings, handleIconShowHide, addActiveInMenu, id, removeActiveInMenu }) {

    const [selected, setSelected] = useState('bottom');
    const options = [
        { label: 'Bottom', value: 'bottom' },
        { label: 'Top', value: 'top' }
    ];
    const handleSelectChange = (value) => {
        setSelected(value)
        handleFullCartSelectChange(value, "trust_badge", "position")
    }



    const [file, setFile] = useState([]);
    const handleDropZoneDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
        setFile(prev => {
            acceptedFiles[0]
            var f = acceptedFiles[0]
            var URLObj = window.URL || window.webkitURL;
            var source = URLObj.createObjectURL(f);
            setFullCartSettings(prev => {
                return {
                    ...prev,
                    trust_badge: {
                        ...trustBadgeSettings.trust_badge,
                        img: source
                    }
                }
            })
        })
    }



    const validImageTypes = ['image/jpeg', 'image/png'];

    const fileUpload = !file && <DropZone.FileUpload actionHint="Accepts .jpg, and .png" />;
    const uploadedFile = file && (
        <>
            <Thumbnail
                size="small"
                alt={file.name}
                source={
                    validImageTypes.includes(file.type)
                        ? window.URL.createObjectURL(file)
                        : NoteMinor
                }
            />
        </>
    );

    return (
        <li className='caart_full_cart_sidebar_single_menu'>
            <div className='caart_full_cart_sidebar_single_menu_icon_left'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.12801 0.232947C6.75711 1.61569 3.75731 2.56215 1.49335 2.87876C0.67158 2.99369 -0.00187902 3.66915 1.65408e-05 4.49924L0.00115097 4.99602C-0.0292758 11.0386 0.478494 16.3278 9.46347 19.8993C9.80128 20.0335 10.1875 20.0336 10.5253 19.8994C19.5177 16.3279 20.0282 11.0387 19.9977 4.99602L19.9975 4.49494C19.997 3.66653 19.3242 2.98523 18.5061 2.85685C16.3581 2.51974 13.2245 1.58316 10.8561 0.228675C10.322 -0.0768069 9.65955 -0.0770602 9.12801 0.232947ZM13.7049 8.71052C14.0954 8.31984 14.0954 7.68643 13.7049 7.29575C13.3144 6.90507 12.6812 6.90507 12.2907 7.29575L8.9978 10.5899L7.70491 9.29653C7.31439 8.90586 6.68122 8.90586 6.2907 9.29653C5.90017 9.68721 5.90017 10.3206 6.2907 10.7113L8.2907 12.7121C8.68122 13.1028 9.31439 13.1028 9.70491 12.7121L13.7049 8.71052Z" fill="#5C5F62" />
                </svg>

            </div>
            <h4 onClick={() => addActiveInMenu(id)}>Trust Badge</h4>
            {trustBadgeSettings.trust_badge.show_section ? (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("trust_badge")}>
                    <Icon source={ViewMinor} color="base" />
                </div>
            ) : (
                <div className='caart_full_cart_sidebar_single_menu_icon_right' onClick={() => handleIconShowHide("trust_badge")}>
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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.12801 0.232947C6.75711 1.61569 3.75731 2.56215 1.49335 2.87876C0.67158 2.99369 -0.00187902 3.66915 1.65408e-05 4.49924L0.00115097 4.99602C-0.0292758 11.0386 0.478494 16.3278 9.46347 19.8993C9.80128 20.0335 10.1875 20.0336 10.5253 19.8994C19.5177 16.3279 20.0282 11.0387 19.9977 4.99602L19.9975 4.49494C19.997 3.66653 19.3242 2.98523 18.5061 2.85685C16.3581 2.51974 13.2245 1.58316 10.8561 0.228675C10.322 -0.0768069 9.65955 -0.0770602 9.12801 0.232947ZM13.7049 8.71052C14.0954 8.31984 14.0954 7.68643 13.7049 7.29575C13.3144 6.90507 12.6812 6.90507 12.2907 7.29575L8.9978 10.5899L7.70491 9.29653C7.31439 8.90586 6.68122 8.90586 6.2907 9.29653C5.90017 9.68721 5.90017 10.3206 6.2907 10.7113L8.2907 12.7121C8.68122 13.1028 9.31439 13.1028 9.70491 12.7121L13.7049 8.71052Z" fill="#5C5F62" />
                        </svg>

                    </div>
                    <h4>Trust Badge</h4>
                    {trustBadgeSettings.trust_badge.show_section ? (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("trust_badge")}>
                            <Icon source={ViewMinor} color="base" />
                        </div>
                    ) : (
                        <div className='caart_full_cart_sidebar_heading_icon_view_menu_icon_right' onClick={() => handleIconShowHide("trust_badge")}>
                            <Icon source={HideMinor} color="base" />
                        </div>
                    )}
                </div>
                <ul className='caart_full_cart_sidebar_setting_ul'>
                    <li>
                        <DropZone
                            label="Badge Upload"
                            allowMultiple={false}
                            onDrop={handleDropZoneDrop}
                            accept={validImageTypes}
                            type="image"
                            errorOverlayText="File type must be .jpeg/png"
                            variableHeight
                        >
                            {uploadedFile}
                            {fileUpload}
                        </DropZone>
                        <h4><br />Position</h4>
                        <Select
                            label=""
                            options={options}
                            name='position'
                            onChange={handleSelectChange}
                            value={trustBadgeSettings.trust_badge.position}
                        />
                    </li>
                </ul>
            </div>
        </li>
    )
}