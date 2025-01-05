"use client";

import OverviewCard from "@/components/accounts/overviewCard";
import { OverviewCardProps } from "@/types/overviewCardData";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OverviewCards() {
  const [cards, setCards] = useState<OverviewCardProps[]>([]);

  useEffect(() => {
    const fetchOverview = async () => {
      const response = await axios.get("/api/overview");

      setCards(response.data);
    };

    fetchOverview();
  }, [setCards]);

  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-7 w-full">
      <ul className="flex flex-row gap-7 w-full">
        {cards.slice(0, 2).map((card, index) => (
          <li className="w-1/2" key={index}>
            <OverviewCard
              id={card.id}
              name={card.name}
              amount={card.amount}
              iconBackground={card.iconBackground}
              iconUrl={card.iconUrl}
            ></OverviewCard>
          </li>
        ))}
      </ul>

      <ul className="flex flex-row gap-7 w-full">
        {cards.slice(2, 4).map((card, index) => (
          <li className="w-1/2" key={index}>
            <OverviewCard
              id={card.id}
              name={card.name}
              amount={card.amount}
              iconBackground={card.iconBackground}
              iconUrl={card.iconUrl}
            ></OverviewCard>
          </li>
        ))}
      </ul>
    </ul>
  );
}
