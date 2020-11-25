import React, { useState } from 'react';
import './App.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping'

const App = () => {

    const [rowData, setRowData] = useState([
        {FormName:"upsc", Name:"Sachin", Age:"36",  Status:"Inprogress"},
        {FormName:"upsc", Name:"Dhoni", Age:"34",  Status:"submitted"},
        {FormName:"upsc", Name:"Ashwin", Age:"34",  Status:"submitted"},
        {FormName:"jee", Name:"Virat",  Age:"28", Status:"Inprogress"},
        {FormName:"upsc", Name:"Yuvi", Age:"30", Status:"Inprogress"}

    ]);


    const myCustomAggFunc = (values) => {
        let arr = new Array();
        values.forEach((value) => arr.push(value));
        return [...arr.values()].join(',');
    }

    const columnDefs = [

        {
            field: 'FormName',
            rowGroup: true,
            hide: false,
            aggFunc: myCustomAggFunc,
            cellRenderer: 'agGroupCellRenderer',
        },
        {
            field: 'Name',
            aggFunc: myCustomAggFunc

        },
        {
            field: 'Age',
            aggFunc: myCustomAggFunc
        },
        {
            field: 'Status',
        }
    ]
    const defaultColDefs = {
        flex: 1
    }

    return (
        <div className="ag-theme-alpine" style={{ height: 1400, width: 1600 }}>
            <AgGridReact
                modules={[RowGroupingModule]}
                columnDefs={columnDefs}
                rowData={rowData}
                suppressDragLeaveHidesColumns={true}
                groupRemoveSingleChildren={true}
                defaultColDef={defaultColDefs}
                animateRows={true}
                groupSuppressAutoColumn={true}
            >
            </AgGridReact>
        </div>
    );
};

export default App;
