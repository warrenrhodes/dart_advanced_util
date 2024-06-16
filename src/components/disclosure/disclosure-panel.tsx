import type { ReactNode } from 'react';
import { DisclosurePanel } from '@headlessui/react';

interface DisclosureProps {
  children: ReactNode;
}

function Disclosure(props: DisclosureProps) {
  let { children } = props;

  return <DisclosurePanel>{children}</DisclosurePanel>;
}

export default Disclosure;
