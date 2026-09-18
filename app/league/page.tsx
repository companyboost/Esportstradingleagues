import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { Bracket } from "@/components/Bracket";
import { EtpsCalculator } from "@/components/EtpsCalculator";
import { SectionHead, Formula, NextStrip } from "@/components/Sections";

export const metadata: Metadata = { title: "League" };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
const WILDCARDS = [1, 2, 3, 4, 5];

const POINTS = [
  { result: "Champion", width: "100%", points: "Auto qualifies", top: true },
  { result: "Runner-Up", width: "100%", points: "100" },
  { result: "Final Four", width: "75%", points: "75" },
  { result: "Elite 8", width: "50%", points: "50" },
  { result: "Sweet 16", width: "25%", points: "25" },
  { result: "Round of 32", width: "10%", points: "10" },
];

export default function LeaguePage() {
  return (
    <>
      <section className="section first tint">
        <div className="wrap">
          <SectionHead eyebrow="League" title="How it works">
            Each month, 32 teams enter the Esport Trading League. Every team begins with the same account balance and is matched head-to-head against another team. Winners advance each week until a champion is crowned.
          </SectionHead>

          <div>
            <p className="eyebrow rv" style={{ marginBottom: 20 }}>Monthly league format · 32 teams to 1 champion</p>
            <Bracket
              total={32}
              label="Bracket progression: 32 teams, then 16, 8, 4 and 1 champion"
              stages={[
                { week: "Week 1", round: "Round of 32", alive: 32, unit: "Teams" },
                { week: "Week 2", round: "Sweet 16", alive: 16, unit: "Teams" },
                { week: "Week 3", round: "Elite 8", alive: 8, unit: "Teams" },
                { week: "Week 4", round: "Final Four and Champion­ship", alive: 4, unit: "Teams" },
                { week: "Winner", round: "Monthly Champion", alive: 1, unit: "Champion", final: true },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Scoring" title="How teams are scored">
            The Esport Trading Performance Score (ETPS™) rewards both profitability and risk management. The team with the higher ETPS advances.
          </SectionHead>
          <div className="formula">
            <Formula>
              <p>{"Max Drawdown is the largest peak-to-trough decline in the team's account during the round. Half of it is deducted from the return, so a higher return means nothing if it came with reckless risk."}</p>
            </Formula>
            <EtpsCalculator names={["Team Alpha", "Team Bravo"]} />
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Year end" title="Esport World Championship">
            Over 11 months, monthly champions qualify for the year-end Esport Trading World Championship. 11 monthly champions plus five wildcard teams create a 16-team championship bracket.
          </SectionHead>

          <p className="eyebrow rv" style={{ marginBottom: 20 }}>Wildcard qualification system</p>
          <div className="paths" data-stagger>
            <div className="path rv">
              <span className="chip"><Icon name="trophy" /></span>
              <p className="eyebrow">Automatic berths</p>
              <div className="slots"><em>11</em> champions</div>
              <p>The 11 monthly champions automatically qualify for the Esport Trading World Championship.</p>
            </div>
            <div className="path rv">
              <span className="chip"><Icon name="ticket" /></span>
              <p className="eyebrow">Wildcard berths</p>
              <div className="slots"><em>5</em> wildcards</div>
              <p>The remaining 5 wildcard spots go to the highest-ranked non-champion teams based on their cumulative annual ETPS.</p>
            </div>
          </div>

          <p className="eyebrow rv" style={{ marginTop: 56 }}>The 16-team championship bracket</p>
          <div
            className="board"
            data-stagger
            role="img"
            aria-label="Sixteen World Championship berths: eleven monthly champions from January to November and five wildcards"
          >
            {MONTHS.map((m) => (
              <div key={m} className="slot"><small>Champion</small><b>{m}</b></div>
            ))}
            {WILDCARDS.map((n) => (
              <div key={n} className="slot wc"><small>Wildcard</small><b>WC {n}</b></div>
            ))}
          </div>

          <div className="blk rv">
            <h3>Annual wildcard standings <span>For every monthly competition, teams earn Wildcard Points</span></h3>
            <div className="bars" role="table" aria-label="Wildcard points by result">
              <div className="bars-h" role="row"><span role="columnheader">Result</span><span role="columnheader">Points</span></div>
              {POINTS.map((p) => (
                <div key={p.result} className={`bar-r${p.top ? " top" : ""}`} role="row">
                  <span className="k" role="cell">{p.result}</span>
                  <span className="tr" aria-hidden="true"><u style={{ width: p.width }} /></span>
                  <span className="v" role="cell">{p.points}</span>
                </div>
              ))}
            </div>
            <p className="note">At the end of November: 11 champions = automatic berths<br />Top 5 non-champions by wildcard points = wildcard berths</p>
          </div>

          <NextStrip text="Next: what the League pays" href="/league-payouts" label="League payouts" primary />
        </div>
      </section>
    </>
  );
}
