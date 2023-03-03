import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import chevronRight from '../assets/images/chevron-right.svg';
import chevronDownActive from '../assets/images/chevron-down-active.svg';
import hydrogenLogo from '../assets/images/large-logo.svg';
import questionPrompt from '../assets/images/question-prompt.svg';
import _nav from '../_nav';
import '../css/_nav.css';

type AppSidebarProps = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const AppSidebar = ({ showSidebar, setShowSidebar }: AppSidebarProps) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [navs, setNavs] = useState(
    _nav.map((item) => ({ ...item, isOpen: false }))
  );

  const getCurrentPageIndex = () => {
    const currentLocationIndex = _nav.findIndex(
      (item) => item.to === location.pathname
    );
    return currentLocationIndex;
  };

  useEffect(() => {
    // first
    setCurrentIndex(getCurrentPageIndex());
  }, [location]);

  const toggleShowSubNavs = (index: number) => {
    setNavs(
      navs.map((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        }
        return item;
      })
    );
  };

  return (
    <div className="fixed w-[290px] h-[calc(100vh-4rem)] bg-[#202020]">
      <div>
        <img
          className="mt-7 px-5 w-[150px]"
          src={hydrogenLogo}
          alt="hydrogen-logo"
        />
      </div>
      <p className="mt-6 px-5 text-[#797979] text-[12px]">INDEX</p>
      <nav
        id="sidebar"
        className="mt-2 max-h-[60vh] overflow-auto text-[12px] flex flex-col">
        {navs.map((nav, i) => {
          return (
            <NavLink
              className={({ isActive }) =>
                'pl-5 pr-7 py-3 text-white hover:text-[#fce300]' +
                (isActive ? ' active' : '')
              }
              to={nav.to}>
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
            </NavLink>
          );
        })}
      </nav>
      <div className="absolute bottom-3 w-[270px] left-[50%] translate-x-[-50%]">
        <img
          src={questionPrompt}
          alt="question prompt"
        />
      </div>
    </div>
  );
};

export default AppSidebar;
