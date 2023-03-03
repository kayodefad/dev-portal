import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import _nav from '../_nav';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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

  const onPrevClick = () => {
    navigate(_nav[currentIndex - 1].to);
    setCurrentIndex(currentIndex - 1);
  };

  const onNextClick = () => {
    navigate(_nav[currentIndex + 1].to);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      <div
        onClick={onPrevClick}
        className={`bg-white flex flex-col cursor-pointer rounded border border-[EFF1F3] py-5 px-5 ${
          currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''
        }`}>
        <div className="text-[12px] text-[#797979] font-medium">Previous</div>
        <div className="text-[00B2A9] text-[#00B2A9] font-semibold">
          {currentIndex > 0 ? _nav[currentIndex - 1].name : ''}
        </div>
      </div>
      <div
        onClick={onNextClick}
        className={`bg-white flex flex-col cursor-pointer text-right rounded border border-[EFF1F3] py-5 px-5 ${
          currentIndex === _nav.length - 1
            ? 'opacity-0 pointer-events-none'
            : ''
        }`}>
        <div className="text-[12px] text-[#797979] font-medium">Next</div>
        <div className="text-[00B2A9] text-[#00B2A9] font-semibold">
          {currentIndex < _nav.length - 1 ? _nav[currentIndex + 1].name : ''}
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
