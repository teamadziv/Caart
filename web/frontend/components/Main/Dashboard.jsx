import React from 'react'
import { ButtonGroup, Button, Select, DataTable } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { i1, i2, i3, i4, i5, i6, di1, di2 } from '../../assets';

export default function Dashboard() {
    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback(
        (value) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Previous Period', value: 'PreviousPeriod' },
        { label: 'Today', value: 'today' }
    ];


    const DTrows = [
        ['Cart Header', 'Full Cart', 10, 14, '$122.00'],
        ['Announcements', 'Drawer Cart', 20, 12, '$112.00'],
        ['Progress bar', 'Full Cart', 50, 15, '$222.00'],
        ['Cart Items', 'Full Cart', 9, 9, '$422.00'],
        ['Order Notes', 'Drawer Cart', 7, 22, '$122.00']
    ];

    return (
        <div className='caart_main_dashboard'>
            <div className='caart_main_dashboard_nav'>
                <div className='caart_main_dashboard_nav_heading'>Dashboard</div>
                <div className='caart_main_dashboard_nav_buttons'>
                    <ButtonGroup segmented>
                        <Button primary>Today</Button>
                        <Button>Last 7 days</Button>
                        <Button>This Month</Button>
                    </ButtonGroup>
                    <Select
                        label=""
                        options={options}
                        onChange={handleSelectChange}
                        value={selected}
                    />
                </div>
            </div>
            <div className='caart_dashboard_cards'>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            ROI
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            140.47%
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i1} />
                    </div>
                </div>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            Revenue
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            $43,567
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i2} />
                    </div>
                </div>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            Caart AOV
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            $40.08
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i3} />
                    </div>
                </div>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            Total Orders
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            454
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i4} />
                    </div>
                </div>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            Caart Impression
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            334
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i5} />
                    </div>
                </div>
                <div className='caart_dashboard_card_single'>
                    <div className='caart_dashboard_card_heading_stat'>
                        <div className='caart_dashboard_card_heading'>
                            Conversion Rate
                        </div>
                        <div className='caart_dashboard_card_stat'>
                            60.9%
                        </div>
                    </div>
                    <div className='caart_dashboard_card_icon'>
                        <img src={i6} />
                    </div>
                </div>
            </div>

            <div className='caart_dashboard_dt'>
                <DataTable
                    columnContentTypes={[
                        'text',
                        'text',
                        'text',
                        'text',
                        'text',
                    ]}
                    headings={[
                        'Widget',
                        'Page Type',
                        'Impressions',
                        'Clicks',
                        'Sale',
                    ]}
                    rows={DTrows}
                />
            </div>

            <div className='caart_dashboard_w_imgs'>
                <div className='caart_dashboard_w_img'>
                    <img src={di1} />
                    <h3>Embed your Store Theme</h3>
                    <p>Integrate your store theme with the Caart app: Create a seamless shopping experience for your customers.</p>
                    <Button primary>Open Cart Editor</Button>
                </div>
                <div className='caart_dashboard_w_img'>
                    <img src={di2} />
                    <h3>Boost AOV with Upsells</h3>
                    <p>Customize and add upsells to your carts and checkout to increase Average order value and conversion rates.</p>
                    <Button primary>Add Upsells</Button>
                </div>
            </div>
        </div>
    )
}
