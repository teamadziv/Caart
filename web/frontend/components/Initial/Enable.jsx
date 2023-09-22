import { Button } from "@shopify/polaris";
import React from 'react'
import { two_cones } from '../../assets';
import { useNavigate } from "@shopify/app-bridge-react";

export default function Enable({ setProgressBarIndicator }) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="caart_initial_img">
                <img src={two_cones} />
            </div>
            <h1>Setup Complete! Let's start upselling!</h1>
            <p>Click to enable the Caart. Add Upsell offers or go to Cart editor to add upsells to your Carts.</p>
            <div className="caart_initial_btn">
                <Button primary onClick={() => navigate("/main")}>Enable caart</Button>
            </div>
        </div>
    )
}
