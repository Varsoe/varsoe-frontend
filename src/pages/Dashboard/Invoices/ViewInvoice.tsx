import * as React from 'react';
import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import Typography from '../../../components/atoms/Typography';
import DropDown from '../../../components/molecules/DropDown';
import BackIcon from '../../../icons/BackIcon';
import CopyIcon from '../../../icons/CopyIcon';
import PDFIcon from '../../../icons/PDFIcon';
import InvoiceDesign from './components/InvoiceDesign';
import { PaymentLink } from './styled';

export interface ViewInvoiceProps {}

const PageContainer = styled(Box)`
  display: grid;
  grid-template-columns: 400px 1fr;
  margin-top: 40px;
  grid-gap: 30px 70px;
`;
const ViewInvoice: React.FC<ViewInvoiceProps> = () => {
  const history = useHistory();
  const theme = React.useContext(ThemeContext);
  return (
    <Box mt="40px" mb="80px">
      <Button onClick={() => history.goBack()} variant="transparent" Icon={<BackIcon style={{ width: '8px' }} />}>
        <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
          Back
        </Typography.Paragraph>
      </Button>
      <PageContainer>
        <Box>
          <Flex alignItems="center">
            <Typography.Heading type="h5" mr="30px">
              Acme LLC
            </Typography.Heading>
            <Badge type="yellow">Pending</Badge>
          </Flex>
          <Typography.Heading type="h3" mt="20px" mb="24px">
            $4,600.00
          </Typography.Heading>
          <PaymentLink justifyContent="space-between">
            <Typography.Paragraph>pay.varsoe.com/invoice2311_damola...</Typography.Paragraph>
            <Flex>
              <CopyIcon />
            </Flex>
          </PaymentLink>
          <Flex marginTop="32px" alignItems="center">
            <Box flex="1" backgroundColor={theme.colors.white}>
              <Button variant="primary" width="100%" Icon={<PDFIcon />}>
                Download PDF
              </Button>
            </Box>
            <Box flex="1" ml="20px" backgroundColor={theme.colors.white}>
              <Button variant="outline" width="100%">
                Record a payment
              </Button>
            </Box>
            <Box marginLeft="10px">
              <DropDown iconColor={theme.colors.blue[600]} width="120px">
                <Box>
                  <Box py="12px" px="8px">
                    <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                      Follow up
                    </ButtonLink>
                  </Box>
                  <Box py="12px" px="8px">
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Edit
                    </ButtonLink>
                  </Box>
                  <Box py="12px" px="8px">
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Duplicate
                    </ButtonLink>
                  </Box>
                  <Box py="12px" px="8px">
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Delete
                    </ButtonLink>
                  </Box>
                </Box>
              </DropDown>
            </Box>
          </Flex>
        </Box>
        <InvoiceDesign />
      </PageContainer>
    </Box>
  );
};

export default ViewInvoice;
