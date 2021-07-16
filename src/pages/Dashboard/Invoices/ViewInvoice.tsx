import * as React from 'react';
import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import { Badge } from '../../../components/atoms/Badge';
import Button, { ButtonLink } from '../../../components/atoms/Form/Button';
import Typography from '../../../components/atoms/Typography';
import DropDown, { DropDownItem } from '../../../components/molecules/DropDown';
import BackIcon from '../../../icons/BackIcon';
import CopyIcon from '../../../icons/CopyIcon';
import PDFIcon from '../../../icons/PDFIcon';
import { BoxWithBorder } from '../styles';
import InvoiceDesign from './components/InvoiceDesign';
import { InvoiceItemsContainer, PageContainer, PaymentLink } from './styled';

export interface ViewInvoiceProps {}

export const MobileContainer = styled(Box)`
  @media (max-width: 930px) {
    display: block;
  }
`;

export const DesktopContainer = styled(Box)`
  display: block;
  @media (max-width: 930px) {
    display: none;
  }
`;
const ViewInvoice: React.FC<ViewInvoiceProps> = () => {
  const history = useHistory();
  const theme = React.useContext(ThemeContext);
  const [showOptions, setShowOptions] = React.useState(false);
  return (
    <Box mt="40px" mb="80px">
      <Button
        onClick={() => history.goBack()}
        variant="transparent"
        Icon={<BackIcon style={{ width: '8px', marginTop: '-4px' }} />}
      >
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
              <Button variant="transparent">
                <CopyIcon />
              </Button>
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
              <DropDown
                iconColor={theme.colors.blue[600]}
                width="120px"
                hideIconCircle
                isOpen={showOptions}
                setIsOpen={setShowOptions}
              >
                <Box>
                  <DropDownItem>
                    <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                      Follow up
                    </ButtonLink>
                  </DropDownItem>
                  <DropDownItem>
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Edit
                    </ButtonLink>
                  </DropDownItem>
                  <DropDownItem>
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Duplicate
                    </ButtonLink>
                  </DropDownItem>
                  <DropDownItem>
                    <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                      Delete
                    </ButtonLink>
                  </DropDownItem>
                </Box>
              </DropDown>
            </Box>
          </Flex>
        </Box>
        <InvoiceDesign />
      </PageContainer>
      <MobileContainer mt="24px">
        <Flex justifyContent="space-between" alignItems="center">
          <Flex flex="1">
            <Typography.Heading type="h4" fontWeight="normal" color={theme.colors.black[200]}>
              #
            </Typography.Heading>
            <Typography.Heading type="h4">INV 002</Typography.Heading>
          </Flex>
          <Badge type="yellow">Pending</Badge>
        </Flex>
        <Box mt="24px">
          <Typography.Paragraph fontWeight="bold">Ahmed Adebisi</Typography.Paragraph>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="0px">
            No 4 and 6 Radiators Spring, Lightning Estate, <br />
            Lagos, Nigeria
          </Typography.Paragraph>
        </Box>
        <Flex mt="24px">
          <Box flex="1">
            <Typography.Paragraph fontSize={1} color={theme.colors.black[400]}>
              Created On
            </Typography.Paragraph>
            <Typography.Paragraph fontWeight="medium" mt="0px">
              24 Mar, 2021
            </Typography.Paragraph>
          </Box>
          <Box flex="1">
            <Typography.Paragraph fontSize={1} color={theme.colors.black[400]}>
              Due on
            </Typography.Paragraph>
            <Typography.Paragraph fontWeight="medium" mt="0px">
              24 Mar, 2021
            </Typography.Paragraph>
          </Box>
        </Flex>
        <Box mt="24px">
          <Typography.Paragraph fontWeight="bold">Damola Adegoke</Typography.Paragraph>
          <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="5px">
            No 4 and 6 Radiators Spring, Lightning Estate, <br />
            Lagos, Nigeria
          </Typography.Paragraph>
        </Box>

        <InvoiceItemsContainer>
          <BoxWithBorder borderBottom="1px solid #E6E7EA" pb="16">
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                iPad Pro Sale
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                $800.00
              </Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                × 2
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                $1,600.00
              </Typography.Paragraph>
            </Flex>
          </BoxWithBorder>
          <BoxWithBorder borderBottom="1px solid #E6E7EA" py="16">
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                iPad Pro Sale
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                $800.00
              </Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                × 2
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                $1,600.00
              </Typography.Paragraph>
            </Flex>
          </BoxWithBorder>
          <BoxWithBorder py="16">
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                iPad Pro Sale
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                $800.00
              </Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                × 2
              </Typography.Paragraph>
              <Typography.Paragraph fontSize={1} color={theme.colors.black[600]} mt="10px">
                $1,600.00
              </Typography.Paragraph>
            </Flex>
          </BoxWithBorder>
        </InvoiceItemsContainer>
        <Flex justifyContent="space-between" mt="24px">
          <Box flex="1">
            <Flex justifyContent="space-between" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                Subtotal
              </Typography.Paragraph>
              <Typography.Paragraph fontWeight="bold">$4,800.00</Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" mt="5px" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                20% Discount
              </Typography.Paragraph>
              <Typography.Paragraph fontWeight="bold">$960.00</Typography.Paragraph>
            </Flex>
            <Flex justifyContent="space-between" mt="5px" alignItems="center">
              <Typography.Paragraph fontSize={1} color={theme.colors.black[400]} mt="10px">
                Total
              </Typography.Paragraph>
              <Typography.Heading type="h5">$3,840.00</Typography.Heading>
            </Flex>
          </Box>
        </Flex>
        <Flex marginTop="32px" alignItems="center" mb="50px">
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
            <DropDown
              iconColor={theme.colors.blue[600]}
              width="120px"
              hideIconCircle
              isOpen={showOptions}
              setIsOpen={setShowOptions}
            >
              <Box>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/invoices/view" color={theme.colors.black[400]}>
                    Follow up
                  </ButtonLink>
                </DropDownItem>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                    Edit
                  </ButtonLink>
                </DropDownItem>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                    Duplicate
                  </ButtonLink>
                </DropDownItem>
                <DropDownItem>
                  <ButtonLink variant="transparent" to="/" color={theme.colors.black[400]}>
                    Delete
                  </ButtonLink>
                </DropDownItem>
              </Box>
            </DropDown>
          </Box>
        </Flex>
      </MobileContainer>
    </Box>
  );
};

export default ViewInvoice;
