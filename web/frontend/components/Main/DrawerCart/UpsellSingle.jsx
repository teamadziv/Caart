import React from 'react'
import { CancelMajor } from '@shopify/polaris-icons';
import { Icon, Button } from '@shopify/polaris';
import { useState, useCallback, useEffect } from 'react';
import { ResourcePicker } from '@shopify/app-bridge-react';

export default function UpsellSingle({ id, handelUpsellsProducts, removeUpsell }) {



    const [disbale, setDisable] = useState(true);
    const [specific, setSpecific] = useState(false);
    const [allProduct, setAllProduct] = useState(false);


    const [showResourcePicker, setShowResourcePicker] = useState(false);
    const [showResourcePicker2, setShowResourcePicker2] = useState(false);

    const [selectedTrigger, setSelectedTrigger] = useState();
    const [selectedUpsellP, setSelectedUpsellP] = useState();

    const toggleResourcePicker = useCallback(
        () => {
            setShowResourcePicker(!showResourcePicker)
            setSpecific(true)
        },
        [showResourcePicker]
    );
    const toggleResourcePicker2 = useCallback(
        () => setShowResourcePicker2(!showResourcePicker),
        [showResourcePicker]
    );

    const handleAllProduct = () => {
        if (!specific) {
            setSpecific(false)
            setAllProduct(true)
            setDisable(false);
            setSelectedTrigger("all_products");
        }
    }

    const handleProductChange = useCallback(({ selection }) => {

        setSelectedTrigger(selection[0].id);
        setDisable(false);
        setShowResourcePicker(false);

    }, []);

    const handleProductChange2 = useCallback(({ selection }) => {

        setSelectedUpsellP(selection[0].id);
        setShowResourcePicker2(false);
        setDisable(true);
        setAllProduct(true)
        setSpecific(true)

    }, []);
    useEffect(() => {
        if (selectedTrigger && selectedUpsellP) {
            handelUpsellsProducts(id, selectedTrigger, selectedUpsellP)
        }
    }, [selectedUpsellP])

    return (
        <div className='caart_full_cart_upsell_container_upsell_single' id={id}>
            <div className='caart_full_cart_upsell_container_trigger_single'>
                <div className='caart_full_cart_upsell_container_set_trigger'>
                    <Button onClick={() => toggleResourcePicker()} primary={specific} disabled={allProduct}>Specific Trigger</Button>
                </div>
                <span>OR</span>
                <div className='caart_full_cart_upsell_container_all_products'>
                    <Button disabled={specific} primary={allProduct} onClick={() => handleAllProduct()}>All Products</Button>
                </div>
            </div>
            <div className='caart_full_cart_upsell_container_upsell_product'>
                <Button onClick={() => toggleResourcePicker2()} disabled={disbale}>Add Upsell Product</Button>
            </div>
            <div className='caart_full_cart_upsell_container_upsell_delete' onClick={() => removeUpsell(id)}>
                <Icon
                    source={CancelMajor}
                    color="base"
                />
            </div>
            {showResourcePicker && (
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    selectMultiple={false}
                    onCancel={toggleResourcePicker}
                    onSelection={handleProductChange}
                    open
                />
            )}
            {showResourcePicker2 && (
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    selectMultiple={false}
                    onCancel={toggleResourcePicker2}
                    onSelection={handleProductChange2}
                    open
                />
            )}
        </div>
    )
}
