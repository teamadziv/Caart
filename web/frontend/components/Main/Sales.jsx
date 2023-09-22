import {
  Card,
  Filters,
  IndexTable,
  useIndexResourceState,
  Badge,
  Select,
  Button,
} from "@shopify/polaris"

import { useState, useCallback, useEffect } from "react"

export default function Sales() {
  const data = [
    {
      id: '1020',
      order: '#1020',
      date: 'Jul 20 at 4:34pm',
      customer: 'Aydon Stanton',
      items: 3,
      total: '$969.44',
      status: 'Awaiting Delivery',
      badgeType: '',
      action: '#'
    },
    {
      id: '1019',
      order: '#1019',
      date: 'Jul 20 at 3:46pm',
      customer: 'Cuben Westerfelt',
      items: 2,
      total: '$701.19',
      status: 'Order Delivered',
      badgeType: 'success',
      action: '#'
    },
    {
      id: '1018',
      order: '#1018',
      date: 'Jul 20 at 3.44pm',
      customer: 'Zeo Carder',
      items: 5,
      total: '$798.24',
      status: 'Request Sent',
      badgeType: 'info',
      action: '#'
    },
    {
      id: '1015',
      order: '#1015',
      date: 'Jul 20 at 3.44pm',
      customer: 'John Doe',
      items: 1,
      total: '$14.24',
      status: 'Review Recieved',
      badgeType: 'attention',
      action: '#'
    },
  ];
  const [demoData, setDemoData] = useState(data)

  const filters = []
  const resourceName = {
    singular: "order",
    plural: "orders",
  }
  const promotedBulkActions = [
    {
      content: "Edit orders",
      onAction: () => console.log("Todo: implement bulk edit"),
    },
  ]
  const bulkActions = [
    {
      content: "Add tags",
      onAction: () => console.log("Todo: implement bulk add tags"),
    },
    {
      content: "Remove tags",
      onAction: () => console.log("Todo: implement bulk remove tags"),
    },
    {
      content: "Delete order",
      onAction: () => console.log("Todo: implement bulk delete"),
    },
  ]
  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(demoData)






  const [inputValue, setInputValue] = useState('')




  const handleClearAll = useCallback(() => {
    setInputValue("")
  }, [])


  const [sortValue, setSortValue] = useState("alp-asc")
  const handleSortChange = useCallback((value) => {
    setSortValue(value)
    if (value == 'alp-dec') {
      const dataAscending = [...demoData].sort((a, b) =>
        a.customer > b.customer ? 1 : -1
      );

      setDemoData(dataAscending)
    } else if (value == 'alp-asc') {
      const dataAscending = [...demoData].sort((a, b) =>
        a.customer > b.customer ? -1 : 1
      );
      setDemoData(dataAscending)
    } else if (value == 'order-dec') {
      const dataAscending = [...demoData].sort((a, b) =>
        b.id - a.id
      );
      setDemoData(dataAscending)
    } else if (value == 'order-asc') {
      const dataAscending = [...demoData].sort((a, b) =>
        a.id - b.id
      );
      setDemoData(dataAscending)
    }
  }, [])

  const sortOptions = [
    { label: "Alphabetically A-Z", value: "alp-dec" },
    { label: "Alphabetically Z-A", value: "alp-asc" },
    { label: "Order Dec", value: "order-dec" },
    { label: "Order Asc", value: "order-asc" },
  ]

  useEffect(() => {
    // sortArrayByTime(data, sortValue)
  }, [sortValue])

  const rowMarkup = demoData.filter(ordr => {
    if (inputValue === "") {
      return ordr;
    } else if (ordr.customer.toLowerCase().includes(inputValue.toLowerCase())) {
      return ordr;
    } else if (ordr.order.toLowerCase().includes(inputValue.toLowerCase())) {
      return ordr;
    }
  }).map(
    (
      { id, order, customer, total, items, date, status, badgeType, action },
      index,
    ) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>{order}</IndexTable.Cell>
        <IndexTable.Cell>{customer}</IndexTable.Cell>
        <IndexTable.Cell>{total}</IndexTable.Cell>
        <IndexTable.Cell>{items}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge progress="partiallyComplete" status={badgeType}>
            {status}
          </Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>{date}</IndexTable.Cell>
        <IndexTable.Cell>
          <a href={action}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.11333 14.6667H9.07333C8.9266 14.6578 8.78691 14.6007 8.67599 14.5043C8.56506 14.4078 8.48913 14.2774 8.46 14.1333L7.33333 8.66667L1.86666 7.54C1.72231 7.51133 1.5915 7.4357 1.49463 7.3249C1.39777 7.2141 1.34028 7.07436 1.33115 6.92747C1.32202 6.78059 1.36175 6.6348 1.44414 6.51286C1.52654 6.39091 1.64697 6.29966 1.78666 6.25333L12.4533 2.7C12.5731 2.65056 12.7046 2.63708 12.8319 2.66119C12.9591 2.68531 13.0766 2.74598 13.17 2.83579C13.2633 2.9256 13.3285 3.04066 13.3575 3.16691C13.3865 3.29315 13.3781 3.42512 13.3333 3.54667L9.78 14.2133C9.73361 14.3513 9.64333 14.4703 9.52295 14.5522C9.40257 14.634 9.25871 14.6743 9.11333 14.6667ZM4.58 6.73333L8.04 7.44C8.16934 7.46495 8.28838 7.52765 8.38212 7.6202C8.47585 7.71275 8.54007 7.83099 8.56666 7.96L9.26666 11.42L11.6133 4.38667L4.58 6.73333Z" fill="#008060" />
            </svg>
          </a>
        </IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  const handleSetInput = (val) => {
    setInputValue(val)
  }

  const sortByLable = <>
    <svg style={{ position: 'relative', top: '3px', left: '-2px' }} width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 2.29289C5.47386 2.11193 5.72386 2 6 2C6.27614 2 6.52614 2.11193 6.70711 2.29289L9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711L7 5.41421V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V5.41421L3.70711 6.70711C3.31658 7.09763 2.68342 7.09763 2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289L5.29289 2.29289ZM13 7C13 6.448 13.448 6 14 6C14.553 6 15 6.448 15 7V14.585L16.293 13.293C16.683 12.902 17.317 12.902 17.707 13.293C17.903 13.488 18 13.744 18 14.001C18 14.256 17.903 14.512 17.707 14.707L14.707 17.707C14.527 17.888 14.277 18 14 18C13.724 18 13.474 17.888 13.293 17.707L10.293 14.707C10.098 14.512 10 14.256 10 14.001C10 13.744 10.098 13.488 10.293 13.293C10.684 12.902 11.316 12.902 11.707 13.293L13 14.585V7Z" fill="#5C5F62" />
    </svg>
    <span>Sort</span>

  </>

  return (
    <div className="caart_sales_page">
      <Card>
        <div className="caart_sales_filters" style={{ padding: "16px", display: "flex" }}>
          <div className="caart_sales_search" style={{ flex: 1 }}>
            <Filters
              queryValue={inputValue}
              filters={filters}
              onQueryChange={handleSetInput}
              onQueryClear={handleClearAll}
              onClearAll={handleClearAll}
              queryPlaceholder="Search"
            />
          </div>
          <div className="caart_sales_refresh" style={{ paddingLeft: "0.5rem" }}>
            <Button
              onClick={() => {
                handleClearAll()
              }}
            >
              <svg style={{ position: 'relative', top: '2px', left: '-5px' }} width="17" height="14" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.5 8L3.78083 12.1408L0 8H2.5C2.5 3.85833 5.85833 0.5 10 0.5C11.9958 0.5 13.8042 1.285 15.1492 2.55667L13.4792 4.41583C12.5783 3.54083 11.3517 3 10 3C7.2425 3 5 5.2425 5 8H7.5ZM16.2192 3.85917L12.5 8H15C15 10.7575 12.7575 13 10 13C8.6475 13 7.42167 12.4583 6.52083 11.5842L4.85083 13.4433C6.195 14.715 8.00417 15.5 10 15.5C14.1417 15.5 17.5 12.1417 17.5 8H20L16.2192 3.85917Z" fill="#5C5F62" />
              </svg>

              Refresh
            </Button>
          </div>
          <div className="caart_sales_sort" style={{ paddingLeft: "0.5rem" }}>
            <Select
              labelInline
              label={sortByLable}
              options={sortOptions}
              value={sortValue}
              onChange={handleSortChange}
            />
          </div>
        </div>

        <IndexTable
          resourceName={resourceName}
          itemCount={demoData.length}
          selectedItemsCount={
            allResourcesSelected ? "All" : selectedResources.length
          }
          selectable={false}
          onSelectionChange={handleSelectionChange}
          bulkActions={bulkActions}
          promotedBulkActions={promotedBulkActions}
          headings={[
            { title: 'Order' },
            { title: 'Customer' },
            { title: 'Total', alignment: 'end' },
            { title: 'Items' },
            { title: 'Status' },
            { title: 'Date' },
            { title: 'Action', alignment: 'end' }
          ]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </div>
  )
}
