import { useState } from "react"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faListAlt, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { useFetch } from "../hooks/useFetch"
// import { CoinConverter } from "../Helpers/CoinConverter";

import styles from './TrendingCoin.module.css'

export default function TrendingCoin() {
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/search/trending')

  const { data: trendingCoins, isPending, error } = useFetch(url);

   
  return (
    <div className="container mt-5">
      <p className="fw-bold fs-4">Trending Coins</p>

      <div className="row">
        {trendingCoins && trendingCoins.coins.map((trendingCoin) => (
          <div className="card" style={{ width: '15rem', height: '130px', marginRight: '8px', marginLeft: '8px', marginTop: '8px' }} key={trendingCoin.item.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                <img 
                    src={trendingCoin.item.large} 
                    alt="show coin icon" 
                    style={{ width: '30px', height: '30px', marginRight: '10px', marginTop: '10px' }} 
                  />
                    <small>{trendingCoin.item.name}<br /> $1.985627</small> 
                </div>
                <div></div>
              </div>
            </div>
          </div>
        ))
          
        }

        

          <div className="card text-white" style={{ width: '15rem', marginRight: '8px', marginLeft: '8px', marginTop: '8px' }}>
            <Link to={'/'} target="_blank" className={styles.linkBg}>
              <img src="https://static.coingecko.com/s/more_coins_bg_image-fae6b7ef974cae0d8d6b551ad66e82306f47829318211cbc7e768027df24c513.png" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <div className="d-flex justify-content-start">
                  <p style={{ marginRight: '4px' }}><FontAwesomeIcon icon={faSearch} /></p>
                  <small>More Coins</small>
                </div>
              </div>
            </Link>
          </div>

          <div className="card text-white" style={{ width: '15rem', marginRight: '8px', marginLeft: '8px', marginTop: '8px' }}>
            <Link to={'/'} target="_blank" className={styles.linkBg}>
              <img src="https://static.coingecko.com/s/top_categories_bg-2760b2e3b4a8d0d1c61f67ebd1bdb074044b42fe919ae4607041e1aa5087c1c5.png" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <div className="d-flex justify-content-start">
                  <p style={{ marginRight: '4px' }}><FontAwesomeIcon icon={faCalendarPlus} /></p>
                  <small>Recently Added</small>
                </div>
              </div>
            </Link>
          </div>

          <div className="card text-white" style={{ width: '15rem', marginRight: '8px', marginLeft: '8px', marginTop: '8px' }}>
            <Link to={'/'} target="_blank" className={styles.linkBg}>
              <img src="https://static.coingecko.com/s/recently_added_bg-62a798739235c30979d3f98563ce72825269f417151c0a0bc1ba2ae745847cc8.png" class="card-img" alt="..." />
              <div class="card-img-overlay">
                <div className="d-flex justify-content-start">
                  <p style={{ marginRight: '4px' }}><FontAwesomeIcon icon={faListAlt} /></p>
                  <small>Top Categories</small>
                </div>
              </div>
            </Link>
          </div>

      </div>
        
    </div>
  )
}
