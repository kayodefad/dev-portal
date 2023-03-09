import React from 'react';

type TryItButtonProps = {
  children: React.ReactNode;
};

const TryItButton = ({ children }: TryItButtonProps) => {
  return (
    <button className="px-4 py-[6px] border border-[black] hover:bg-[#EFF1F3] rounded uppercase text-[12px] font-bold h-fit cursor-pointer">
      {children}
    </button>
  );
};

export default TryItButton;
