import { ColumnDirective, GridComponent, ColumnsDirective, Page, Toolbar, Selection, Edit, Sort, Filter, Inject } from '@syncfusion/ej2-react-grids'
import { Header } from '../components'
import React from 'react'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
    <Header category="Page" title="Customers" />
    <GridComponent 
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      width='auto'
      editSettings={{ allowDeleting: true, allowEditing: true}}
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => ( <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
  )
}

export default Customers