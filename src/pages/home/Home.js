import { useState } from "react"
import { Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import CoinList from "../../components/CoinList"
//import Pagination from "../../components/Pagination"

//import statToggle from '../../assets/toggle_button.svg'
import toggle from '../../assets/toggle.svg'

import styles from './Home.module.css'


export default function Home() {
  const [summary, setSummary] = useState(false)
  const [stat, setStat] = useState(true)
  //const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
  //const { data: coins } = useFetch(url)

  console.log(summary)

  

  return (
    <div className={`container ${styles.home}`}>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Coins</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/coins/recently_added">Recently Added</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/coins/trending">Large Movers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true">
            Custom Tabs&nbsp;<span className="badge bg-danger">New</span>
          </Link>
        </li>
      </ul>

      <div className="row">
        <div className="col-md-12 mt-3 d-flex flex-row">
          <h4 className="me-3">Cryptocurrency Prices by Market Cap</h4>
          <div className={`togglemode ${styles.filtergreen}`}>
            <img 
              src={toggle} 
              onClick={() => setStat(!stat)} 
              alt="show stats toggle icon" style={{ cursor: 'pointer' }} />
          </div>
          <h6 className="px-1 mt-2 fw-bold">Show Stats</h6> 
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-md-12">
          <small>The global cryptocurrency market cap today is $1.91 Trillion, a &nbsp;
            <span>variable</span> change in the last 24 hours.&nbsp; 
            { !summary && <Link className={styles.link} onClick={() => setSummary(!summary)} to="">Read more</Link> }
            {summary && <Link className={styles.link} onClick={() => setSummary(!summary)} to="">Hide</Link> }
          </small>
        </div>
      </div>
      <div className="row mt-2">
        {summary && 
          <div className="col-md-7">
            <small>Total cryptocurrency trading volume in the last day is at $98.8 Billion. 
              Bitcoin dominance is at 40.7% and Ethereum dominance is at 17.1%. CoinGecko is now 
              tracking 13,078 cryptocurrencies. Popular trends of the industry right now are&nbsp; 
              <span className={styles.homecolor}>
                <Link to="/categories/decentralized-finance-defi">DeFi</Link></span> and&nbsp; 
              <span className={styles.homecolor}><Link to="/categories/gaming">Play to Earn</Link></span>.
            </small>
          </div>
        }
        
      </div>
      {stat && 
        <div className="row mt-2">
          <div className={`col-md-3 ${styles.stat} ${styles.statDanger}`}>
            <h4>$1,844,902,651,655</h4>
            <small>Market Capitalization</small>
          </div>
          <div className={`col-md-3 ${styles.stat} ${styles.statDanger}`}>
            <h4>$87,264,337,137</h4>
            <small>24h Trading Volume</small>
          </div>
          <div className={`col-md-3 ${styles.stat} ${styles.statDanger}`}>
            <h4>40.67%</h4>
            <small>Bitcoin Market Cap Dominance</small>
          </div>
          <div className={`col-md-3 ${styles.stat} ${styles.statDanger}`}>
            <h4>13076</h4>
            <small># of Coins</small>
          </div>
        </div>
      }

      {/* List of coins */}
      <CoinList />
    
    </div>
  )
}
