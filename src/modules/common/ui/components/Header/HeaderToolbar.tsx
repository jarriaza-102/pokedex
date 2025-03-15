'use client';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import { StyledToolbar } from '@/modules/common/ui/components/Header/HeaderToolbar.styles';
import Link from 'next/link';

export function HeaderToolbar() {
  return (
    <StyledToolbar>
      <Link href="/">
        <Image src={logo.src} alt="Pokemon logo" width={250} height={75} />
      </Link>
    </StyledToolbar>
  );
}
