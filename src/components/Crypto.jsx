import React, { useEffect, useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom';
import millify from 'millify';
const Crypto = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
  const [searchTerm, setSearchTerm] = useState('')
  if (isFetching) return 'Loading...'
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])
  return (
    <>
      {!simplified && (
        <div className='flex justify-center items-center text-center  mt-6 p-4'> 
          <input type="text" className='border-2 rounded-lg shadow-md shadow-purple-950  border-purple-950 p-2' placeholder='Search cryptocurrency...' onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      )}

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            cryptos?.map((currency) => (


              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 " key={currency.id}>
                <Link to={`/crypto/${currency.id}`}>
                  <article className="overflow-hidden rounded-lg shadow-lg  shadow-purple-200 hover:scale-110 transition ease-linear duration-150">



                    <header className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block  w-10 h-10" src={currency.iconUrl} />
                        <p className="ml-2 text-2xl font-bold text-purple-950">
                          {currency.name}
                        </p>
                      </a>

                    </header>
                    <div className='flex flex-col m-2 p-2 '>
                      <p className='text-lg mb-3'><span className='font-semibold font-serif text-xl text-purple-800'>Price: </span>{millify(currency.price)}</p>
                      <p className='text-lg mb-3'><span className='font-semibold font-serif text-xl text-purple-800'>Market Cap: </span>{millify(currency.marketCap)}</p>
                      <p className='text-lg mb-3'><span className='font-semibold font-serif text-xl text-purple-800'>Daily Change: </span>{millify(currency.change)}%</p>
                    </div>

                  </article>
                </Link>
              </div>




            ))
          }
        </div>
      </div>
    </>
  )
}

export default Crypto
