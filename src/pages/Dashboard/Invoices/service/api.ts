import axios from '../../../../axios';

export type InvoiceItem = {
  quantity: number;
  unit_price: string;
  _id: string;
  item: string;
};
export type Invoice = {
  discount_format: string;
  isDeleted: boolean;
  _id: string;
  title: string;
  items: InvoiceItem[];
  project: string;
  discount: string;
  total: number;
  customer: string;
  due_date: string;
  date: string;
  user: string;
  status: string;
};
export interface InvoiceResponse {
  data: {
    invoices: Invoice[];
  };
}

export const getInvoices = async (): Promise<InvoiceResponse> => axios.get<null, InvoiceResponse>('/invoice/all');
