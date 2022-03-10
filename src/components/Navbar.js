import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAppContext } from '../hooks/useAppContext'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAppContext()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Cryptoverse</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" aria-current="page" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Coins
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Market Cap Rank</Link></li>
                <li><Link className="dropdown-item" to="#">Recently Added</Link></li>
                <li><Link className="dropdown-item" to="#">Categories&nbsp;<span className="badge bg-danger">New</span></Link></li>
                <li><Link className="dropdown-item" to="#">Discover</Link></li>
                <li><Link className="dropdown-item" to="#">Large Movers</Link></li>
                <li><Link className="dropdown-item" to="#">High Volumes</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Derivaties</Link></li>
                <li><Link className="dropdown-item" to="#">Perpetuals</Link></li>
                <li><Link className="dropdown-item" to="#">Futures</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exchanges
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Spot</Link></li>
                <li><Link className="dropdown-item" to="#">DEX</Link></li>
                <li><Link className="dropdown-item" to="#">Derivatives</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              NFT
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">NFTs & Collectibles&nbsp;<span className="badge bg-danger">New</span></Link></li>
                <li><Link className="dropdown-item" to="#">NFT Spotlight</Link></li>
                <li><Link className="dropdown-item" to="#">NFT Related Coins</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Publications
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Crypto Reports</Link></li>
                <li><Link className="dropdown-item" to="#">Newsletter</Link></li>
                <li><Link className="dropdown-item" to="#">Podcast</Link></li>
                <li><Link className="dropdown-item" to="#">Blog</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Books</Link></li>
                <li><Link className="dropdown-item" to="#">How To NFT&nbsp;<span className="badge bg-danger">New</span></Link></li>
                <li><Link className="dropdown-item" to="#">How To Bitcoin</Link></li>
                <li><Link className="dropdown-item" to="#">How To DEFi</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Guides</Link></li>
                <li><Link className="dropdown-item" to="#">Buzz</Link></li>
                <li><Link className="dropdown-item" to="#">Glossary</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Earn Crypto</Link></li>
                <li><Link className="dropdown-item" to="#">Yield Farming</Link></li>
                <li><Link className="dropdown-item" to="#">Compare Coins</Link></li>
                <li><Link className="dropdown-item" to="#">Explore All Coins</Link></li>
                <li><Link className="dropdown-item" to="#">Bitcoin Halving</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Public Companies Treasury</Link></li>
                <li><Link className="dropdown-item" to="#">Bitcoin Treasury</Link></li>
                <li><Link className="dropdown-item" to="#">Etherum Treasury</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">In The News</Link></li>
                <li><Link className="dropdown-item" to="#">Bean Updates</Link></li>
                <li><Link className="dropdown-item" to="#">Latest News</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Premium Subscription</Link></li>
                <li><Link className="dropdown-item" to="#">Mobile App</Link></li>
                <li><Link className="dropdown-item" to="#">Store</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Developers</Link></li>
                <li><Link className="dropdown-item" to="#">Crypto API</Link></li>
                <li><Link className="dropdown-item" to="#">Widgets</Link></li>
                <li><Link className="dropdown-item" to="#">Request Form</Link></li>
                <li><Link className="dropdown-item" to="#">Methodology</Link></li>
              </ul>
            </li>
            
          </ul>
          <div className="d-flex">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { user && 
                  <li className="nav-item dropdown">
                  
                    <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Portfolio
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="#">All Portfolios&nbsp;<span className="badge bg-danger">New</span></Link></li>
                      <li><Link className="dropdown-item" to="#">My Portfolio</Link></li>
                      {/* <li><Link className="dropdown-item" to="#"></Link></li> */}
                    </ul>
                  </li> 
                }

                {!user && (
                  <>
                    <li className="nav-item"><Link className="nav-link active" to="/login" >Login</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/signup" >Sign Up</Link></li>
                  </>
                )}

                {user && 
                  <li className="nav-item dropdown">
                    <Link className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hello { user.displayName }
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="#">Portfolio&nbsp;<span className="badge bg-danger">New</span></Link></li>
                      <li><Link className="dropdown-item" to="#">Price Alert</Link></li>
                      <li><Link className="dropdown-item" to="#">Login and Security</Link></li>
                      <li><button className="dropdown-item btn" type="button" to="#" onClick={logout}>Sign Out</button></li>
                    </ul>
                  </li>
                }
              </ul>
            </div>

            <form>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
          </div>
          
        </div>
      </div>
    </nav>

      
  )
}

