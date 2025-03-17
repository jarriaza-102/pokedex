import { Box, Stack, Typography, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export type AsyncLoaderErrorProps = {
  onRetry?: () => void;
};

export function AsyncLoaderError({ onRetry }: AsyncLoaderErrorProps) {
  return (
    <Stack spacing={1} alignItems="center" justifyContent="center" height="100%">
      <Typography gutterBottom variant="subtitle1">
        There was an error trying to fetch the data.
      </Typography>
      <Box>
        <SettingsIcon />
      </Box>
      {onRetry ? (
        <Button variant="outlined" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </Stack>
  );
}
