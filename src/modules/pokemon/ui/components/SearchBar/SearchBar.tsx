'use client';

import { Stack, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';

export type SearchBarProps = {};

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        label="Search..."
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
      />
    </Stack>
  );
}
