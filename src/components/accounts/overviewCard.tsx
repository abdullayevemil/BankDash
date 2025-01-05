'use client';

import { OverviewCardProps } from "@/types/overviewCardData";
import { Card } from "../ui/card";
import Image from "next/image";
import styled from "styled-components";

export default function OverviewCard({
  id,
  name,
  amount,
  iconBackground,
  iconUrl,
}: OverviewCardProps) {
  return (
    <Card key={id} className="flex flex-row justify-evenly gap-4 sm:gap-3 lg:gap-5 py-4 px-5 sm:p-5 lg:py-6 lg:px-9 items-center w-full h-full">
      <Container iconbackground={iconBackground} className="flex items-center justify-center rounded-full p-4 sm:p-5">
        <Image src={iconUrl} alt={`${name} icon`} width={28} height={28} className="w-5 h-5 lg:w-7 lg:h-7" />
      </Container>

      <div className="flex flex-col gap-1 lg:gap-2">
        <div className="font-inter text-primaryText text-xs lg:text-base">{name}</div>

        <div className="font-inter text-base lg:text-2xl font-semibold">${amount}</div>
      </div>
    </Card>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
