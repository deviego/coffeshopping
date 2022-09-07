import { ReactNode } from 'react';

import { Container } from './styles';

interface CartProps {
  children: ReactNode;
}

export function Cart({ children }: CartProps) {
  return (
    <Container>
      <button>Cart</button>
      {children}
    </Container>
  );
}
