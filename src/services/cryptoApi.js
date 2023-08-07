import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'a4aaf17d19msh18ef7777c913113p1f8a2ajsna5656ac932cf',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails:builder.query({
      query:(coinId)=>createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory:builder.query({
      query:({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history`)
    })
  }),
});

export const {useGetCryptosQuery,useGetCryptosDetailsQuery,useGetCryptoHistoryQuery}  = cryptoApi;

