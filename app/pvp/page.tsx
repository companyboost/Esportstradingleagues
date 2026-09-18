import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Icon";
import { Bracket, type Stage } from "@/components/Bracket";
import { EtpsCalculator } from "@/components/EtpsCalculator";
import { SectionHead, Formula } from "@/components/Sections";

export const metadata: Metadata = { title: "PvP" };

const stages: Stage[] = [
  { week: "Week 1", round: "Round of 64", alive: 64, unit: "Traders" },
  { week: "Week 2", round: "Round of 32", alive: 32, unit: "Traders" },
  { week: "Week 3", round: "Sweet 16", alive: 16, unit: "Traders" },
  { week: "Week 4", round: "Elite 8", alive: 8, unit: "Traders" },
  { week: "Week 5", round: "Final Four", alive: 4, unit: "Traders" },
  { week: "Week 6", round: "Champion­ship Match", alive: 1, unit: "Champion", final: true },
];

export default function PvpPage() {
  return (
    <>
      <section className="section first tint">
        <div className="wrap">
          <SectionHead eyebrow="PvP Trading Championship" title="Trade alone. Compete globally. Become a champion">
            The Esport Trading PvP Championship is the premier individual trading competition where traders compete head-to-head in a season-long battle for rankings, prize money and the title of PvP World Champion. Every trader begins with the same account balance and advances through a structured tournament based on performance and risk management.
          </SectionHead>

          <div className="sub rv">
            <h3>How it works</h3>
            <div>
              <p className="lede">Each quarter, 64 traders enter the Esport Trading Major Championship. Every competitor begins with the same account balance and is paired against another trader in a head-to-head matchup.</p>
              <p className="lede">The trader with the higher Esport Trading Performance Score (ETPS™) advances to the next round until a champion is crowned.</p>
            </div>
          </div>

          <div>
            <p className="eyebrow rv" style={{ marginBottom: "20px" }}>Quarterly major format · 64 traders to 1 champion</p>
            <Bracket
              stages={stages}
              total={64}
              label="Tournament progression: 64 traders, then 32, 16, 8, 4 and 1 champion"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Scoring" title="How traders are scored">
            The Esport Trading Performance Score (ETPS™) rewards disciplined trading, profitability and risk management. The trader with the higher ETPS advances.
          </SectionHead>
          <div className="formula">
            <Formula label="Formula">
              <p>Raw profit is not enough. Half of your maximum drawdown is subtracted from your return, so the trader who protects capital while growing it comes out ahead.</p>
            </Formula>
            <EtpsCalculator names={["Trader Alpha", "Trader Bravo"]} />
          </div>

          <div className="sub rv gap" style={{ borderBottom: "1px solid var(--line)" }}>
            <h3>Quarterly Major Championship</h3>
            <div>
              <p className="lede">The PvP Major Championship is the highest-profile quarterly event within the Esport Trading ecosystem.</p>
              <p className="lede">Elite traders compete for major prize money, rankings points and qualification opportunities for the Esport Trading World Championship.</p>
            </div>
          </div>

          <div className="next rv" style={{ borderTop: 0, paddingTop: 0 }}>
            <p>Next: what the Major pays</p>
            <div>
              <Link className="btn primary" href="/pvp-payouts">
                PvP payouts <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
