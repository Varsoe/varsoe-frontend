import { useHistory } from 'react-router';
import { Box, Flex } from 'rebass';
import React from 'react';
import Button from '../../../../components/atoms/Form/Button';
import Typography from '../../../../components/atoms/Typography';
import BackIcon from '../../../../icons/BackIcon';
import { theme } from '../../../../theme/theme';
import { MobileContainer } from '../ViewInvoice';
import { FlexWithBorder } from '../../styles';
import CaretRight from '../../../../icons/CaretRight';

export type Option = { id: number; name: string };
export interface OptionsListProps {
  options: Option[];
  title: string;
  selectOption: (option: Option) => void;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  hideOptionsList: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionsList: React.FC<OptionsListProps> = ({ title, options, selectOption, showModal, hideOptionsList }) => (
  <Box>
    <Flex justifyContent="space-between" alignItems="center">
      <Button onClick={() => hideOptionsList(false)} variant="transparent" Icon={<BackIcon style={{ width: '8px' }} />}>
        <Typography.Paragraph color={theme.colors.black[400]} fontSize={1}>
          Back
        </Typography.Paragraph>
      </Button>
      <MobileContainer>
        <Button variant="transparent" fontSize="14px" onClick={() => showModal(true)}>
          Add {title}
        </Button>
      </MobileContainer>
    </Flex>
    <Typography.Heading type="h6" mt="16px">
      Select {title}
    </Typography.Heading>
    <Box marginTop="48px">
      {options.map(({ id, name }) => (
        <FlexWithBorder
          margin="24px 0 0 0"
          paddingBottom="16px"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #E6E7EA"
          style={{ cursor: 'pointer' }}
          key={id}
          onClick={() => selectOption({ id, name })}
        >
          <Typography.Paragraph color={theme.colors.black[500]}>{name}</Typography.Paragraph>
          <CaretRight />
        </FlexWithBorder>
      ))}
    </Box>
  </Box>
);

export default OptionsList;
