import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import crypto from '../assets/crypto.jpeg'
import moment from 'moment/moment'

const News = ({ simplified }) => {


  const { data: cryptoNews} = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified ? 6 : 12 })
  // console.log(cryptoNews)
  if (!cryptoNews?.value) return 'Loading...'
  return (
    <>
    
    
      <div className="container my-12 mx-auto px-4 md:px-12 ">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {
            cryptoNews.value.map((news, i) => (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 hover:scale-110 transition ease-linear duration-200">
                  
                  <article className="overflow-hidden rounded-lg shadow-lg">
                  <a href={news.url} target="_blank" rel="noreferrer">
                    <img alt="Placeholder" className="block h-[30vh] w-full text-black" src={news?.image?.thumbnail?.contentUrl || crypto} />
                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                    </header>
                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block w-[5vh] h-[5vh] rounded-md" src={news.provider[0]?.image?.thumbnail?.contentUrl || crypto} />
                        <p className="ml-2 text-sm">
                          {news.provider[0]?.name}
                        </p>
                      </a>

                      <p className='text-sm'>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                    </footer>
                    </a>
                  </article>


              
                </div>



            ))
          }
        </div>
      </div>
    </>
  )
}

export default News
