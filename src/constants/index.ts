import { StatusColor } from '../components/atoms/Badge';

interface StatusMapping {
  [key: string]: { text: string; color: StatusColor };
}

export const statusMapping: StatusMapping = {
  pending: { text: 'Pending', color: 'yellow' },
  sent: { text: 'Sent', color: 'blue' },
  paid: { text: 'Paid', color: 'green' },
  overdue: { text: 'Overdue', color: 'red' },
  successful: { text: 'Successful', color: 'green' },
  failed: { text: 'Failed', color: 'red' },
  UNPAID: { text: 'UNPAID', color: 'yellow' },
};
