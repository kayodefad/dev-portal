import React from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

type InfoProps = {
  children: React.ReactNode;
};

const Info = ({ children }: InfoProps) => {
  return (
    <div className="rounded bg-[#E2EEFF] text-[#205FBE] border-[#205FBE] pl-2 pr-4 py-2 flex items-center w-fit my-2">
      <InformationCircleIcon className="h-6 w-6 mr-2" />
      {children}
    </div>
  );
};

export default Info;
