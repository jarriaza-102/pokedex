import { AppBar, Box } from '@mui/material';
import { HeaderToolbar } from '@/modules/common/ui/components/Header/HeaderToolbar';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <HeaderToolbar />
      </AppBar>
    </Box>
  );
}
