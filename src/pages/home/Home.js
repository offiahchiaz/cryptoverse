import { useState } from "react"
import { Link } from "react-router-dom"
import CoinList from "../../components/CoinList"
import Stat from "../../components/Stat"

//import statToggle from '../../assets/toggle_button.svg'
//import toggle from '../../assets/toggle.svg'

import styles from './Home.module.css'


export default function Home() {
  // const [summary, setSummary] = useState(false)
  // const [stat, setStat] = useState(false)
  //const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d')
  //const { data: coins } = useFetch(url)


  

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

      
     
      
       <Stat />

      {/* List of coins */}
      <CoinList />
    
    </div>
  )
}
