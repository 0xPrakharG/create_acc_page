import React from 'react'
import { Listbox } from '@headlessui/react'


function Form() {
  return (
    <div className='flex flex-col items-start p-0 gap-2 w-[368px] h-[262px] flex-none order-1 grow-0'>
      <div className='h-[82px] w-[368px] flex-none order-1 grow-0'>
        <label className='labelName'>Company Name</label>
        <input type="text" placeholder='e.g. Example Inc' className='inputField'/>
      </div>
      <div className='h-[82px] w-[368px] flex-none order-2 grow-0'>
        <label className='labelName'>Industry</label>
        
        <Listbox>
        <Listbox.Button className="inputField text-[#a0a0a0] text-[14px] leading-[18px]">
              <span className="flex items-center">
                <span className="ml-3 block truncate">Select</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <img src="./images/drop.svg" className='pr-[2px]' alt="" />
              </span>
            </Listbox.Button>
            </Listbox>
      </div>
      <div className='h-[82px] w-[352px] flex-none order-3 grow-0'>
        <label className='labelName'>Company Size</label>
        <div className='flex flex-row justify-between gap-2 w-[368px] h-[82px] absolute pt-7'>
          <div className='options'>1-20</div>
          <div className='options'>51-200</div>
          <div className='options text-[#ffffff] bg-[#3766e8]'>201-500</div>
          <div className='options'>21-50</div>
          <div className='options'>500+</div>
        </div>
      </div>
    </div>
  )
}

export default Form;