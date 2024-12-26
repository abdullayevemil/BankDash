"use client";

import styled from "styled-components";
import ChipCardIcon from "../../assets/dashboard/chip-card.svg";
import DarkChipCardIcon from "../../assets/dashboard/chip-card-dark.svg";

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  theme: "darkCard" | "whiteCard" | "lightBlueCard";
  className: string;
}

export default function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  theme,
  className = '',
}: CreditCardProps) {
  return (
    <Card
      theme={theme}
      className={`shadow font-lato flex flex-col rounded-3xl ${theme === 'whiteCard' ? 'border border-border ' : ' '}` + className}
    >
      <div className="p-6 flex flex-col gap-[34]">
        <div className="flex flex-row justify-between">
          <div>
            <div className={`text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Balance</div>

            <div className="text-xl font-semibold">${balance}</div>
          </div>

          {theme === 'whiteCard' ? <DarkChipCardIcon  width={35} height={35} /> : <ChipCardIcon width={35} height={35} />}
        </div>

        <div className="flex flex-row justify-left gap-[67]">
          <div>
            <div className={`uppercase text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Card Holder</div>

            <div className="text-medium font-semibold">{cardHolder}</div>
          </div>

          <div>
            <div className={`uppercase text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Valid Thru</div>

            <div className="text-medium font-semibold">{validThru}</div>
          </div>
        </div>
      </div>

      <CardFooter
        theme={theme}
        className={`flex flex-row justify-between px-6 py-[22] rounded-b-[25] ${theme === 'whiteCard' ? 'border-t border-border' : ''}`}
      >
        <div className="text-large font-semibold">{cardNumber}</div>

        <div className="flex flex-row relative">
          <div className={`w-[30] h-[30] ${theme === 'whiteCard' ? 'bg-darkSemiTransparent' : 'bg-semiTransparent'} rounded-full absolute right-[15]`}></div>

          <div className={`w-[30] h-[30] ${theme === 'whiteCard' ? 'bg-darkSemiTransparent' : 'bg-semiTransparent'} rounded-full absolute right-0`}></div>
        </div>
      </CardFooter>
    </Card>
  );
}

const Card = styled.div<{ theme: "darkCard" | "whiteCard" | "lightBlueCard" }>`
  background: ${(props) =>
    props.theme === "whiteCard"
      ? "white"
      : props.theme === "darkCard"
      ? `linear-gradient(
    135.29deg,
    rgb(76, 73, 237) 2.349%,
    rgb(10, 6, 244) 101.077%
  );`
      : `linear-gradient(
    107.38deg,
    #2d60ff 2.61%,
    #539bff 101.2%
  );`};
`;

const CardFooter = styled.div<{
  theme: "darkCard" | "whiteCard" | "lightBlueCard";
}>`
  background: ${(props) =>
    props.theme === "whiteCard"
      ? "white"
      : props.theme === "darkCard"
      ? `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );`
      : `linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );`};
`;
