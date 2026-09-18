import Link from "next/link";

export function Cta() {
  return (
    <section className="cta" id="join">
      <div className="wrap">
        <div className="title">
          <h2>Ready to enter the arena<span className="slash">/</span></h2>
        </div>
        <div>
          <p>Build your team or join in a PvP. Every competitor starts equal. Prove your skills against traders worldwide.</p>
          <div className="actions">
            <Link className="btn primary" href="/league">Enter the League</Link>
            <Link className="btn ghost" href="/pvp">Join PvP</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="fpanel">
        <div className="wrap">
          <div className="foot">
            <div>
              <p>The competitive esport trading platform. Compete in Stocks, Futures and Crypto leagues or tournaments, climb the rankings and prove your skills against traders worldwide.</p>
            </div>
            <div>
              <h4>League</h4>
              <ul>
                <li><Link href="/league">How it works</Link></li>
                <li><Link href="/league-payouts">League Payouts</Link></li>
              </ul>
            </div>
            <div>
              <h4>PvP</h4>
              <ul>
                <li><Link href="/pvp">How it works</Link></li>
                <li><Link href="/pvp-payouts">PvP Payouts</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Esports Trading. All rights reserved.</span>
            <span>Trading involves risk of capital loss.</span>
            <a href="#top">Back to top ↑</a>
          </div>
          <div className="fbig"><span className="logo-img" role="img" aria-label="Esports Trading" /></div>
        </div>
      </div>
    </footer>
  );
}
