'use client';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';

export default function LabeledText({
  label,
  text,
}: {
  label: string;
  text: string | number;
}) {
  const { palette } = useTheme();
  return (
    <Stack direction={'row'}>
      <Typography style={{ color: palette.text.secondary }}>
        {label}:
      </Typography>
      <Typography>{text}</Typography>
    </Stack>
  );
}
