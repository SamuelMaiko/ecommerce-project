import React, { useEffect } from 'react'
import SubscriptionCard from '../components/subscriptions/SubscriptionCard'
import { SUBSCRIPTION_TIERS } from '../FakeData/SubscriptionTiers'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCookie } from '../Cookies/Cookie'

const Subscriptions = () => {
    const navigate=useNavigate()
  const {pathname} = useLocation()

  useEffect(()=>{
    const accessToken=getCookie("access_token")
    if (pathname!=='/login' || pathname!=='/signup'){
      
      if (!accessToken){
        navigate("/login")
      }
    }
  },[])
  return (
    <div className='w-full'>
        <div className="w-[90%] h-screen mx-auto">
            <h1 className='font-heading text-3xl font-semibold my-4'>Subscriptions Plans</h1>
{/* start  */}
            <div className='grid grid-cols-3 gap-[1.25rem]'>
                {
                    SUBSCRIPTION_TIERS.map((tier, index)=>{
                        return <SubscriptionCard key={index}  {...tier} />
                    })
                }
                
            </div>

        </div>
    </div>
  )
}

export default Subscriptions