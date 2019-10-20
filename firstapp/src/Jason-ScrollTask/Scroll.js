import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community';
import "ag-grid-enterprise";
import './Srcoll.css'

//import { forInStatement } from '@babel/types';
//import { fbind } from 'q';

var json = require('./scroll.json');

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [

        {
          headerName: "tokiId",
          field: "tokiId",
          width: 90,
          pinned: 'left',
        },
        {
          headerName: "beneficiaryPayId",
          field: "beneficiaryPayId",
          width: 90,
          pinned: 'left',
        },
        {
          headerName: "parentBenePayId",
          field: "parentBenePayId",
          width: 90,
          pinned: 'left',
        },
        {
          headerName: "tokenAddress",
          field: "tokenAddress",
          width: 90,
          pinned: 'left',
        },
        {
          headerName: "beneficiary",
          children: [
            {
              headerName: "topId",
              field: "beneficiary.topId",
            },
            {
              headerName: "businessId",
              field: "beneficiary.businessId",
            },
            {
              headerName: "businessName",
              field: "beneficiary.businessName",
            }]
        },
        {
          headerName: "payAmount",
          children: [
            {
              headerName: "ccy",
              field: "payAmount.ccy",
            },
            {
              headerName: "value",
              field: "payAmount.value",
            }
          ]
        },
        {
          headerName: "payStatus",
          field: "payStatus",
          width: 90,
          pinned: 'left',
        },
      ]
    }
  }




  render() {
    return (

      <div
        className="ag-theme-balham"
        style={{
          height: '300px',
          width: '1000px',
          color: 'green'

        }} >
      
        <AgGridReact
          columnDefs={this.state.columnDefs}
          defaultColDef={this.state.defaultColDef}
          groupDefaultExpanded={this.state.groupDefaultExpanded}
          onGridReady={this.onGridReady}
          debug={true}

          rowData={json.payBeneficiaries}
        />
  
      </div >

    );
  }
}
