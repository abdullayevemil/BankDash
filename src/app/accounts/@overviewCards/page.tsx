'use client';

import OverviewCard from "@/components/accounts/overviewCard";
import { OverviewCardProps } from "@/types/overviewCardData";
import styled from "styled-components";

const cards:OverviewCardProps[] = [
    {
        name: 'My Balance',
        amount: 12750,
        iconBackground: '#FFF5D9',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
    },
    {
        name: 'Income',
        amount: 5600,
        iconBackground: '#E7EDFF',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2058/2058416.png',
    },
    {
        name: 'Expense',
        amount: 3460,
        iconBackground: '#FFE0EB',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1600/1600225.png',
    },
    {
        name: 'Total Saving',
        amount: 7920,
        iconBackground: '#DCFAF8',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    },
]

export default function OverviewCards() {
    return (
        <ul className="flex flex-row gap-7 w-full">
            {cards.map((card, index) => <CardItem width={100 / cards.length} key={index}>
                <OverviewCard name={card.name} amount={card.amount} iconBackground={card.iconBackground} iconUrl={card.iconUrl}></OverviewCard>
            </CardItem>)}
        </ul>
    );
}

const CardItem = styled.li<{ width: number }>`
    width: ${(props) => props.width}%;
`;