import React from 'react'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Home = () => {
    const {data,isFetching}=useGetCryptosQuery();
    const globalStats=data?.data?.stats;
    if(isFetching) return 'Loading...';
    // console.log(data)
    return (
        <>
            <div className='flex flex-col p-5'>
                <h1 className='text-4xl font-bold font-serif text-purple-950 ml-2'>Global Crypto Stats</h1>
                <div className='grid grid-cols-6 mt-4  gap-4 p-4'>
                    <div className="col-start-1 col-end-3 ...">
                        <div className='flex flex-col mb-2 font-serif mt-2'>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Cryptocurrencies</h1>
                                <span className='text-md text-purple-900  font-medium font-sans' >{globalStats}</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Market Cap</h1>
                                <span className='text-md text-purple-900 font-medium font-sans'>28576</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Cryptocurrencies</h1>
                                <span className='text-md text-purple-900 font-medium font-sans'>28576</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-end-7 col-span-2 ...">
                        <div className='flex flex-col mb-2 font-serif mt-2'>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Exchange</h1>
                                <span className='text-md text-purple-900  font-medium font-sans'>161</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total 24h Volume</h1>
                                <span className='text-md text-purple-900 font-medium font-sans'>$43.8B</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Markets</h1>
                                <span className='text-md text-purple-900 font-medium font-sans'>38K</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home
