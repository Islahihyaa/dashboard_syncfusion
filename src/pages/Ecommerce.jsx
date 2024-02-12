import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className="flex justify-between items-center">
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
            <button 
            type='button'
            style={{ backgroundColor: "blue"}}
            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4">
              <BsCurrencyDollar/>
            </button>
          </div>
          <div className='mt-6'>
            <Button
             color="white"
             bgColor="blue"
             text="Download"
             borderRadius="10px"
            />
          </div>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-2'>
          {earningData.map((item) => (
            <div key={item.title}  className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button
                type='button'
                style={{ backgroundColor: item.iconBg, color: item.iconColor}}
                className='text-2xl rounded-full p-4 hover:drop-shadow-xl'
              >
               {item.icon}
              </button>
              <p className='mt-2'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className='ml-2 text-sm' style={{color: item.pcColor}}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-gray-400 text-sm mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='text-xl font-bold'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                <span>
                <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex items-center justify-between '>
            <div className='flex flex-col gap-4 border-r-2 m-4 pr-10'>
              <div>
                <p>
                  <span className='font-bold text-2xl'>$93,438</span>
                  <span className='rounded-full bg-green-500 px-2 py-1 text-white text-sm ml-2'>23%</span>
                </p>
                <p className='text-gray-500'>Budget</p>
              </div>
              <div>
                <p className='font-bold text-2xl'>
                  $48,487
                </p>
                <p className='text-gray-500'>Expense</p>
              </div>
              
              {/* SparkLine */}
              <div>
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              {/* End SparkLine */}
              
              <Button
                color="white"
                bgColor="blue"
                text="Download Report"
                borderRadius="10px"
              />
            </div>

            <div>
              <Stacked width="320px" height="360px" />
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Ecommerce