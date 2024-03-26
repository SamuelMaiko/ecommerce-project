import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMyGeneralContext } from '../../context/AppContext'
import SupplierHeader from './SupplierHeader'
import SupplierInfo from './SupplierInfo'
import SupplierProduct from './SupplierProduct'
import HorizontalSeparator from '../common/HorizontalSeparator'
import instance from '../../axios/instance'

const SuppliersDetailPage = () => {
    const [activeSection, setActiveSection] = useState(0)
    const [supplier, setSupplier] = useState([])
    const [supplierProducts, setSupplierProducts] = useState([])
    const {supplier_id} =useParams()
    useEffect(()=>{
        const getSpecificSupplier = async () => {
            try {
              const response = await instance.get(`/api/accounts/suppliers/${supplier_id}/`);
              // console.log(response.data.products);
              setSupplier(response.data);
              setSupplierProducts(response.data.products)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
      
          getSpecificSupplier();

    },[])
    const {backendDomain}=useMyGeneralContext()
  return (
    <div className='w-full'>
        <div className='w-full bg-blue-500'>
            <SupplierHeader {...supplier} />
        </div>
        <div className="w-[90%] mx-auto">
            <SupplierInfo {...supplier} />
            <div>
                <div className='flex justify-between mb-4'>
                    <div onClick={()=>setActiveSection(0)} className={`${activeSection===0?" border-b-4 border-blue-500":""} hover:bg-[rgba(0,0,255,0.1)] transition-colors duration-300 py-2 flex justify-center w-full text-gray-600 font-semibold cursor-pointer`}>
                        <p>Raw Materials</p>
                    </div>
                    <div 
                        onClick={()=>setActiveSection(1)} 
                        className={`${activeSection===1?" border-b-4 border-blue-500":""} hover:bg-[rgba(0,0,255,0.1)] transition-colors duration-300 py-2 flex justify-center w-full text-gray-600 font-semibold cursor-pointer`}>
                        <p>Related Suppliers</p>
                    </div>
                </div>
                <div>
                    <div className={`${activeSection===0?"":"hidden"}`}>
                        {
                            supplierProducts ?  (supplierProducts.map((product, index)=>{
                                return <div key={index}>
                                    <SupplierProduct {...product} />
                                    <HorizontalSeparator/>
                                </div>
                            })):(
                                <div className='h-[20rem] grid place-items-center text-xl font-medium text-gray-600 '>
                                    No products for supplier available!
                                </div>
                            )
                        }
                    </div>
                    <div className={`${activeSection===1?"":"hidden"} h-[20rem] grid place-items-center`}>
                        <h1 className='text-xl font-medium text-gray-600'>
                            No related suppliers available for this supplier!
                        </h1>
                        
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default SuppliersDetailPage