import { InsuranceList } from '@/components/insuranceList';
import { Stack, Typography } from '@mui/material';

const insurances = [
  {
    insuranceName: '長生きナンバーワン',
    constructor: '田中 太郎',
    insuranceFee: 10000,
    expirationDate: '2023-12-31',
    insuranceNumber: '1234567890',
  },
  {
    insuranceName: '安心プラン',
    constructor: '山田 花子',
    insuranceFee: 8000,
    expirationDate: '2024-06-30',
    insuranceNumber: '0987654321',
  },
  {
    insuranceName: '家族の安全',
    constructor: '佐藤 次郎',
    insuranceFee: 12000,
    expirationDate: '2023-09-15',
    insuranceNumber: '9876543210',
  },
  {
    insuranceName: '健康第一',
    constructor: '鈴木 三郎',
    insuranceFee: 15000,
    expirationDate: '2025-02-28',
    insuranceNumber: '1357924680',
  },
  {
    insuranceName: '安心ライフ',
    constructor: '高橋 芳子',
    insuranceFee: 9000,
    expirationDate: '2023-11-30',
    insuranceNumber: '2468135790',
  },
  {
    insuranceName: '子供の未来',
    constructor: '伊藤 四郎',
    insuranceFee: 11000,
    expirationDate: '2024-08-15',
    insuranceNumber: '3698521470',
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
