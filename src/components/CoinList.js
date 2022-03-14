import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import NumberWithCommas from "../Helpers/NumberWithCommas"

import star from '../assets/star.svg' 

import styles from './CoinList.module.css'


export default function CoinList() {
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
  const { data: coins, isPending, error } = useFetch(url)
  return (
  <div className="row">
      { isPending && 
        (<div className="col-md-12 d-flex align-items-center mt-5">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>)
      }
      {error && <div>{error}</div> }
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            {/* <th scope="col"></th> */}
            <th scope="col">Price</th>
            <th scope="col">1h</th>
            <th scope="col">24h</th>
            <th scope="col">7d</th>
            <th scope="col">24h Volume</th>
            <th scope="col">Mkt Cap</th>
            <th scope="col">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
         

          
          {coins && coins.map((coin) => (
            <tr key={coin.id}>
              <td>
                <img 
                  src={star}  
                  alt="show favourite toggle icon" 
                  style={{ cursor: 'pointer', width: '18px', height: '18px', marginRight: '10px' }} 
                />
                 <small>{coin.market_cap_rank}</small>
              </td>
              <td>
                <img 
                  src={coin.image} 
                  alt="show coin icon" 
                  style={{ width: '20px', height: '20px', marginRight: '10px' }} 
                />
                <small className='fw-bold text-wrap' style={{ width: '1px' }}>{coin.name}</small>
                <small 
                  className='text-uppercase'  
                  style={{ maxWidth: '50px' }} >{coin.symbol}</small> 
                <small className={styles.buy}>Buy</small>
              </td>
              {/* <td>
                <small 
                  className='text-uppercase'  
                  style={{ maxWidth: '50px' }} >{coin.symbol}</small> 
                <small className={styles.buy}>Buy</small>
              </td> */}
              <td>
              <small>${NumberWithCommas(coin.current_price)}</small>
              </td>
              <td>
                <small 
                  style={{ color: `${coin.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }`}}>
                    {coin.price_change_percentage_1h_in_currency.toFixed(1)}%
                </small>
              </td>
              <td>
                <small 
                  style={{ color: `${coin.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red' }`}}>
                    {coin.price_change_percentage_24h_in_currency.toFixed(1)}%
                </small>
              </td>
              <td>
                <small 
                  style={{ color: `${coin.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }`}}>
                    {coin.price_change_percentage_7d_in_currency.toFixed(1)}%
                </small>
              </td>
              <td>
                <small>${NumberWithCommas(coin.total_volume)}</small>
              </td>
              <td>
                <small>${NumberWithCommas(coin.market_cap)}</small>
              </td>
              <td>Hello World</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}