import React  from 'react'

const SearchBox = ({setSearchTerm}) => {

  const submitSearchTerm = (e) => {
      setSearchTerm(e.target.value)
  }

  return (
    <div className='flex justify-center p-10 bg-slate-800 rounded-lg'>
        <input placeholder='Search Artist' className='bg-slate-700 text-slate-200 p-4 rounded-lg' onChange={submitSearchTerm} type="text"  />
    </div>
  )
}

export default SearchBox