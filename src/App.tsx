import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import TabsLayout from './layout/TabsLayout';
import Authentication from './views/Authentication';
import Callback from './views/Callback';
import DirectPayments from './views/DirectPayments';
import Ecommerce from './views/e-commerce/Ecommerce';
import Statuses from './views/Statuses';
import Subscriptions from './views/Subscriptions';
import TestCards from './views/TestCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route element={<TabsLayout />}>
            <Route index element={<Ecommerce />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="direct-payments" element={<DirectPayments />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="callback" element={<Callback />} />
            <Route path="test-cards" element={<TestCards />} />
            <Route path="statuses" element={<Statuses />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// "pl-5 pr-7 py-3 hover:bg-black text-white hover:text-[#fce300]"

export default App;
{
  /* <NavLink
              to={nav.to}
              className="pl-5 pr-7 py-3 text-white hover:text-[#fce300] border border-red-600">
              <div className="flex items-center justify-between">
                <span className="active">{nav.name}</span>
                <span
                  onClick={() => toggleShowSubNavs(i)}
                  className="dropdown-btn cursor-pointer">
                  <img
                    src={nav.isOpen ? chevronDownActive : chevronRight}
                    alt="chevron-right"
                  />
                </span>
              </div>
              {nav.children && nav.isOpen && (
                <ul className="pl-2 pr-8">
                  {nav.children?.map((item, i) => {
                    return (
                      <li
                        key={i}
                        className="py-3">
                        <Link
                          className="text-white"
                          to="#">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </NavLink> */
}
