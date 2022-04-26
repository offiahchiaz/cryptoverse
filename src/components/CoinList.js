import { useState } from "react"
import { Link } from "react-router-dom"
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { useFetch } from "../hooks/useFetch"
import NumberWithCommas from "../Helpers/NumberWithCommas"

import star from '../assets/star.svg' 

import styles from './CoinList.module.css'



export default function CoinList() {
  const [url, setUrl] = useState(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`)
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d
  const { data: coins, isPending, error } = useFetch(url)

  return (
  <div className="row mt-5">
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
            <th scope="col"></th>
            <th scope="col"></th>
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
              <td colSpan="3">
                <p style={{ width: '120px', float: 'left' }}>
                  <img 
                    src={coin.image} 
                    alt="show coin icon" 
                    style={{ width: '20px', height: '20px', marginRight: '10px' }} 
                  />
                  <small className="fw-bold text-wrap"><Link className={styles.coinLink} to={`/coins/${coin.id}`}>{coin.name}</Link></small>
                </p>
                <p  className='text-uppercase' style={{ width: '45px', float: 'left' }}>
                  {coin.symbol} 
                </p>
                <p className={styles.buy}>Buy</p>
                
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
              <td>
                <Sparklines data={coin.sparkline_in_7d.price} height={80}>
                <SparklinesLine style={{ strokeWidth: 3, fill: "none" }} color={`${ coin.sparkline_in_7d.price[0] < coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length - 1] ? 'green' : 'red' }`} />
                </Sparklines>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}