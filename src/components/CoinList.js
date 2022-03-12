import { useState } from "react"
import { useFetch } from "../hooks/useFetch"
import NumberWithCommas from "../Helpers/NumberWithCommas"

import star from '../assets/star.svg' 

import styles from './CoinList.module.css'


export default function CoinList() {
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
  const { data: coins } = useFetch(url)
  return (
    <div className="row">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Coin</th>
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
            <tr>
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
                <small className='fw-bold'>{coin.name}</small>
              </td>
              <td>
                <small 
                  className='text-uppercase'  
                  style={{ minWidth: '50px' }} >{coin.symbol}</small> 
                <small className={styles.buy}>Buy</small>
              </td>
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




<>
          {/* <div className="col-md-1 d-flex">
            <img 
              src={star}  
              alt="show favourite toggle icon" 
              style={{ cursor: 'pointer', width: '18px', height: '18px', marginRight: '10px' }} 
            />
            <small>{coin.market_cap_rank}</small>
          </div>
          <div className="col-md-2 d-flex">
            <img 
              src={coin.image} 
              alt="show coin icon" 
              style={{ width: '20px', height: '20px', marginRight: '10px' }} 
            />
            <small className='fw-bold'>{coin.name}</small>
          </div> */}
          {/* <div className="col-md-1 d-flex">
            <small 
              className='text-uppercase'  
              style={{ marginRight: '10px' }} >{coin.symbol}</small> 
            <small className={styles.buy}>Buy</small>
          </div> */}
          {/* <div className="col-md-2"></div>
          <div className="col-md-1">
            <small>${NumberWithCommas(coin.current_price)}</small>
          </div> */}
          {/* <div className="col-md-1">
            <small 
              style={{ color: `${coin.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }`}}>
                {coin.price_change_percentage_1h_in_currency.toFixed(1)}%
            </small>
          </div> */}
          {/* <div className="col-md-1">
            <small 
              style={{ color: `${coin.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red' }`}}>
                {coin.price_change_percentage_24h_in_currency.toFixed(1)}%
            </small>
          </div> */}
          {/* <div className="col-md-1">
            <small 
              style={{ color: `${coin.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }`}}>
                {coin.price_change_percentage_7d_in_currency.toFixed(1)}%
            </small>
          </div> */}
          {/* <div className="col-md-1">
            <small>${NumberWithCommas(coin.total_volume)}</small>
          </div> */}
          {/* <div className="col-md-1">
            <small>${NumberWithCommas(coin.market_cap)}</small>
          </div> */}
        </>
