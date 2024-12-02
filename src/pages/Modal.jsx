import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ onclose }) => {
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-30 backdrop:blur-md flex justify-center items-center z-30'>
        <div className=' flex flex-col gap-5 text-white'>
          <button onClick={onclose} className='place-self-end'><FontAwesomeIcon icon={faXmark} size={40} /></button>

          <form class="max-w-md w-96 mx-auto">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50   dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black " placeholder="Search T-shirts, Shirts..." required />

              <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-white font-medium text-sm px-5 py-2 dark:bg-black dark:hover:bg-black ">Search</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Modal