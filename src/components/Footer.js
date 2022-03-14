import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={`container-fluid ${styles.footerDiv}`}>
      <div className="container">
        <h4>Cryptoverse</h4>
        <small>
          Cryptoverse provides a fundamental analysis of the crypto market. 
          In addition to tracking price, volume and market capitalisation, 
          Cryptoverse tracks community growth, open-source code development, 
          major events and on-chain metrics.
        </small>
      </div>
    </div>
  )
}
