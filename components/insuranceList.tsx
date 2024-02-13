import { Loupe } from '@mui/icons-material';
import {
  Stack,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

type Insurance = {
  insuranceName: string;
  constructor: string;
  insuranceFee: number;
  expirationDate: string;
  insuranceNumber: string;
};

const cardWidth = 400;

export function InsuranceList({ insurances }: { insurances: Insurance[] }) {
  return (
    <>
      {insurances.map((insurance, index) => (
        <Card key={index} sx={{ width: cardWidth }}>
          <CardContent>
            <Typography variant="h4">{insurance.insuranceName}</Typography>
            <Typography>契約者: {insurance.constructor}</Typography>
            <Typography>保険料: {insurance.insuranceFee}円</Typography>
            <Typography>契約満了日: {insurance.expirationDate}</Typography>
            <Typography>保険証券番号: {insurance.insuranceNumber}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" startIcon={<Loupe />}>
              詳細
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
