import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCryptosDetailsQuery ,useGetCryptoHistoryQuery} from '../services/cryptoApi'
import { Select } from 'antd'
import { DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, TrophyOutlined, FundOutlined, MoneyCollectOutlined, CheckOutlined, StopOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import LineChart from './LineChart'
const CrytpoInfo = () => {
    const { coinId } = useParams()
    const [timePeriod, setTimePeriod] = useState('7ds')
    const { data, isFetching } = useGetCryptosDetailsQuery(coinId)
   const {data: coinHistory} =useGetCryptoHistoryQuery({coinId,timePeriod})
    const cryptoDetails = data?.data?.coin;
    const { Option } = Select
    // console.log(data)
    if (isFetching) return 'Loading....'
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.["24hVolume"] && millify(cryptoDetails?.["24hVolume"])}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
    ];

    const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined className='text-green-500' /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Coins Till Date', value: `$ ${cryptoDetails?.supply?.supplyAt && millify(cryptoDetails?.supply?.supplyAt)}`, icon: <ExclamationCircleOutlined /> },
    ];
    return (
        <>
            <div>
                <div>
                    <div className='flex flex-col justify-center items-center text-center font-serif ml-48  py-6'>
                        <h1 className='text-4xl font-bold underline underline-offset-2 text-purple-950 '>{data?.data?.coin.name} ({data?.data?.coin.symbol}) Price</h1>
                        <p className='text-xl mt-4 '>{data?.data?.coin.name} live price in USD Dollar (USD) . View Value statistics, Market Cap and supply </p>
                    </div>
                </div>
                <div className='flex ml-6'>
                    <Select defaultValue="7d" className="w-40" placeholder="Select Timeperiod" onChange={(value) => setTimePeriod(value)}>
                        {time.map((date) => <Option key={date}>{date}</Option>)}
                    </Select>
                </div>
               <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name}/>
                <div className='flex flex-wrap justify-center items-center text-white'>
                    <div className='flex'>
                        <div className='bg-purple-600 hover:bg-purple-700 duration-200 rounded-xl shadow-lg shadow-purple-950 w-fit m-2 p-4 '>
                            <h2 className='text-3xl font-semibold font-serif underline underline-offset-4'>{data?.data?.coin.name} Value Statistics</h2>
                            <p className='mt-2 font-serif font-medium'>An overview showing of statistics of {data?.data?.coin.name}, Such as base and quote </p>
                            <p className='font-serif font-medium'>currency , the rank and trading volume</p>
                            {
                                stats.map(({ title, icon, value }) => (
                                    <div className='flex justify-between text-center items-center space-y-4 py-2'>
                                        <div className='flex justify-center items-center text-center gap-4 text-2xl font-bold font-sans'>
                                            {icon} {title}
                                        </div>

                                        <div className='text-2xl font-medium font-sans'>
                                            {value}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className='bg-white text-purple-700  duration-200 rounded-xl shadow-lg shadow-purple-950 w-fit m-2 p-4'>
                            <h2 className='text-3xl font-semibold font-serif underline underline-offset-4'>Other Stats Info</h2>
                            <p className='mt-2 font-serif font-medium'>An overview showing of statistics of {data?.data?.coin.name}, Such as base and quote </p>
                            <p className='font-serif font-medium'>currency , the rank and trading volume</p>
                            {
                                genericStats.map(({ title, icon, value }) => (
                                    <div className='flex justify-between items-center text-center space-y-4 py-2'>
                                        <div className='flex justify-center items-center gap-4 text-2xl font-bold font-sans'>
                                            {icon} {title}
                                        </div>
                                        <div className='text-2xl font-medium font-sans'>
                                            {value}
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='bg-white text-purple-700  duration-200 rounded-xl shadow-lg shadow-purple-950  m-2 p-4 w-[50%] h-[37vh] '>
                            <h1 className='text-5xl font-serif underline underline-offset-4'>What is {cryptoDetails.name}</h1>
                            <p className='mt-3 text-xl font-sans'>{HTMLReactParser(cryptoDetails.description)}</p>
                        </div>
                        <div className='bg-purple-600 hover:bg-purple-700 duration-200 rounded-xl shadow-lg shadow-purple-950  m-2 p-4 w-[32%] '>
                            <h1 className='text-3xl font-semibold font-serif underline underline-offset-4 '>{cryptoDetails.name} Links</h1>
                            <div className='py-2 mb-2 space-y-2'>
                            {
                                cryptoDetails.links?.map((link) => (
                                    <div className='flex justify-between '>
                                        <h2 className='text-xl font-semibold first-letter:uppercase'>{link.type}</h2>
                                        <a href={link.url} target='_blank'>{link.name}</a>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrytpoInfo
