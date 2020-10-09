import { ReactNode } from 'react';

export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  children: ReactNode;
  /**
   * Set this to change alert kind
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}
