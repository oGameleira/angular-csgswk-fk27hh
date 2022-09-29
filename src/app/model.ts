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
  dateSale?: Date;
  unitsSold?: number;
  amountWoLht?: number;
  whse?: number;
  memo?: string;
}
export class Adjustment {
  Id: Number;
  FromDate?: Date;
  Capacity?: Number;
  Reason?: String;
  Adjustments?: Adjustment[];
}

export class Agreement {
  id?: Number;
  code?: string;
  sold?: number;
  unitCode?: String;
  rate?: number;
  amountSold?: number;
  startDate?: Date;
  endDate?: Date;
}

export class Dimension {
  code?: string;
  description?: string;
}

export class Units {
  code?: string;
  code3?: string;
  code6?: string;
  codet?: string;
  description?: string;
}

export class DimensionXUnits {
  unitCode?: string;
  dimentionCode?: string;
  isoCode?: string;
}

export class ProductType {
  code?: string;
  description?: string;
  unitCode?: string;
}

export class Product {
  code: string;
  description?: string;
  unitCode?: string;
  productTypeCode?: string;
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
  value: string;
  viewValue: string;
}

export class ProductDetail {
  id: Number;
  product?: Product;
  UnitCode?: String;
  yearHarvest?: Date;
  reconciledYN?: String;
  grossYield?: number;
  netYield?: Number;
  totalAcres?: Number;
  invoices?: Array<Invoice>;
}

export class ProductBillPaymentDefinition {
  id?: number;
  product?: Product;
  woShareLHTPercentage?: number;
  wShareLHTPercentage?: number;
  memo?: String;
}

export class AgricultureBillPaymentDefinition {
  id?: Number;
  productBillPaymentDefinition?: ProductBillPaymentDefinition[];
  firstPaymentDate?: Date;
  lastPaymentDate?: Date;
}
