import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AddEvent,
  CellClickEvent,
  PageChangeEvent,
} from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { MatDialog } from '@angular/material/dialog';

import { SiteMesurement, siteMesurement } from './model';
import { TypeItems } from './data';
import { OverviewDialog } from './dialog';
import { DialogData } from './dialog-data';

@Component({
  selector: 'my-app',
  templateUrl: `app.component.html`,
})
export class AppComponent {
  public data: SiteMesurement[] = siteMesurement;
  public typeItems = TypeItems;
  public productItems: any[] = [
    'Douglas Fir',
    'Western Red Cedar',
    'Hemlock',
    'Spruce',
    'Pine',
  ];

  public innerData: any[] = [
    {
      id: 1,
      code: 'INV001',
      type: 'Sold',
      ammount: 5000.0,
    },
    {
      id: 1,
      code: 'INV002',
      type: 'Sold',
      ammount: 5000.0,
    },
  ];

  public unitCodeItems: any[] = ['MBF', 'TONS'];

  public gridState: State = {
    sort: [],
    skip: 0,
    take: 5,
  };

  pDate: Date;
  capacity: string;
  comment: string;

  constructor(public dialog: MatDialog) {}

  openDialog(item?: any, rowIndex?: number): void {
    const dialogRef = this.dialog.open(OverviewDialog, {
      minWidth: '400px',
      maxWidth: '600px',
      minHeight: '50vh',
      maxHeight: '100vh',
      data: {
        Id: null,
        FromDate: /*new Date()*/ null,
        Capacity: /*item?.ActualCapacity || */ null,
        Reason: null,
        Adjustments: item?.Adjustments || [],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (rowIndex != null) {
          this.data = this.data.map((item, index) => {
            if (index == rowIndex) {
              item = { ...item, ActualCapacity: result.Capacity };
              if (item.Adjustments.length > 0) {
                item.Adjustments.push(result);
              } else {
                item.Adjustments = [result];
              }
            }
            return item;
          });
          //console.log({ data: this.data });
        }
      }
    });
  }
  public addHandler(dataItem: SiteMesurement): void {
    let newEmp: SiteMesurement = {
      Id: null,
      Type: null,
      ProductName: null,
      EstimateCapacity: null,
      ActualCapacity: null,
      Amount: null,
      UnitCode: null,
      Sold: null,
      startDate: null,
      endDate: null,
    };
    this.data.push(newEmp);
    this.data = [].concat(this.data);
  }

  public pageChange({ skip, take }: PageChangeEvent): void {}
}
