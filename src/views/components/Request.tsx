import React from 'react';

type RequestProps = {
  requestType: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
};

const Request = ({ requestType, url }: RequestProps) => {
  return (
    <>
      <span className="text-[#205FBE] text-[12px] font-medium">
        {requestType}
      </span>
      <span className="inline-block border-[0.5px] border-[#205FBE] rounded px-2 py-[1px] mx-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal">
        {url}
      </span>
    </>
  );
};

export default Request;
