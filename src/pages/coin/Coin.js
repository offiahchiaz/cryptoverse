import { useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 
{ 
  faAngleRight, faMessage, 
  faCaretUp, faCaretDown, 
  faArrowTurnUp, faArrowTurnDown,
  faArrowTurnRight, faBell, faStar
} from "@fortawesome/free-solid-svg-icons"
import { useFetch } from "../../hooks/useFetch"
import NumberWithCommas from "../../Helpers/NumberWithCommas";

import styles from './Coin.module.css'

export default function Coin() {
  const { id } = useParams()
  const [url, setUrl] = useState(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
  const {data: coin, isPending, error} = useFetch(url)
  return (
    <>
      <div className="container">
        <div className="row">
          { isPending && 
            (<div className="col-md-12 d-flex align-items-center mt-5">
              <strong>Loading...</strong>
              <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>)
            }
          {error && <div>{error}</div> }
        </div>
      </div>

      { coin && 
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-12 d-flex">
              <p>
                <Link className={styles.coinLink} to="/">Coin</Link>
                <FontAwesomeIcon style={{ paddingRight: '5px', paddingLeft: '5px' }} icon={faAngleRight} />
                { coin.name }
                &nbsp;Price
              </p>
              <small className={`ms-auto`}>
                <Link className={styles.feedbackLink} target="_blank" to="https://bit.ly/3MSiEGH">
                  <FontAwesomeIcon icon={faMessage} />
                  &nbsp;Give Feedback
                </Link>
              </small>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-8">
              <p><span className="badge bg-secondary">Rank #{ coin.market_cap_rank }</span></p>
              <div className="d-flex">
                <img 
                  src={coin.image.large} 
                  alt="show coin icon" 
                  style={{ width: '25px', height: '25px', marginRight: '10px', marginTop: '4px' }} 
                />
                <p className="fw-bold fs-5">{coin.name} <span className="text-uppercase">({coin.symbol})</span> </p>
              </div>
              <p>
                <span className="fw-bolder fs-2" style={{ marginRight: '5px' }}>${NumberWithCommas(parseFloat(coin.market_data.current_price.usd))}</span>
                <span className="fs-5" style={{ color: `${coin.market_data.price_change_percentage_24h >= 0 ? '#8dc647' : '#d9534f' }`}}>
                  { 
                    coin.market_data.price_change_percentage_24h >= 0 
                      ? <FontAwesomeIcon icon={faCaretUp} /> 
                      : <FontAwesomeIcon icon={faCaretDown} /> 
                  }
                  {coin.market_data.price_change_percentage_24h.toFixed(1)}%
                </span>
              </p>
              <p>
                <span>{coin.market_data.current_price.btc.toFixed(8)}&nbsp;BTC&nbsp;</span>
                <span style={{ color: `${coin.market_data.current_price.btc >= 0 ? '#8dc647' : '#d9534f' }`}}>
                  {coin.market_data.price_change_percentage_24h_in_currency.btc.toFixed(1)}%
                  { 
                    coin.market_data.current_price.btc >= 0 
                    ? <FontAwesomeIcon icon={faArrowTurnUp} /> 
                    : <FontAwesomeIcon icon={faArrowTurnDown} /> 
                  }
                </span>
              </p>
              
              <button type="button" className={`btn btn-outline-secondary ${styles.secBtn}`}>
                <FontAwesomeIcon icon={faArrowTurnRight} />
              </button>
              <button type="button" className={`btn btn-outline-secondary ${styles.secBtn}`}>
                <FontAwesomeIcon icon={faBell} />
              </button>
              <button type="button" className={`btn btn-outline-secondary ${styles.secBtn}`}>
                <FontAwesomeIcon icon={faStar} />
              </button>
              
            </div>
            <div className="col-md-4"></div>
          </div>
        </div> 
      }
  
    </>
    
  )
}
