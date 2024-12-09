import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface ChartThreeProps {
  data2: number[];
  data3: number[];
  selectedCard: string;
  category2: string[];
  category3: string[];
}

const calculatePercentages = (data: number[]) => {
  const total = data.reduce((acc, value) => acc + value, 0);
  return data.map((value) => ((value / total) * 100).toFixed(2));
};

const defaultColors = ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'];

const ChartThree: React.FC<ChartThreeProps> = ({ data2, data3, selectedCard, category2, category3 }) => {
  const percentages2 = calculatePercentages(data2);
  const percentages3 = calculatePercentages(data3);

  const options2: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: defaultColors,
    labels: category2, // Set labels for the first chart
    legend: {
      show: false,
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const options3: ApexOptions = {
    ...options2,
    labels: category3, // Set labels for the second chart
  };

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            {selectedCard}
          </h5>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <ReactApexChart
          options={options2}
          series={data2}
          type="donut"
          height={280}
          width={280} // Set width if needed
        />
        <ReactApexChart
          options={options3}
          series={data3}
          type="donut"
          height={280}
          width={280} // Set width if needed
        />
      </div>
      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        {category2.map((label, index) => (
          <div className="sm:w-1/2 w-full px-8" key={`category2-${index}`}>
            <div className="flex w-full items-center">
              <span className={`mr-2 block h-3 w-full max-w-3 rounded-full`} style={{ backgroundColor: options2.colors?.[index] ?? defaultColors[index] }}></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span>{label}</span>
                <span>{percentages2[index]}%</span>
              </p>
            </div>
          </div>
        ))}
        {category3.map((label, index) => (
          <div className="sm:w-1/2 w-full px-8" key={`category3-${index}`}>
            <div className="flex w-full items-center">
              <span className={`mr-2 block h-3 w-full max-w-3 rounded-full`} style={{ backgroundColor: options3.colors?.[index] ?? defaultColors[index] }}></span>
              <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                <span>{label}</span>
                <span>{percentages3[index]}%</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;



// import { ApexOptions } from 'apexcharts';
// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// interface ChartThreeProps {
//   data2: number[];
//   data3: number[];
//   selectedCard: string;
//   category2: string[];  
//   category3: string[]
// }


// const ChartThree: React.FC<ChartThreeProps> = ({ data2, data3, selectedCard, category2, category3 }) => {
//   const options2: ApexOptions = {
//     chart: {
//       fontFamily: 'Satoshi, sans-serif',
//       type: 'donut',
//     },
//     colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
//     labels: category2, // Set labels for the first chart
//     legend: {
//       show: false,
//       position: 'bottom',
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: '65%',
//           background: 'transparent',
//         },
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     responsive: [
//       {
//         breakpoint: 2600,
//         options: {
//           chart: {
//             width: 380,
//           },
//         },
//       },
//       {
//         breakpoint: 640,
//         options: {
//           chart: {
//             width: 200,
//           },
//         },
//       },
//     ],
//   };

//   const options3: ApexOptions = {
//     ...options2,
//     labels: category3, // Set labels for the second chart
//   };

//   return (
//     <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
//   <div className="mb-3 justify-between gap-4 sm:flex">
//     <div>
//       <h5 className="text-xl font-semibold text-black dark:text-white">
//         {selectedCard}
//       </h5>
//     </div>
//   </div>
//   <div className="flex justify-between gap-4">
//     <ReactApexChart
//       options={options2}
//       series={data2}
//       type="donut"
//       height={380}
//       width={380} // Set width if needed
//     />
//     <ReactApexChart
//       options={options3}
//       series={data3}
//       type="donut"
//       height={380}
//       width={380} // Set width if needed
//     />
//   </div>
// </div>

//   );
// };

// export default ChartThree;
