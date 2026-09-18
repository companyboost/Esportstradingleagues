import type { Metadata } from "next";
import Link from "next/link";
import { Icon, Arrow } from "@/components/Icon";
import { HeroVideo } from "@/components/HeroVideo";
import { Cells } from "@/components/Bracket";
import { LiveMatch } from "@/components/LiveMatch";
import { EtpsCalculator } from "@/components/EtpsCalculator";
import { SectionHead, Formula } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Esports Trading | The competitive esport trading platform",
};

const MARQUEE = ["Stocks", "Futures", "Crypto", "Leagues", "Tournaments", "Leaderboards", "PvP", "Teams"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ROWS = [
  { no: "/001/", href: "/league", title: "League", text: "How the monthly 32-team bracket works, how teams are scored, and the road to the World Championship." },
  { no: "/002/", href: "/league-payouts", title: "League Payouts", text: "Entry fee, monthly awards and the championship prize pool." },
  { no: "/003/", href: "/pvp", title: "PvP", text: "Trade alone. The quarterly 64-trader Major, week by week." },
  { no: "/004/", href: "/pvp-payouts", title: "PvP Payouts", text: "Quarterly Major awards and World Championship awards." },
  { no: "/005/", href: "/about", title: "About Us", text: "Why we are turning trading into a team sport." },
];

const FAQ = [
  { no: "001", q: "What is Esports Trading?", a: "The competitive esport trading platform. It transforms financial markets into a competitive team sport: build a team or join a PvP, compete in Stocks, Futures and Crypto leagues or tournaments, and climb the leaderboard against traders worldwide." },
  { no: "002", q: "What is the difference between the League and PvP?", a: "The League is for teams: 32 teams enter each month and play a four-week knockout. PvP is for individuals: 64 traders enter each quarterly Major and play a six-week single-elimination bracket." },
  { no: "003", q: "How is the winner of a matchup decided?", a: "By the Esport Trading Performance Score: ETPS = Return % − (0.5 × Max Drawdown %). Everyone starts with the same account balance, and the side with the higher ETPS advances." },
  { no: "004", q: "What does it cost to enter?", a: "$5,000 per team for the monthly League and $5,000 per trader for a PvP Major." },
  { no: "005", q: "How do teams reach the World Championship?", a: "The 11 monthly champions qualify automatically. The remaining 5 wildcard spots go to the highest-ranked non-champion teams, giving a 16-team championship bracket." },
  { no: "006", q: "What can I win?", a: "League months pay $40,000, $20,000 and $12,000 to the top three, and the League World Champion wins $250,000. A PvP Major pays $250,000 to the champion, then $100,000, $50,000 and $25,000." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroVideo />
        <div className="hero-scrim" />
        <div className="wrap">
          <p className="eyebrow"><span className="shiny">Welcome to Esports Trading · The competitive esport trading platform</span></p>
          <h1>Compete against the best traders<span className="slash">/</span></h1>
          <div className="hero-foot">
            <div>
              <p className="lede"><strong>Build your team or join in a PvP.</strong> Esports Trading transforms financial markets into a competitive team sport. Compete in Stocks, Futures and Crypto leagues or tournaments, climb leaderboard rankings and prove your skills against traders worldwide.</p>
              <div className="hero-cta">
                <Link className="btn primary" href="/league">Enter the League <Arrow /></Link>
                <Link className="btn ghost" href="/pvp">Join PvP</Link>
              </div>
            </div>
            <div className="hero-note">
              <span>Now competing in <b className="loop" data-words="Stocks,Futures,Crypto">Stocks</b></span>
              <span>Monthly league <b>32 teams</b></span>
              <span>Quarterly PvP major <b>64 traders</b></span>
              <span>World champion prize <b>$250,000</b></span>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>

      <section className="section" style={{ borderTop: 0 }}>
        <div className="wrap">
          <div className="stats" data-stagger>
            <div className="stat"><span className="chip"><Icon name="team" /></span><div className="n"><span data-count="32">32</span></div><div className="l">Teams per monthly league</div></div>
            <div className="stat"><span className="chip"><Icon name="user" /></span><div className="n"><span data-count="64">64</span></div><div className="l">Traders per quarterly major</div></div>
            <div className="stat"><span className="chip"><Icon name="ticket" /></span><div className="n">$<span data-count="5">5</span><em>K</em></div><div className="l">Entry fee per team or trader</div></div>
            <div className="stat"><span className="chip"><Icon name="trophy" /></span><div className="n">$<span data-count="250">250</span><em>K</em></div><div className="l">World champion prize</div></div>
          </div>

          <div className="head rv from-left gap">
            <div className="title">
              <p className="eyebrow">Two ways to compete</p>
              <h2>Choose your arena<span className="slash">/</span></h2>
            </div>
            <p className="lede">Whether you run a team or trade alone, every competitor starts with the same account balance. The only thing that separates you from the field is performance and risk management.</p>
          </div>

          <div className="arenas" data-stagger>
            <article className="arena rv">
              <div className="tag"><span><Icon name="team" /> Team competition</span><b>Monthly</b></div>
              <h3>32-Team League</h3>
              <p>Each month, 32 teams enter the Esport Trading League. Every team begins with the same account balance and is matched head-to-head against another team. Winners advance each week until a champion is crowned.</p>
              <ul>
                <li>$5,000 entry per team</li>
                <li>Four-week knockout bracket</li>
                <li>$40,000 to the monthly winner</li>
                <li>Path to the World Championship</li>
              </ul>
              <p className="cells-l"><span>32 teams</span><span>1 champion</span></p>
              <Cells total={32} alive={1} />
              <Link className="btn ghost sm" href="/league">How the League works</Link>
            </article>
            <article className="arena rv">
              <div className="tag"><span><Icon name="user" /> Individual competition</span><b>Quarterly</b></div>
              <h3>64-Trader PvP</h3>
              <p>The premier individual trading competition. Traders compete head-to-head in a season-long battle for rankings, prize money and the title of PvP World Champion.</p>
              <ul>
                <li>$5,000 entry per trader</li>
                <li>Six-week single elimination</li>
                <li>$250,000 to the Major champion</li>
                <li>Global rankings points</li>
              </ul>
              <p className="cells-l"><span>64 traders</span><span>1 champion</span></p>
              <Cells total={64} alive={1} className="c64" />
              <Link className="btn ghost sm" href="/pvp">How PvP works</Link>
            </article>
          </div>
        </div>
      </section>

      {/* match day: simulated live matchup */}
      <section className="section tint">
        <div className="wrap split">
          <div className="rv from-left">
            <p className="eyebrow">Match week</p>
            <h2>Every week is head-to-head<span className="slash">/</span></h2>
            <p className="lede">Every team begins with the same account balance and is matched head-to-head against another team. Winners advance each week until a champion is crowned.</p>
            <p className="lede">The score that decides it rewards both profitability and risk management, so the lead can change with every drawdown.</p>
          </div>
          <LiveMatch />
        </div>
      </section>

      {/* ETPS calculator */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="One score decides every match" title="Profit counts. Risk counts more">
            The Esport Trading Performance Score (ETPS™) rewards both profitability and risk management. Move the sliders and see who advances.
          </SectionHead>
          <div className="formula">
            <Formula>
              <p>Half of your maximum drawdown is subtracted from your return, so a higher return means nothing if it came with reckless risk. The sliders start on the worked example: Alpha wins 13 to 12.</p>
            </Formula>
            <EtpsCalculator names={["Team Alpha", "Team Bravo"]} />
          </div>
        </div>
      </section>

      {/* season calendar */}
      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="The season" title="One year. Two circuits">
            Over 11 months, monthly League champions qualify for the year-end Esport Trading World Championship. Each quarter, 64 traders enter a PvP Major.
          </SectionHead>
          <div className="scroller rv">
            <div className="season" role="img" aria-label="Season calendar: a monthly League from January to November, the World Championship at year end, and a PvP Major every quarter">
              <div className="lane">
                <span />
                {MONTHS.map((m) => (
                  <span key={m} className="mo">{m}</span>
                ))}
              </div>
              <div className="lane">
                <span className="lab"><Icon name="team" /> League</span>
                {Array.from({ length: 11 }, (_, i) => (
                  <span key={i} className="ev"><b>{String(i + 1).padStart(2, "0")}</b>32 teams</span>
                ))}
                <span className="ev final"><b>WC</b>16 teams</span>
              </div>
              <div className="lane">
                <span className="lab"><Icon name="user" /> PvP</span>
                {["Q1", "Q2", "Q3", "Q4"].map((q) => (
                  <span key={q} className="ev q"><b>{q} Major</b>64 traders · 6 weeks</span>
                ))}
              </div>
            </div>
          </div>
          <p className="legend rv"><span>01–11 · monthly League, each crowns a champion</span><span>WC · year-end World Championship, 11 champions + 5 wildcards</span></p>
        </div>
      </section>

      {/* numbered page rows */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Explore" title="Everything you need to know" />
          <div className="rows" data-stagger>
            {ROWS.map((r) => (
              <Link key={r.href} className="row" href={r.href}>
                <span className="no">{r.no}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className="go">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="FAQ" title="Quick answers" />
          <div className="faq" data-stagger>
            {FAQ.map((f, i) => (
              <details key={f.no} open={i === 0 ? true : undefined}>
                <summary><span className="no">{f.no}</span><h3>{f.q}</h3><span className="pm" /></summary>
                <p className="ans">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
