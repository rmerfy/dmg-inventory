import React from "react";
import DmgProduct from "./DmgProduct";

const DmgProducts = (props) => {
  return (
    <div className="container">
      <div className="flex flex-row justify-between w-full mb-1 sm:mb-0">
        <h2 className="text-2xl leading-tight">Bigcommerce inventory</h2>
        <div className="text-end">
          <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Filter'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="name"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Filter
            </button>
          </form>
        </div>
      </div>
      <div className="py-4 -mx-4 overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  SKU
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Product name
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                >
                  status
                </th>
                <th
                  scope="col"
                  className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                ></th>
              </tr>
            </thead>
            <tbody>
              {props.products.map((m) => {
                return (
                  <DmgProduct
                    key={m.id}
                    sku={m.sku}
                    name={m.name}
                    price={m.price}
                    qty={m.inventory_level}
                    availability={m.availability}
                  />
                );
              })}
            </tbody>
          </table>
          <div className="flex flex-col items-center px-5 py-5 bg-white xs:flex-row xs:justify-between">
            <div className="flex items-center">
              <button
                type="button"
                className="w-full p-4 text-base text-gray-600 bg-white border rounded-l-xl hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  className=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-indigo-500 bg-white border-t border-b hover:bg-gray-100 "
              >
                1
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                2
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border-t border-b hover:bg-gray-100"
              >
                3
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 text-base text-gray-600 bg-white border hover:bg-gray-100"
              >
                4
              </button>
              <button
                type="button"
                className="w-full p-4 text-base text-gray-600 bg-white border-t border-b border-r rounded-r-xl hover:bg-gray-100"
              >
                <svg
                  width="9"
                  fill="currentColor"
                  height="8"
                  className=""
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DmgProducts;
