export class Category {
  public CategoryId?: number;
  public CategoryName?: string;
  public Description?: string;
}

export class TaxArea {
  Id: number;
  SiteId?: string;
  CountyDescription?: string;
  CountyCode?: string;
  TaxCodeId?: string;
  TaxCode?: string;
  Percentage?: number;
  startDate?: Date;
  endDate?: Date;
}
/*
11305 - TAX AREA 0050 - UNINCORP SKAGIT COUNTY
11344 - TAX AREA 0086C - BAINBRIDGE ISLAND
10465 - TAX AREA 0090 - UNINCORP JEFFERSON COUNTY
10551 - TAX AREA 0810 - PORT ORCHARD
10280 - TAX AREA 112 - UNINCORP FRANKLIN COUNTY
10114 - TAX AREA 203 UNINCORP CLALLAM COUNTY
11337 - TAX AREA 435F - UNINCORP LEWIS COUNTY
11305 - TAX AREA 600 - EVERSON
10950 - TAX AREA 91 - UNINCORP SKAMANIA COUNTY
10092 - Tax Area 000 - UNINCORP CLALLAM COUNTY
*/

/*
01 - Adams
02 - Asotin
03 - Benton
04 - Chelan
05 - Clallam
06 - Clark
07 - Columbia
08 - Cowlitz
09 - Douglas
10 - Ferry
*/

export class invoice {
  id: number;
  code: string;
  type: string;
  amount: number;
}

export class Adjustment {
  Id: Number;
  FromDate?: Date;
  Capacity?: Number;
  Reason?: String;
  Adjustments?: Adjustment[];
}

export class SiteMesurement {
  Id: Number;
  Type?: string;
  ProductName?: string;
  EstimateCapacity?: Number;
  ActualCapacity?: Number;
  Adjustments?: Adjustment[];
  Amount?: Number;
  UnitCode?: String;
  Sold?: Number;
  startDate?: Date;
  endDate?: Date;
  invoices?: Array<invoice>;
}

export const siteMesurement: SiteMesurement[] = [
  {
    Id: 1,
    Type: 'ACM1',
    ProductName: 'Douglas Fir',
    EstimateCapacity: 100000,
    ActualCapacity: 90000,
    Adjustments: [
      {
        Id: 1,
        FromDate: new Date('2020-12-02'),
        Capacity: 91000,
        Reason: 'Reson1',
      },
      {
        Id: 1,
        FromDate: new Date('2020-10-02'),
        Capacity: 92000,
        Reason: 'Reson2',
      },
      {
        Id: 1,
        FromDate: new Date('2019-01-02'),
        Capacity: 95000,
        Reason: 'Reson3',
      },
    ],
    Amount: 10000,
    UnitCode: 'MBF',
    Sold: 90000,
    startDate: new Date('2020-12-02'),
    endDate: new Date('2021-12-01'),
    invoices: [
      {
        id: 1,
        code: 'INV001',
        type: 'Sold',
        amount: 5000.0,
      },
      {
        id: 1,
        code: 'INV002',
        type: 'Sold',
        amount: 5000.0,
      },
    ],
  },
  {
    Id: 2,
    Type: 'ADMI',
    ProductName: 'Western Red Cedar',
    EstimateCapacity: 22222222,
    ActualCapacity: 100000,
    Amount: 10.929,
    UnitCode: 'MBF',
    Sold: 2.937834,
    startDate: new Date('2020-12-02'),
    endDate: new Date('2021-12-01'),
  },
  {
    Id: 3,
    Type: 'CIT2',
    ProductName: 'Hemlock',
    EstimateCapacity: 333333,
    ActualCapacity: 333333,
    Amount: 33410.929,
    UnitCode: 'MBF',
    Sold: 244.937834,
    startDate: new Date('2020-12-02'),
    endDate: new Date('2021-12-01'),
  },
  {
    Id: 4,
    Type: 'Z466',
    ProductName: 'Spruce',
    EstimateCapacity: 4444444,
    ActualCapacity: 4444444,
    Amount: 742310.929,
    UnitCode: 'MBF',
    Sold: 22.9834,
    startDate: new Date('2020-12-02'),
    endDate: new Date('2021-12-01'),
  },
  {
    Id: 5,
    Type: 'JAM3',
    ProductName: 'Pine',
    EstimateCapacity: 555555,
    ActualCapacity: 555555,
    Amount: 13450.929,
    UnitCode: 'MBF',
    Sold: 27.93834,
    startDate: new Date('2020-12-02'),
    endDate: new Date('2021-12-01'),
  },
];
