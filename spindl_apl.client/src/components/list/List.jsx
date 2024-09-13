import React from 'react';
import data from './../../data/companies.json';

function List() {

  return <div class="grid grid-cols-4 gap-10">
    {data.map(company => (
      <div key={company.name} >
        <div class=" bg-white  duration-500 hover:scale-105 hover:shadow-xl relative">
        <p class="text-md block tracking-wider text-shadow">{company.name} </p>
        <p class="text-md block tracking-wider text-shadow">{company.location} </p>
          <div class="px-4 py-3 font-bold absolute right-[-15px] bg-yellow-100 p-1 border-[1px] shadow-md bottom-[-10px] text-black border-dashed -rotate-2">
            <p class="text-md block tracking-wider text-shadow">{company.internships} </p>
          </div>
        </div>
        <div class="w-60">
          <p class="pt-6 pb-2 pl-1 truncate text-md tracking-wider font-bold shadow-pink-950 scale-y-110">{cake.name}</p>
          <p class="pl-1 pb-[20px] truncate text-sm tracking-wider text-gray-400 shadow-pink-950 scale-y-110">{cake.description}</p>

        </div>
      </div >
    ))
    }
  </div >
}

export default List;