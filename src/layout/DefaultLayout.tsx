import { AppFooter, AppHeader, AppSidebar } from '../components';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const DefaultLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <AppHeader
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <div>
        <AppSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="md:ml-[290px] min-h-[calc(100vh-4rem)] flex flex-col justify-between">
          <div className="bg-[#F9F9F9]">
            <Outlet />
          </div>
          {/* <AppFooter /> */}
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
