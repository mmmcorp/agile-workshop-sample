import { InsuranceList } from '@/components/InsuranceList';
import { Stack, Typography } from '@mui/material';

const insurances = [
  {
    insuranceName: '長生きナンバーワン',
    constructor: '田中 太郎',
    insuranceFee: 10000,
    expirationDate: '2023-12-31',
    insuranceNumber: '１２３４５６７８９０',
    contractDate: '2021-01-15',
    paymentMethod: '年払い',
  },
  {
    insuranceName: '安心プラン',
    constructor: '山田 花子',
    insuranceFee: 8000,
    expirationDate: '2024-06-30',
    insuranceNumber: '０９８７６５４３２１',
    contractDate: '2021-03-22',
    paymentMethod: '月払い',
  },
  {
    insuranceName: '家族の安全',
    constructor: '佐藤 次郎',
    insuranceFee: 12000,
    expirationDate: '2023-09-15',
    insuranceNumber: '９８７６５４３２１０',
    contractDate: '2021-02-10',
    paymentMethod: '一括',
  },
  {
    insuranceName: '健康第一',
    constructor: '鈴木 三郎',
    insuranceFee: 15000,
    expirationDate: '2025-02-28',
    insuranceNumber: '１３５７９２４６８０',
    contractDate: '2021-04-18',
    paymentMethod: '年払い',
  },
  {
    insuranceName: '安心ライフ',
    constructor: '高橋 芳子',
    insuranceFee: 9000,
    expirationDate: '2023-11-30',
    insuranceNumber: '２４６８１３５７９０',
    contractDate: '2021-05-05',
    paymentMethod: '月払い',
  },
  {
    insuranceName: '子供の未来',
    constructor: '伊藤 四郎',
    insuranceFee: 11000,
    expirationDate: '2024-08-15',
    insuranceNumber: '３６９８５２１４７０',
    contractDate: '2021-06-30',
    paymentMethod: '一括',
  },
];

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h3">保険証券一覧</Typography>
      <InsuranceList insurances={insurances} />
    </Stack>
  );
}
