import React from 'react'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Crypto from './Crypto';
import News from './News';
import { Link } from 'react-router-dom';
import millify from 'millify';

const Home = () => {
    const {data,isFetching}=useGetCryptosQuery(10);
    const globalStats=data?.data?.stats;
    if(isFetching) return 'Loading...';
    // console.log(data)
    return (
        <>
            <div className='flex flex-col p-5 bg-gray-200 rounded-2xl m-3'>
                <h1 className='text-4xl font-bold font-serif text-purple-950 ml-2 underline underline-offset-2'> Global Crypto Stats</h1>
                <div className='grid grid-cols-6 mt-4  gap-4 p-4'>
                    <div className="col-start-1 col-end-3 ...">
                        <div className='flex flex-col mb-2 font-serif mt-2'>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Cryptocurrencies</h1>
                                <span className='text-md text-purple-950  font-medium font-sans' >{millify(globalStats.total)}</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Market Cap</h1>
                                <span className='text-md text-purple-950 font-medium font-sans'>{millify(globalStats.totalMarketCap)}</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Coins</h1>
                                <span className='text-md text-purple-950 font-medium font-sans'>{millify(globalStats.totalCoins)}</span>
                            </div>

                        </div>
                    </div>
                    <div className="col-end-7 col-span-2 ...">
                        <div className='flex flex-col mb-2 font-serif mt-2'>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Exchange</h1>
                                <span className='text-md text-purple-950  font-medium font-sans'>{millify(globalStats.totalExchanges)}</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total 24h Volume</h1>
                                <span className='text-md text-purple-950 font-medium font-sans'>${millify(globalStats.total24hVolume)}</span>
                            </div>
                            <div className='mb-4'>

                                <h1 className='text-xl text-purple-500 font-bold'>Total Markets</h1>
                                <span className='text-md text-purple-950 font-medium font-sans'>{millify(globalStats.totalMarkets)}</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between '>
                <h1 className='text-4xl font-bold font-serif text-purple-950 ml-2 underline underline-offset-2' >Top 10 Cryptocurrency in the world</h1>
                <Link to={'/Crypto'}><p className='flex text-xl font-semibold text-purple-500 mr-2'>Show more</p></Link>
            </div>
                <Crypto simplified/>
            <div className='flex justify-between '>
                <h1 className='text-4xl font-bold font-serif text-purple-950 ml-2 underline underline-offset-2'>Latest CRYPTO News</h1>
                <Link to={'/News'}><p className='flex text-xl font-semibold text-purple-500 mr-2 '>Show more</p></Link>
            </div>
                <News simplified/>

        </>
    )
}

export default Home
