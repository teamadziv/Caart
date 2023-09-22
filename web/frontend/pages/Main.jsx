import React from 'react'
import { Tabs, ButtonGroup, Button, Modal, Select, DropZone, Toast, Frame, Icon } from '@shopify/polaris';
import {
    AttachmentMajor
} from '@shopify/polaris-icons';
import { useState, useCallback } from 'react';

import { Dashboard, IndexFullCart, IndexDrawerCart, IndexStickyCart, Sales, Pricing, Settings } from '../components/Main'

export default function Main() {

    const [selected, setSelected] = useState(0);
    const handleTabChange = (selectedTabIndex) => setSelected(selectedTabIndex);
    const tabs = [
        {
            id: 'dashboard',
            content: 'Dashboard',
            panelID: 'caart-dashboard',
        },
        {
            id: 'sales-orders',
            content: 'Sales/Orders',
            panelID: 'caart-sales-orders',
        },
        {
            id: 'cart-editor',
            content: 'Cart Editor',
            panelID: 'caart-cart-editor',
        },
        {
            id: 'pricing-plan',
            content: 'Pricing Plan',
            panelID: 'pricing-plan',
        },
        {
            id: 'settings',
            content: 'Settings',
            panelID: 'caart-settings',
        },
    ];


    const [missingBtn, setMissingBtn] = useState(false);
    const handleMissingBtn = useCallback(() => setMissingBtn(!missingBtn), [missingBtn]);


    const [selected2, setSelected2] = useState('full_cart');
    const handleSelectChange = useCallback(
        (value) => setSelected2(value),
        [],
    );
    const options = [
        { label: 'Drawer Cart', value: 'drawer_cart' },
        { label: 'Sticky Cart', value: 'sticky_cart' },
        { label: 'Full Cart', value: 'full_cart' }
    ];



    // missing feature popup feilds etc
    const [activeToastPopup, setActiveToastPopup] = useState(false);
    const toggleActiveToastPopup = useCallback(() => setActiveToastPopup((activeToastPopup) => !activeToastPopup), []);
    const toastMarkup = activeToastPopup ? (
        <Toast content="Your request submit successfully" onDismiss={toggleActiveToastPopup} duration={1500} />
    ) : null;

    const [missingPopup, setMissingPopup] = useState({
        option: '',
        title: '',
        description: '',
        img: ''
    });
    const handleSelectMissingPopUp = useCallback(
        (value) => {
            setMissingPopup({ ...missingPopup, option: value })
        },
        [],
    );

    const handleMissingPopUpChange = (e) => {
        setMissingPopup({ ...missingPopup, [e.target.name]: e.target.value })
    }

    const optionsMissingPopup = [
        { label: 'Select an option', value: '' },
        { label: 'Request a feature', value: 'feature' },
        { label: 'Report a bug', value: 'bug' },
    ];


    // image upload dropzone
    const [openFileDialog, setOpenFileDialog] = useState(false);
    const toggleOpenFileDialog = useCallback(
        () => setOpenFileDialog((openFileDialog) => !openFileDialog),
        [],
    );
    const [file, setFile] = useState();
    const handleDropZoneDrop = (_dropFiles, acceptedFiles, _rejectedFiles) => {
        setFile(acceptedFiles[0])
        setMissingPopup({ ...missingPopup, img: window.URL.createObjectURL(acceptedFiles[0]) })
    }

    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    const fileUpload = !file && <DropZone.FileUpload />;

    const handleFileOnClickBtn = () => {
        setOpenFileDialog(true)
        console.log('clicked')
    }

    const handlePopupData = () => {
        setMissingBtn(!missingBtn)
        toggleActiveToastPopup()
        setMissingPopup({
            option: '',
            title: '',
            description: '',
            img: ''
        })
    }

    return (
        <>

            <div className='caart_main_nav'>
                <div className='caart_main_nav_tabs'>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                        {selected == 0 ? <Dashboard /> :
                            selected == 1 ? <Sales />
                                :
                                selected == 2 ?
                                    selected2 == 'full_cart' ? <IndexFullCart options={options} selected={selected2} handleSelectChange={handleSelectChange} /> :
                                        selected2 == 'drawer_cart' ? <IndexDrawerCart options={options} selected={selected2} handleSelectChange={handleSelectChange} /> :
                                            selected2 == 'sticky_cart' ? <IndexStickyCart options={options} selected={selected2} handleSelectChange={handleSelectChange} /> : ''
                                    :

                                    selected == 3 ? <Pricing />
                                        :
                                        <Settings />}
                    </Tabs>
                </div>
                <div className='caart_main_nav_buttons'>
                    <ButtonGroup>
                        <Button onClick={handleMissingBtn}>Missing a feature?</Button>
                        <Button>Book a demo?</Button>
                        <Button primary>Help & Support</Button>
                    </ButtonGroup>
                </div>
            </div>
            <div className='caart_missing_popup' style={{ height: '500px' }}>
                <Modal
                    open={missingBtn}
                    onClose={handleMissingBtn}
                    title="Request a feature or report a bug"
                    primaryAction={{
                        content: 'Add Requests',
                        onAction: handlePopupData
                    }}
                >
                    <Modal.Section>
                        <div className='caart_missing_popup_select_p'>
                            <span>I would like to</span>
                            <Select

                                options={optionsMissingPopup}
                                onChange={handleSelectMissingPopUp}
                                value={missingPopup.option}
                            />
                        </div>
                        <div className='caart_missing_pop_input_div'>
                            <label>Title</label>
                            <input
                                value={missingPopup.title}
                                onChange={(e) => handleMissingPopUpChange(e)}
                                name='title'
                            />
                        </div>
                        <div className='caart_missing_pop_input_div textarea'>
                            <label>Description</label>
                            <textarea onChange={(e) => handleMissingPopUpChange(e)} name='description' value={missingPopup.description}>

                            </textarea>
                        </div>
                        <div className='caart_missing_pop_file' style={{ display: 'none' }}>
                            <DropZone
                                accept={validImageTypes}
                                allowMultiple={false}
                                openFileDialog={openFileDialog}
                                onDrop={handleDropZoneDrop}
                                onFileDialogClose={toggleOpenFileDialog}
                            >
                                {fileUpload}
                            </DropZone>
                        </div>
                        <div className='caart_missing_pop_file_btn'>
                            <Button onClick={handleFileOnClickBtn}>
                                <Icon
                                    source={AttachmentMajor}
                                    color="base"
                                />
                                <label>Upload</label>
                            </Button>
                            <p>Select a file from your computer</p>
                        </div>
                    </Modal.Section>
                </Modal>
            </div>
            <div style={{ height: '50px' }}>
                <Frame>
                    {toastMarkup}
                </Frame>
            </div>
        </>

    )
}
