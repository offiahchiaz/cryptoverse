import { useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faMessage } from "@fortawesome/free-solid-svg-icons"
import { useFetch } from "../../hooks/useFetch"

import styles from './Coin.module.css'

export default function Coin() {
  const { id } = useParams()
  const [url, setUrl] = useState(`https://api.coingecko.com/api/v3/coins/${id}?localization=false`)
  const {data: coin, isPending, error} = useFetch(url)
  return (
    <div className="container">
      <div className="row mt-4">
        { isPending && 
          (<div className="col-md-12 d-flex align-items-center mt-5">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
          </div>)
        }
        {error && <div>{error}</div> }
        <div className="col-md-12 d-flex">
          <p>
            <Link className={styles.coinLink} to="/">Coin</Link>
            <FontAwesomeIcon style={{ paddingRight: '5px', paddingLeft: '5px' }} icon={faAngleRight} />
            { coin?.name }
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
    </div>
  )
}
