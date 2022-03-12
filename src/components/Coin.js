import star from '../assets/star.svg'

export default function Coin({ market_cap_rank, image, name, symbol, 
  current_price, price_change_percentage_1h_in_currency, 
  price_change_percentage_24h_in_currency, 
  price_change_percentage_7d_in_currency, total_volume, market_cap   }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1 d-flex">
          <img 
            src={star}  
            alt="show favourite toggle icon" 
            style={{ cursor: 'pointer' }} 
          />
          <small>{market_cap_rank}</small>
        </div>
        <div className="col-md-1 d-flex">
          <img src={image} alt="show coin icon" />
          <small className='fw-bold'>{name}</small>
        </div>
        <div className="col-md-1 d-flex">
          <small className='text-uppercase'>{symbol}</small>
          <small className='text-success fw-normal'>Buy</small>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-1">
          <small>{current_price}</small>
        </div>
        <div className="col-md-1">
          <small 
            style={{ color: `${price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }`}}>
              {price_change_percentage_1h_in_currency}
          </small>
        </div>
        <div className="col-md-1">
          <small 
            style={{ color: `${price_change_percentage_24h_in_currency > 0 ? 'green' : 'red' }`}}>
              {price_change_percentage_24h_in_currency}
          </small>
        </div>
        <div className="col-md-1">
          <small 
            style={{ color: `${price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }`}}>
              {price_change_percentage_7d_in_currency}
          </small>
        </div>
        <div className="col-md-1">
          <small>{total_volume}</small>
        </div>
        <div className="col-md-1">
          <small>{market_cap}</small>
        </div>
      </div>
    </div>
  )
}
