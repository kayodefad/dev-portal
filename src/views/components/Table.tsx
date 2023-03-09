import React from 'react';

type TableProps = {
  headings: string[];
  children: React.ReactNode;
};

const Table = ({ headings, children }: TableProps) => {
  return (
    <div className="mt-4 flow-root">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-[#EFF1F3]">
                <tr>
                  {headings.map((heading, i) => {
                    return i === 0 ? <th
                    key={i}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6"
                  >
                    {heading}
                  </th> : <th
                      key={i}
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-blackk"
                    >
                      {heading}
                    </th>
                  })}
                  {/* <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Required
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Example
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-black"
                  >
                    Description
                  </th> */}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFF1F3] bg-white">
                {children}
                {/* {item.requestHeaders.map((row, i) => {
                  return (
                    <tr key={i}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                        {row.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-block border-[0.5px] border-[#205FBE] rounded px-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal">
                          {row.required}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {row.type}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {row.description}
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
