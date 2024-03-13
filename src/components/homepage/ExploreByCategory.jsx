import React from 'react'
import CategoryTile from './CategoryTile'

const ExploreByCategory = () => {
  return (
    <div className='w-[90%] mx-auto mt-14'>
        <h1 className='text-2xl font-semibold font-heading mb-4'>
            Explore by Category
        </h1>
        <div className='grid grid-cols-4 gap-[1.25rem]'>
            <CategoryTile />
            <CategoryTile />
            <CategoryTile />
            <CategoryTile />
        </div>
    </div>
  )
}

export default ExploreByCategory