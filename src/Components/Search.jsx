import React,{useState} from 'react';
import JsonData from "../PK_DATA.json"

function Search() {
    const [search, setSearch] = useState("")
  return (
    <div className='container mx-auto m-4 p-3  bg-lime-300   '>
    <h1 className='text-3xl text-gray-600'>Search first_name in the search bar</h1>
        <input className='border border-red-600 w-[300px] h-[40px] m-5 p-2 '  type="text" placeholder='Search your first_name..' 
        onChange={(e) =>{ setSearch(e.target.value)}}

        />
        {JsonData.filter((val)=>{
            if(search === ""){
                return val
            }else if (val.first_name.toLowerCase().includes(search.toLowerCase())){
                return val
            }
        }).map((val, key) => {
            return <div key={key}>
            <p>{val.first_name}</p>
            </div>
        })}
    </div>
  )
}

export default Search;