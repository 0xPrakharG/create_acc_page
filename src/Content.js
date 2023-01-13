import React from 'react';
import Form from './Form';

function Content() {
  return (
    <div className='absolute flex flex-col items-start px-[91px] py-[40px] gap-6 w-[560px] h-[611px] left-[440px] top-[93px] bg-[#ffffff] shadow-[4px_4px_20px_0_rgba(157,157,157,0.12)] rounded-[15px]'>
      <div className='flex flex-col items-center p-0 gap-4 w-[378px] h-[185px] flex-none order-1 grow-0'>
        <div className='flex flex-col items-center p-0 gap-6 flex-none order-1 grow-0 self-stretch'>
          <div className='w-[51px] h-[48px] flex-none order-1 grow-0 left-[163.5px] '>
            <div className='absolute left-[51.92%] top-[6.90%] bg-[#3766e8] rounded-[100px] w-[11.05px] h-[21.55px] rotate-[-31.3deg]'></div>
            <div className='absolute left-[49.43%] top-[6.96%] bg-[#3766e8] rounded-[100px] w-[11.05px] h-[42.37px] rotate-[-31.3deg]'></div>
            <div className='absolute left-[46.70%] top-[9.75%] bg-[#3766e8] rounded-[100px] w-[11.05px] h-[27.84px] rotate-[-31.3deg]'></div>
            {/* <img src="./images/logo2.svg" alt="" /> */}
          </div>
          <h3 className='h-[60px] w-[378px] font-Roboto not-italic font-medium text-[26px] leading-[30px] text-center text-[#212121] flex-none order-2 self-stretch'>It's a delight to have you <br />onboard</h3>
        </div>
        <p className='h-[60px] w-[378px] font-Roboto not-italic font-normal text-[14px] leading-[18px] text-center text-[#545454] flex-none order-2'>Help us know you better.<br />(This is how we optimize Wobot as per your business needs)</p>
      </div>
      <Form />
      <button className='flex-none order-4 flex justify-center items-center px-[40px] py-[10px] gap-2 w-[368px] h-[36px] bg-[#3766e8] rounded-[5px] text-[#ffffff]'>Get Started</button>
    </div>
  );
}

export default Content;