import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/Icon";
import { SectionHead } from "@/components/Sections";

export const metadata: Metadata = { title: "About Us" };

const mission: { title: string; text: string; icon: IconName }[] = [
  { title: "Build organizations", text: "Found your own trading team, give it a name and an identity, and bring people together under one banner.", icon: "build" },
  { title: "Recruit talent", text: "Scout and sign the traders who fit your strategy and strengthen your roster.", icon: "scout" },
  { title: "Compete in leagues", text: "Enter monthly team leagues and quarterly PvP majors across Stocks, Futures and Crypto.", icon: "cal" },
  { title: "Gain recognition", text: "Climb the leaderboard, earn ranking points and build a reputation that follows you from season to season.", icon: "star" },
  { title: "Win prizes", text: "Monthly, quarterly and year-end prize pools, with $250,000 to each World Champion.", icon: "coins" },
  { title: "Have a trading career", text: "Turn competitive trading into a career, with a team, a season calendar and a record behind you.", icon: "brief" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section first tint">
        <div className="wrap">
          <SectionHead eyebrow="About us" title="About Esports Trading">
            Esports Trading was created to bring the excitement and structure of esports competition into the world of trading. Traditional trading is often a solitary endeavor. We believe trading can become a team sport where performance, strategy, education and competition come together.
          </SectionHead>

          <p className="eyebrow rv" style={{ marginBottom: "24px" }}>{"Our mission is to create the world's largest competitive trading ecosystem where traders can"}</p>
          <div className="rows" data-stagger>
            {mission.map((m, i) => (
              <div key={m.title} className="row">
                <span className="no">{`/${String(i + 1).padStart(3, "0")}/`}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <span className="go"><Icon name={m.icon} /></span>
              </div>
            ))}
          </div>

          <div className="banner rv zoom" role="img" aria-label="Concept view of an Esports Trading arena final, with traders on stage and live charts overhead"><i /></div>

          <div className="quote rv">
            <blockquote>{"“By combining community, competition and financial markets, we're building "}<em>the future of esports for traders.</em>”</blockquote>
            <cite>Esports Trading</cite>
          </div>
        </div>
      </section>
    </>
  );
}
