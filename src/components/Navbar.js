import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link class="navbar-brand" to="#">Cryptoverse</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" aria-current="page" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Coins
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">Market Cap Rank</Link></li>
                <li><Link class="dropdown-item" to="#">Recently Added</Link></li>
                <li><Link class="dropdown-item" to="#">Categories&nbsp;<span class="badge bg-danger">New</span></Link></li>
                <li><Link class="dropdown-item" to="#">Discover</Link></li>
                <li><Link class="dropdown-item" to="#">Large Movers</Link></li>
                <li><Link class="dropdown-item" to="#">High Volumes</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Derivaties</Link></li>
                <li><Link class="dropdown-item" to="#">Perpetuals</Link></li>
                <li><Link class="dropdown-item" to="#">Futures</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exchanges
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">Spot</Link></li>
                <li><Link class="dropdown-item" to="#">DEX</Link></li>
                <li><Link class="dropdown-item" to="#">Derivatives</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              NFT
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">NFTs & Collectibles&nbsp;<span class="badge bg-danger">New</span></Link></li>
                <li><Link class="dropdown-item" to="#">NFT Spotlight</Link></li>
                <li><Link class="dropdown-item" to="#">NFT Related Coins</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Publications
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">Crypto Reports</Link></li>
                <li><Link class="dropdown-item" to="#">Newsletter</Link></li>
                <li><Link class="dropdown-item" to="#">Podcast</Link></li>
                <li><Link class="dropdown-item" to="#">Blog</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Books</Link></li>
                <li><Link class="dropdown-item" to="#">How To NFT&nbsp;<span class="badge bg-danger">New</span></Link></li>
                <li><Link class="dropdown-item" to="#">How To Bitcoin</Link></li>
                <li><Link class="dropdown-item" to="#">How To DEFi</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Guides</Link></li>
                <li><Link class="dropdown-item" to="#">Buzz</Link></li>
                <li><Link class="dropdown-item" to="#">Glossary</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Resources
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">Earn Crypto</Link></li>
                <li><Link class="dropdown-item" to="#">Yield Farming</Link></li>
                <li><Link class="dropdown-item" to="#">Compare Coins</Link></li>
                <li><Link class="dropdown-item" to="#">Explore All Coins</Link></li>
                <li><Link class="dropdown-item" to="#">Bitcoin Halving</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Public Companies Treasury</Link></li>
                <li><Link class="dropdown-item" to="#">Bitcoin Treasury</Link></li>
                <li><Link class="dropdown-item" to="#">Etherum Treasury</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">In The News</Link></li>
                <li><Link class="dropdown-item" to="#">Bean Updates</Link></li>
                <li><Link class="dropdown-item" to="#">Latest News</Link></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link class="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="#">Premium Subscription</Link></li>
                <li><Link class="dropdown-item" to="#">Mobile App</Link></li>
                <li><Link class="dropdown-item" to="#">Store</Link></li>
                <li><hr class="dropdown-divider"/></li>
                <li><Link class="dropdown-item" to="#">Developers</Link></li>
                <li><Link class="dropdown-item" to="#">Crypto API</Link></li>
                <li><Link class="dropdown-item" to="#">Widgets</Link></li>
                <li><Link class="dropdown-item" to="#">Request Form</Link></li>
                <li><Link class="dropdown-item" to="#">Methodology</Link></li>
              </ul>
            </li>
            
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

