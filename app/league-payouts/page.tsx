import type { Metadata } from "next";
import { SectionHead, EntryFee, Podium, PrizePool, NextStrip } from "@/components/Sections";

export const metadata: Metadata = { title: "League Payouts" };

export default function LeaguePayoutsPage() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <SectionHead eyebrow="League payouts" title="Prize structure">
            Monthly prizes are awarded while a portion of funds is reserved for the annual World Championship and Esport Trading operations.
          </SectionHead>

          <EntryFee unit="team">
            Every team pays the same entry fee and starts with the same account balance. Prize money is paid out monthly, with the balance building the year-end championship pool.
          </EntryFee>

          <Podium />

          <PrizePool
            title="Championship prize pool"
            note="Esport Trading World Championship"
            prizes={[
              { place: "World champion", amount: 250000 },
              { place: "Runner-up", amount: 100000 },
              { place: "Third place", amount: 50000 },
              { place: "Fourth place", amount: 40000 },
            ]}
          />

          <NextStrip text="See how teams qualify and advance" href="/league" label="How the League works" />
        </div>
      </section>
    </>
  );
}
