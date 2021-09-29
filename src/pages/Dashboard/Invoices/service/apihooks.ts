import { useQuery } from 'react-query';
import { getInvoices, Invoice, InvoiceResponse } from './api';

export const useInvoicesQuery = () =>
  useQuery<InvoiceResponse, Error, Invoice[]>('invoices', getInvoices, {
    select: (response) => response.data.invoices,
  });
