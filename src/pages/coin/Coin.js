import { useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
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
            Price
          </p>
        </div>
      </div>
    </div>
  )
}
