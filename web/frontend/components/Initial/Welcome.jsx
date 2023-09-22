import { Button } from "@shopify/polaris";
import React from 'react'
import { cone, welcome } from '../../assets';

export default function Welcome({ setProgressBarIndicator }) {
    return (
        <div>
            <div className="caart_initial_img">
                <img src={welcome} />
            </div>
            <h1>Let's grow your sales <img src={cone} /></h1>
            <p>It takes less than 5 minutes to setup and you'll be ready to see improved conversion rate and higher AOV.</p>
            <div className="caart_initial_btn">
                <Button primary onClick={() => setProgressBarIndicator(2)}>Continue</Button>
            </div>
        </div>
    )
}
