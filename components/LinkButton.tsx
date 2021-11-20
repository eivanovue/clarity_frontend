import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type LinkButton = {
  label: string,
}

const StyledLinkButton = styled(Button)(() => ({
  color: 'black',
}));

export default function LinkButton({label} : LinkButton) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <StyledLinkButton
        id="fade-button"
        aria-controls="fade-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {label}
      </StyledLinkButton>
  );
}