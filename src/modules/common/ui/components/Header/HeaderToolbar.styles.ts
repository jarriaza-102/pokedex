import { styled } from '@mui/system';
import { Toolbar } from '@mui/material';
import { SPACING } from '@/modules/common/domain/spacing';

export const StyledToolbar = styled(Toolbar)({
  paddingTop: SPACING.sm,
  paddingBottom: SPACING.sm,
});
