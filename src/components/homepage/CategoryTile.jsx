import React from 'react'
import salah from '../../assets/salah.jpeg'


const CategoryTile = () => {
  const styles = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0)), url(${salah})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    /* Add other background properties as needed */
  };

  return (
    <div 
    style={styles}
    className='relative w-full h-[13.3rem] transform  transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg cursor-pointer '
    >
        {/* <img style={styles.gradient} src={salah} className='w-full h-full' alt="" /> */}
        <div className='absolute bottom-0 right-1/2 translate-x-1/2 w-full pb-2'>
          <h3 className=' text-lg font-heading font-semibold text-center text-[#fff]'>Ores</h3>
          <h3 className=' text-sm font-body font-medium text-center text-[#fff]'>Discover premium ores for industrial needs</h3>
        </div>
    </div>
  )
}

export default CategoryTile