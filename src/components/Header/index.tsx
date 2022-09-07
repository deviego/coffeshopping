import { ReactNode } from 'react';
import { Cart } from '../../pages/Cart';

import { Container } from './styles';

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <h1>Header</h1>
      <Cart children={undefined}/>
      {children}
    </Container>
  );
}
