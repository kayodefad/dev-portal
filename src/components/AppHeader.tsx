import { Dispatch, SetStateAction } from "react";
import logo from '../assets/images/logo.svg'
import searchIcon from '../assets/images/search-icon.svg'
import avatarIcon from '../assets/images/avatar-icon.svg'
import chevronDownIcon from '../assets/images/chevron-down-icon.svg'

type AppHeaderProps = {
    showSidebar: boolean;
    setShowSidebar: Dispatch<SetStateAction<boolean>>;
  };

const AppHeader = ({showSidebar, setShowSidebar}: AppHeaderProps) => {
  return (
    <header className="font-exo z-50 sticky top-0 left-0 bg-[#FCE300]  h-16 flex items-center justify-between px-6">
      <div className="flex gap-16">
        <div>
          <img
            src={logo}
            alt="logo" />
        </div>
        <ul className="flex gap-5">
          <li className="font-semibold">Home</li>
          <li className="font-semibold">Documentation</li>
          <li className="font-semibold">Products</li>
        </ul>
      </div>
      <div className="flex gap-7 items-center">
        <div className="relative">
          <input
            className="rounded text-gray text-base pl-4 py-[6px] w-[250px]"
            type="search"
            name="search"
            placeholder="Search"
            id="search" />
          <img
            className="absolute right-2 top-[50%] translate-y-[-50%]"
            src={searchIcon}
            alt="search-icon" />
        </div>
        <div className="rounded-full p-2">
          <img
            src={avatarIcon}
            alt="avatar-icon" />
        </div>
        <div>
          <img
            src={chevronDownIcon}
            alt="avatar-icon" />
        </div>
      </div>
    </header>
  )
}

export default AppHeader

// export const nav = [
//     {
//       name: 'E-commerce integration',
//       link: 'index.html',
//       subNavs: null,
//     },
//     {
//       name: 'Authentication',
//       link: 'auth.html',
//       subNavs: null,
//     },
//     {
//       name: 'Direct payments',
//       link: 'direct-payments.html',
//       subNavs: [
//         {
//           name: "Payment order, card data is collected on merchant's side (internal MPI)",
//           hash: 'internal-mpi',
//         },
//         {
//           name: "Payment for order, card data is collected on merchant's side (external MPI)",
//           hash: 'external-mpi',
//         },
//         {
//           name: "Payment order, card data is collected on merchant's side (internal MPI)",
//           hash: 'instant-payment',
//         },
//         {
//           name: 'MOTO payment',
//           hash: 'moto-payment',
//         },
//       ],
//     },
//     {
//       name: 'Subscriptions',
//       link: 'subscription.html',
//       subNavs: null,
//     },
//     {
//       name: 'Callback',
//       link: 'callback.html',
//       subNavs: null,
//     },
//     {
//       name: 'Test Cards',
//       link: 'test-cards.html',
//       subNavs: null,
//     },
//     {
//       name: 'Statuses',
//       link: 'statuses.html',
//       subNavs: null,
//     },
//   ];
  