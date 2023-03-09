import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { directPaymentsData } from '../data/directPayments';

// {nav.children?.map((item, i) => {
//     return (
//       <li
//         key={i}
//         className="py-3">
//         {/* <Link
//           className="text-white"
//           to="#">
//           {item.name}
//         </Link> */}
//         <a
//           href={`#${item.hash}`}
//           className="text-white">
//           {item.name}
//         </a>
//       </li>
//     );
//   })}

const DirectPayments = () => {
  return (
    <>
      <h2 className="font-exo font-bold text-3xl mb-20">Direct Payments</h2>
      {directPaymentsData.map((item, i) => {
        return (
          <div
            key={i}
            id={`${item.hash}`}
            className="mb-20">
            <div>
              {/* <!-- Title --> */}
              <div className="grid grid-cols-6 items-start">
                <h2 className="font-semibold text-2xl tracking-wide col-span-4">
                  {item.name}
                </h2>
                <div className="col-span-2 flex gap-4 justify-end">
                  <button className="px-4 py-[6px] border border-[black] hover:bg-[#EFF1F3] rounded uppercase text-[12px] font-bold h-fit cursor-pointer">
                    Try it
                  </button>
                  <button className="px-4 py-[6px] border border-[black] hover:bg-[#EFF1F3] rounded uppercase text-[12px] font-bold h-fit cursor-pointer">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* <!-- About --> */}
              <div
                className="text-[12px] text-[#484848] mt-7"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {/* </div> */}
              {/* <!-- Request Headers --> */}
              <div className="mt-7">
                <p className="font-semibold text-base text-black">
                  Request Headers
                </p>
                {/* <!-- Table --> */}
                <div className="mt-4 flow-root">
                  <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead className="bg-[#EFF1F3]">
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                Required
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                Example
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EFF1F3] bg-white">
                            {item.requestHeaders.map((row, i) => {
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
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Response --> */}
              <div className="mt-7 text-[14.4px]">
                <CopyBlock
                  language={item.response.language}
                  text={item.response.text}
                  theme={dracula}
                  showLineNumbers={false}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DirectPayments;
