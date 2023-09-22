import React from 'react'
import { Button } from '@shopify/polaris';
import { Card, Tabs } from "@shopify/polaris"
import { useState, useEffect } from 'react'

export default function Pricing() {
    const [plan, setPlan] = useState(false)
    const [markup, setmarkup] = useState([])
    const [selectedPlan, setselectedPlan] = useState()

    const dataPlan = {
        monthly_plan: {
            starter_plan: '$0',
            growth_plan: '$14.99',
            premimum_plan: '$299',
            lengthPlan: 15,
            0: ['No of Orders', '10 orders', '15 orders', '20 orders'],
            1: ['All free features', false, true, true],
            2: ['Cart Editor', true, true, true],
            3: ['Upselling module', true, true, true],
            4: ['Rewards/progress bar module', true, true, true],
            5: ['Add Ons Module', false, true, true],
            6: ['Discount Code Box', true, true, true],
            7: ['Order Notes', true, true, true],
            8: ['Announcement Module', true, true, true],
            9: ['Checkout Button', true, true, true],
            10: ['Custom HTML and CSS', true, true, true],
            11: ['Trust Badges', true, true, true],
            12: ['Sticky Cart', true, true, true],
            13: ['24/7 customer support', false, true, true],
            14: ['Free Onboarding Call', false, true, true]
        },
        yearly_plan: {
            starter_plan: '$199',
            growth_plan: '$299',
            premimum_plan: '$399',
            lengthPlan: 15,
            0: ['No of Orders', '1000 orders', '1500 orders', '2000 orders'],
            1: ['All free features', false, true, true],
            2: ['Cart Editor', true, true, true],
            3: ['Upselling module', true, true, true],
            4: ['Rewards/progress bar module', true, true, true],
            5: ['Add Ons Module', false, true, true],
            6: ['Discount Code Box', true, true, true],
            7: ['Order Notes', true, true, true],
            8: ['Announcement Module', true, true, true],
            9: ['Checkout Button', true, true, true],
            10: ['Custom HTML and CSS', true, true, true],
            11: ['Trust Badges', true, true, true],
            12: ['Sticky Cart', true, true, true],
            13: ['24/7 customer support', true, true, true],
            14: ['Free Onboarding Call', true, true, true]
        }
    }

    const [selected, setSelected] = useState(0);
    const handleTabChange = (selectedTabIndex) => setSelected(selectedTabIndex);

    const tabs = [
        {
            id: 'starter-plan',
            content: 'Starter',
            panelID: 'starter-plan-1'
        },
        {
            id: 'growth-plan',
            content: 'Growth',
            panelID: 'growth-plan-1'
        },
        {
            id: 'premium-plan',
            content: 'Premium',
            panelID: 'premium-plan-1'
        },
    ];

    const handleMonthlyMarkUp = (arr, indx) => {
        let lineMarkUp = <>
            <div className='caart_pricing_page_table_index'>
                <p>{arr.monthly_plan[indx][0]}</p>
            </div>
            <div className={selectedPlan == 'starter_monthly' ? 'caart_pricing_page_table_single_check starter_monthly' : 'caart_pricing_page_table_single_check'}>
                {arr.monthly_plan[indx][1] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.monthly_plan[indx][1] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.monthly_plan[indx][1]}</p>}
            </div>
            <div className={selectedPlan == 'growth_monthly' ? 'caart_pricing_page_table_single_check growth_monthly' : 'caart_pricing_page_table_single_check'}>
                {arr.monthly_plan[indx][2] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.monthly_plan[indx][2] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.monthly_plan[indx][2]}</p>}
            </div>
            <div className={selectedPlan == 'premimun_monthly' ? 'caart_pricing_page_table_single_check premimun_monthly' : 'caart_pricing_page_table_single_check'}>
                {arr.monthly_plan[indx][3] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.monthly_plan[indx][3] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.monthly_plan[indx][3]}</p>}
            </div>
        </>

        return lineMarkUp
    }

    const handleYearlyMarkUp = (arr, indx) => {
        let lineMarkUp = <>
            <div className='caart_pricing_page_table_index'>
                <p>{arr.yearly_plan[indx][0]}</p>
            </div>
            <div className={selectedPlan == 'starter_yearly' ? 'caart_pricing_page_table_single_check starter_yearly' : 'caart_pricing_page_table_single_check'}>
                {arr.yearly_plan[indx][1] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.yearly_plan[indx][1] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.yearly_plan[indx][1]}</p>}
            </div>
            <div className={selectedPlan == 'growth_yearly' ? 'caart_pricing_page_table_single_check growth_yearly' : 'caart_pricing_page_table_single_check'}>
                {arr.yearly_plan[indx][2] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.yearly_plan[indx][2] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.yearly_plan[indx][2]}</p>}
            </div>
            <div className={selectedPlan == 'premimun_yearly' ? 'caart_pricing_page_table_single_check premimun_yearly' : 'caart_pricing_page_table_single_check'}>
                {arr.yearly_plan[indx][3] === true ? <>
                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                    </svg>
                </> : arr.yearly_plan[indx][3] === false ? <>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                    </svg>
                </> : <p>{arr.yearly_plan[indx][3]}</p>}
            </div>
        </>

        return lineMarkUp
    }


    const startMarkUpMobile = (plan, subplan) => {
        let mblMarkup = []
        let lineMarkup = <></>
        if (plan) {
            for (let i = 0; i < dataPlan.yearly_plan.lengthPlan; i++) {
                if (subplan == 'starter_plan') {
                    let last = dataPlan.monthly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.monthly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.monthly_plan[i][1] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.monthly_plan[i][1] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.monthly_plan[i][1]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
                else if (subplan == 'growth_plan') {
                    let last = dataPlan.yearly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.yearly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.yearly_plan[i][2] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.yearly_plan[i][2] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.yearly_plan[i][2]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
                else if (subplan == 'premimum_plan') {
                    let last = dataPlan.yearly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.yearly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.yearly_plan[i][3] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.yearly_plan[i][3] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.yearly_plan[i][3]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
            }
        } else {
            for (let i = 0; i < dataPlan.monthly_plan.lengthPlan; i++) {
                if (subplan == 'starter_plan') {
                    let last = dataPlan.monthly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.monthly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.monthly_plan[i][1] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.monthly_plan[i][1] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.monthly_plan[i][1]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
                else if (subplan == 'growth_plan') {
                    let last = dataPlan.monthly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.monthly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.monthly_plan[i][2] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.monthly_plan[i][2] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.monthly_plan[i][2]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
                else if (subplan == 'premimum_plan') {
                    let last = dataPlan.monthly_plan.lengthPlan - 1 == i ? 'caart_pricing_table_single_item last' : 'caart_pricing_table_single_item'
                    lineMarkup = <>

                        <div className={last}>
                            <div className="heading">
                                {dataPlan.monthly_plan[i][0]}
                            </div>
                            <div className="content">
                                {dataPlan.monthly_plan[i][3] === true ?
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.7517 11.6479L1.1517 8.0479C0.682505 7.5787 0.682505 6.8203 1.1517 6.3511C1.6209 5.8819 2.3793 5.8819 2.8485 6.3511L5.5317 9.0343L13.0893 0.419504C13.5213 -0.0844956 14.2785 -0.142096 14.7801 0.288704C15.2841 0.720704 15.3429 1.4767 14.9109 1.9795L6.51091 11.5795C6.2937 11.8339 5.9793 11.9851 5.6457 11.9983C5.2821 11.9995 4.9761 11.8735 4.7517 11.6479Z" fill="#008060" />
                                    </svg>
                                    : dataPlan.monthly_plan[i][3] === false ?
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.41385 7.99985L15.7069 1.70685C15.8944 1.51934 15.9997 1.26503 15.9997 0.999849C15.9997 0.734673 15.8944 0.480357 15.7069 0.292849C15.5193 0.105341 15.265 0 14.9998 0C14.7347 0 14.4804 0.105341 14.2928 0.292849L7.99985 6.58585L1.70685 0.292849C1.614 0.200005 1.50378 0.126356 1.38247 0.0761092C1.26117 0.0258621 1.13115 0 0.999849 0C0.868547 0 0.738531 0.0258621 0.617224 0.0761092C0.495916 0.126356 0.385694 0.200005 0.292849 0.292849C0.105341 0.480357 0 0.734673 0 0.999849C0 1.26503 0.105341 1.51934 0.292849 1.70685L6.58585 7.99985L0.292849 14.2928C0.105341 14.4804 0 14.7347 0 14.9998C0 15.265 0.105341 15.5193 0.292849 15.7069C0.480357 15.8944 0.734673 15.9997 0.999849 15.9997C1.26503 15.9997 1.51934 15.8944 1.70685 15.7069L7.99985 9.41385L14.2928 15.7069C14.3855 15.8 14.4957 15.874 14.617 15.9244C14.7383 15.9749 14.8684 16.0009 14.9998 16.0009C15.1313 16.0009 15.2614 15.9749 15.3827 15.9244C15.504 15.874 15.6142 15.8 15.7069 15.7069C15.7998 15.6141 15.8735 15.5039 15.9238 15.3825C15.9742 15.2612 16 15.1312 16 14.9998C16 14.8685 15.9742 14.7385 15.9238 14.6172C15.8735 14.4958 15.7998 14.3856 15.7069 14.2928L9.41385 7.99985Z" fill="#D72C0D" />
                                        </svg>
                                        : <p>{dataPlan.monthly_plan[i][3]}</p>}
                            </div>
                        </div>
                    </>;

                    mblMarkup.push(lineMarkup)
                }
            }
        }


        return mblMarkup
    }

    useEffect(() => {
        if (plan === false) {
            for (let i = 0; i < dataPlan.monthly_plan.lengthPlan; i++) {
                setmarkup((prev) => {
                    return [...prev, handleMonthlyMarkUp(dataPlan, i)]
                })
            }
        } else {
            for (let i = 0; i < dataPlan.yearly_plan.lengthPlan; i++) {
                setmarkup((prev) => {
                    return [...prev, handleYearlyMarkUp(dataPlan, i)]
                })
            }
        }

        return () => {
            setmarkup([])
        }
    }, [plan, selectedPlan])




    return (
        <div className="caart_pricing_page">
            <Card>
                <div className='caart_pricing_page_top_content'>
                    <h2 className='caart_pricing_page_heading'>Choose the right plan for you</h2>
                    <p className='caart_pricing_page_suheading'>Choose a plan and see how App can help your business grow</p>

                    <div className='caart_pricing_page_plans_toggle'>
                        <label>Pay Monthly</label>
                        <div className='toggle-switch'>
                            <input type="checkbox" name="plan" id="plan" value={plan} onChange={() => setPlan(!plan)} className={plan ? 'toggle-switch-checkbox checked ' : 'toggle-switch-checkbox'} />
                            <label className="toggle-switch-label" htmlFor="plan">
                                <span className="toggle-switch-inner"></span>
                                <span className="toggle-switch-switch"></span>
                            </label>
                        </div>
                        <label>Pay Yearly</label>
                    </div>

                </div>

                <div className='caart_pricing_tables_mbl'>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
                        {selected == 0 ? (
                            <div className='caart_pricing_table_mbl'>
                                <div className='caart_pricing_table_mbl_head'>
                                    <h2>Starter Plan</h2>
                                    <h3>{plan ? <>{dataPlan.yearly_plan.starter_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.starter_plan}<span> / monthly</span> </>}</h3>
                                </div>
                                {startMarkUpMobile(plan, "starter_plan")}
                                <div className='caart_pricing_btns'>
                                    <Button fullWidth primary onClick={() => {
                                        if (plan) {
                                            setselectedPlan('starter_yearly')
                                        } else {
                                            setselectedPlan('starter_monthly')
                                        }
                                    }}>14 days free trial</Button>
                                </div>
                            </div>
                        ) : selected == 1 ? (
                            <div className='caart_pricing_table_mbl'>
                                <div className='caart_pricing_table_mbl_head'>
                                    <h2>Growth Plan</h2>
                                    <h3>{plan ? <>{dataPlan.yearly_plan.growth_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.growth_plan}<span> / monthly</span> </>}</h3>
                                </div>
                                {startMarkUpMobile(plan, "growth_plan")}
                                <div className='caart_pricing_btns'>
                                    <Button fullWidth primary onClick={() => {
                                        if (plan) {
                                            setselectedPlan('growth_yearly')
                                        } else {
                                            setselectedPlan('growth_monthly')
                                        }
                                    }}>14 days free trial</Button>
                                </div>
                            </div>
                        ) : (
                            <div className='caart_pricing_table_mbl'>
                                <div className='caart_pricing_table_mbl_head'>
                                    <h2>Premimum Plan</h2>
                                    <h3>{plan ? <>{dataPlan.yearly_plan.premimum_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.premimum_plan}<span> / monthly</span> </>}</h3>
                                </div>
                                {startMarkUpMobile(plan, "premimum_plan")}
                                <div className='caart_pricing_btns'>
                                    <Button fullWidth primary onClick={() => {
                                        if (plan) {
                                            setselectedPlan('premimun_yearly')
                                        } else {
                                            setselectedPlan('premimun_monthly')
                                        }
                                    }}>14 days free trial</Button>
                                </div>
                            </div>
                        )}
                    </Tabs>
                </div>

                <div className='caart_pricing_page_table desktop'>
                    <div>
                    </div>
                    <div className='caart_pricing_page_table_single'>
                        <h3>Starter Plan</h3>
                        <h2>{plan ? <>{dataPlan.yearly_plan.starter_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.starter_plan}<span> / monthly</span> </>}</h2>
                    </div>
                    <div className='caart_pricing_page_table_single'>
                        <h3>Growth Plan</h3>
                        <h2>{plan ? <>{dataPlan.yearly_plan.growth_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.growth_plan}<span> / monthly</span> </>}</h2>
                    </div>
                    <div className='caart_pricing_page_table_single'>
                        <h3>Premimum Plan</h3>
                        <h2>{plan ? <>{dataPlan.yearly_plan.premimum_plan}<span> / yearly</span> </> : <>{dataPlan.monthly_plan.premimum_plan}<span> / monthly</span> </>}</h2>
                    </div>

                    {markup}

                    <div className='caart_pricing_btns'></div>
                    <div className='caart_pricing_btns'>
                        <Button fullWidth primary onClick={() => {
                            if (plan) {
                                setselectedPlan('starter_yearly')
                            } else {
                                setselectedPlan('starter_monthly')
                            }
                        }}>14 days free trial</Button>
                    </div>
                    <div className='caart_pricing_btns'>
                        <Button fullWidth primary onClick={() => {
                            if (plan) {
                                setselectedPlan('growth_yearly')
                            } else {
                                setselectedPlan('growth_monthly')
                            }
                        }}>14 days free trial</Button>
                    </div>
                    <div className='caart_pricing_btns'>
                        <Button fullWidth primary onClick={() => {
                            if (plan) {
                                setselectedPlan('premimun_yearly')
                            } else {
                                setselectedPlan('premimun_monthly')
                            }
                        }}>14 days free trial</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
