import React from 'react';

type DescriptionTextWrapperProps = {
  children: React.ReactNode;
};

const DescriptionTextWrapper = ({ children }: DescriptionTextWrapperProps) => {
  return (
    <div className="text-[13px] text-[#484848] mt-7 leading-6">{children}</div>
  );
};

export default DescriptionTextWrapper;
