'use client';

import { OverviewCardProps } from "@/types/overviewCardData";
import { Card } from "../ui/card";
import Image from "next/image";
import styled from "styled-components";

export default function OverviewCard({
  name,
  amount,
  iconBackground,
  iconUrl,
}: OverviewCardProps) {
  return (
    <Card className="flex flex-row justify-evenly gap-5 py-6 px-9 items-center w-full">
      <Container iconbackground={iconBackground} className="flex items-center justify-center rounded-full p-5">
        <Image src={iconUrl} alt={`${name} icon`} width={30} height={30} />
      </Container>

      <div className="flex flex-col gap-2">
        <div className="font-inter text-primaryText text-base">{name}</div>

        <div className="font-inter text-2xl font-semibold">${amount}</div>
      </div>
    </Card>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
