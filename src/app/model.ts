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

export class Invoice {
  id?: number;
  date?: Date;
  code?: string;
  type?: string;
  amount?: number;
  amountSold?: number;
  amountInvoiced?: number;
  rate?: number;
  dolarValue?: number;
}

export class Adjustment {
  Id: Number;
  FromDate?: Date;
  Capacity?: Number;
  Reason?: String;
  Adjustments?: Adjustment[];
}

export class Agreement {
  Id?: Number;
  Code?: string;
  Sold?: number;
  UnitCode?: String;
  Rate?: number;
  Amount?: number;
  startDate?: Date;
  endDate?: Date;
}

export class SiteMesurement {
  Id: Number;
  Type?: string;
  Category?: string;
  ProductName?: string;
  EstimateCapacity?: Number;
  ActualCapacity?: Number;
  Adjustments?: Adjustment[];
  Amount?: Number;
  UnitCode?: String;
  Sold?: Number;
  startDate?: Date;
  endDate?: Date;
  invoices?: Array<Invoice>;
  Agreements?: Array<Agreement>;
}

export interface DialogData {
  p1?: string;
  p2?: string;
  pDate?: Date;
  capacity?: string;
  comment?: string;
}

export interface Category {
  id?: number;
  value?: string;
  viewValue?: string;
}

export class Product {
  Id?: number;
  code?: string;
  description?: string;
  unitCode?: string;
  productTypeCode?: string;
}

export class ProductType {
  Id?: number;
  code?: string;
  description?: string;
  unitCode?: string;
}

export class Dimension {
  Id?: number;
  code?: string;
  description?: string;
}

export class Units {
  Id?: number;
  code?: string;
  description?: string;
}

export class DimensionXUnits {
  Id?: number;
  Dimension?: Dimension;
  Units?: Units;
}
