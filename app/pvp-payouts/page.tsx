import type { Metadata } from "next";
import { SectionHead, EntryFee, PrizePool, NextStrip } from "@/components/Sections";

export const metadata: Metadata = { title: "PvP Payouts" };

export default function PvpPayoutsPage() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <SectionHead eyebrow="PvP payouts" title="Prize structure">
            Competitors battle through a 64-trader elimination bracket for prize money, global ranking and qualification toward the Esport Trading PvP World Championship.
          </SectionHead>

          <EntryFee unit="trader">
            One entry fee, one shared starting balance, one bracket. Prize money goes to the top four finishers of each quarterly Major, and again at the year-end World Championship.
          </EntryFee>

          <PrizePool
            title="Quarterly Major awards"
            note="Paid every quarter"
            prizes={[
              { place: "Champion", amount: 250000 },
              { place: "Runner up", amount: 100000 },
              { place: "3rd place", amount: 50000 },
              { place: "4th place", amount: 25000 },
            ]}
          />

          <PrizePool
            title="World Championship awards"
            note="PvP World Championship"
            prizes={[
              { place: "World champion", amount: 250000 },
              { place: "Runner-up", amount: 100000 },
              { place: "3rd place", amount: 50000 },
              { place: "Fourth place", amount: 40000 },
            ]}
          />

          <NextStrip text="See how traders qualify and advance" href="/pvp" label="How PvP works" />
        </div>
      </section>
    </>
  );
}
