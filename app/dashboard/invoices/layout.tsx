import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | Invoices', default: 'Invoices' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
