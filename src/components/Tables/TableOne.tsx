import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

import React from 'react';

interface TableOneProps {
  brandData: BRAND[];
  showButton: boolean;
  onClick: () => void;
}

const TableOne: React.FC<TableOneProps> = ({ brandData, showButton, onClick }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Transactions
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Merchant
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Amount
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Transaction Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Co2 Emission
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Transaction type
            </h5>
          </div>
          {/* <div className="hidden p-2.5 text-center sm:block xl:p-3">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div> */}
          {showButton && <div className="hidden p-2.5 text-center sm:block xl:p-3" />}
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-6 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-3">
              <div className="flex-shrink-0">
                <img src={brand.logo} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.merchantName}
              </p>
            </div>
            <div className="flex items-center justify-center p-1.5 xl:p-3">
              <p className="text-meta-3">{brand.amount}</p>
            </div>

            <div className="hidden items-center justify-center p-1.5 sm:flex xl:p-3">
              <p className="text-black dark:text-white">{brand.date}</p>
            </div>

            <div className="hidden items-center justify-center p-1.5 sm:flex xl:p-3">
              <p className="text-meta-5">{brand.carbonEmission}%</p>
            </div>

            <div className="hidden items-center justify-center p-1.5 sm:flex xl:p-3">
              <p className="text-meta-5">{brand.transactionType}</p>
            </div>

            {showButton && (
              <div className="hidden items-center justify-center p-1.5 sm:flex xl:p-3">
              <button
              className="self-start px-4 py-2 bg-blue-600 text-white rounded mt-16"
              onClick={onClick}
            >
              Add Card
            </button>
            </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
