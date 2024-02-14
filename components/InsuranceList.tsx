import { Article, Loupe, SaveAlt } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  CardHeader,
} from '@mui/material';
import LabeledText from './LabeledText';

type Insurance = {
  insuranceName: string;
  constructor: string;
  insuranceFee: number;
  expirationDate: string;
  insuranceNumber: string;
  contractDate: string;
  paymentMethod: string;
};

function convertToHalfWidth(str: string): string {
  return str.replace(/[０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
  });
}

export default function InsuranceList({
  insurances,
}: {
  insurances: Insurance[];
}) {
  return (
    <>
      {insurances.map((insurance, index) => (
        <Card key={index} sx={{ width: '100%' }}>
          <CardHeader title={insurance.insuranceName} />
          <CardContent
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Stack>
              <LabeledText label={'契約者'} text={insurance.constructor} />
              <LabeledText
                label={'保険証券番号'}
                text={insurance.insuranceNumber}
              />
            </Stack>
            <Stack>
              <LabeledText
                label={'保険料'}
                text={`${insurance.insuranceFee}円`}
              />
              <LabeledText label={'支払方法'} text={insurance.paymentMethod} />
            </Stack>
            <Stack>
              <LabeledText label={'契約日'} text={insurance.contractDate} />
              <LabeledText
                label={'契約満了日'}
                text={insurance.expirationDate}
              />
            </Stack>
            <Button startIcon={<Loupe />}>詳細</Button>
          </CardContent>
          <CardActions>
            <Button variant="outlined" startIcon={<Article />}>
              証券
            </Button>
            <Button variant="outlined" startIcon={<SaveAlt />}>
              控除証明書
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
