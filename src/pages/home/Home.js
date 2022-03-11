import { useState } from "react"
import { Link } from "react-router-dom"

import statToggle from '../../assets/toggle_button.svg'
import toggle from '../../assets/toggle.svg'

import styles from './Home.module.css'


export default function Home() {
  const [summary, setSummary] = useState(false)

  const handleSummary = () => {
    if (summary) {
      return setSummary(true)
    } else {
      return setSummary(false)
    }
  }

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
          <div className=""><img src={toggle} alt="show stats toggle icon" /></div>
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
    </div>
  )
}
