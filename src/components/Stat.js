import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import toggle from '../assets/toggle.svg'
import styles from './Stat.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp, faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'


export default function Stat() {
  const [summary, setSummary] = useState(false)
  const [stat, setStat] = useState(false)
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/global')
  const { data, isPending, error } = useFetch(url)

  return (
    <>
      <div className="row">
        { isPending && 
          (<div className="col-md-12 d-flex align-items-center mt-5">
            {/* <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div> */}
          </div>)
        }
        {error && <div>{error}</div> }

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
          <small>The global cryptocurrency market cap today is $1.91 Trillion, a&nbsp;
            <span style={{ color: `${data?.data?.market_cap_change_percentage_24h_usd > 0 ? '#8dc647' : '#d9534f' }`}}>
              { data?.data?.market_cap_change_percentage_24h_usd.toFixed(1) }%
              { data?.data?.market_cap_change_percentage_24h_usd > 0 ? <FontAwesomeIcon icon={faArrowTurnUp} /> : <FontAwesomeIcon icon={faArrowTurnDown} /> }
            </span>
            &nbsp;change in the last 24 hours.&nbsp; 
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

      { stat && 
        <div className="row mt-2">
          { data && (<>
          {/* {console.log(data)} */}
            <div className={`col-md-3 card ${styles.stat}`} style={{ paddingRight: '5px', borderLeftColor: `${data.data.market_cap_change_percentage_24h_usd > 0 ? '#8dc647' : '#d9534f' }` }}>
              <div className="card-body">
                <div className="d-flex">
                  <h5>$1,844,902,651,655</h5>
                  <span style={{ marginLeft: '10px', color: `${data.data.market_cap_change_percentage_24h_usd > 0 ? '#8dc647' : '#d9534f' }`}}>
                    { data.data.market_cap_change_percentage_24h_usd.toFixed(1) }%
                    { data.data.market_cap_change_percentage_24h_usd > 0 ? <FontAwesomeIcon icon={faArrowTurnUp} /> : <FontAwesomeIcon icon={faArrowTurnDown} /> }
                  </span>
                </div>
                <small>Market Capitalization</small>
              </div>
            </div>
            {/* {console.log('This is data', data.data.markets)} */}

            <div className={`col-md-3 card ${styles.stat}`} style={{  borderLeftColor: `${data.data.market_cap_change_percentage_24h_usd > 0 ? '#8dc647' : '#d9534f' }` }}>
              <div className="card-body">
                <h5>$77,096,602,614</h5>
                <small>24h Trading Volume</small>
              </div>
            </div>

            <div className={`col-md-3 card ${styles.stat}`} style={{  borderLeftColor: '#e5e7eb' }}>
              <div className="card-body">
                <h5>{ data.data.market_cap_percentage?.btc.toFixed(2) }%</h5>
                <small>Bitcoin Market Cap Dominance</small>
              </div>
            </div>
            
            <div className={`col-md-3 card ${styles.stat}`} style={{  borderLeftColor: '#e5e7eb' }}>
              <div className="card-body">
                <h4>{ data.data.active_cryptocurrencies }</h4>
                <small># of Coins</small>
              </div>
            </div>
          </>) }
          
        </div>
      }
    </>
  )
}
