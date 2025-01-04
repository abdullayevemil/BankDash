"use client";

import OverviewCard from "@/components/accounts/overviewCard";
import { OverviewCardProps } from "@/types/overviewCardData";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <ul className="flex flex-row gap-7 w-full">
      {cards.map((card, index) => (
        <CardItem width={100 / cards.length} key={index}>
          <OverviewCard
            id={card.id}
            name={card.name}
            amount={card.amount}
            iconBackground={card.iconBackground}
            iconUrl={card.iconUrl}
          ></OverviewCard>
        </CardItem>
      ))}
    </ul>
  );
}

const CardItem = styled.li<{ width: number }>`
  width: ${(props) => props.width}%;
`;
