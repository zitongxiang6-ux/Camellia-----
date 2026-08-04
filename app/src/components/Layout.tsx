import type { ReactNode } from 'react';
import { useLenis } from '../hooks/useLenis';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useLenis();

  return (
    <div className="min-h-[100dvh]">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
