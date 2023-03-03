import { NavLink, NavLinkProps } from 'react-router-dom';

const _nav: Nav[] = [
  {
    component: NavLink,
    name: 'E-commerce integration',
    to: '/',
    children: null,
  },
  {
    component: NavLink,
    name: 'Authentication',
    to: '/authentication',
    children: null,
  },
  {
    component: NavLink,
    name: 'Direct payments',
    to: '/direct-payments',
    children: [
      {
        name: `Payment order, card data is collected on merchant's side (internal MPI)`,
        hash: 'internal-mpi',
      },
      {
        name: `Payment for order, card data is collected on merchant's side (external MPI)`,
        hash: 'external-mpi',
      },
      {
        name: `Instant Payment`,
        hash: 'instant-payment',
      },
      {
        name: `MOTO payment`,
        hash: 'moto-payment',
      },
    ],
  },
  {
    component: NavLink,
    name: 'Subscriptions',
    to: '/subscriptions',
    children: null,
  },
  {
    component: NavLink,
    name: 'Callback',
    to: '/callback',
    children: null,
  },
  {
    component: NavLink,
    name: 'Test Cards',
    to: '/test-cards',
    children: null,
  },
  {
    component: NavLink,
    name: 'Statuses',
    to: '/statuses',
    children: null,
  },
];

export type Nav = {
  component: React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  >;
  name: string;
  to: string;
  children: { name: string; hash: string }[] | null;
};

export default _nav;
