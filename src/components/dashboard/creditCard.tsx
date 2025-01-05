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
      className={`shadow font-lato flex flex-col rounded-small md:rounded-medium lg:rounded-large ${theme === 'whiteCard' ? 'border border-border text-black ' : ' text-white '}` + className}
    >
      <div className="py-4 px-5 lg:p-6 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-row justify-between">
          <div>
            <div className={`text-cardBalanceTab lg:text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Balance</div>

            <div className="text-base lg:text-xl font-semibold">${balance}</div>
          </div>

          {theme === 'whiteCard' ? <DarkChipCardIcon className="w-7 h-7 lg:w-9 lg:h-9" /> : <ChipCardIcon className="w-7 h-7 lg:w-9 lg:h-9" />}
        </div>

        <div className="flex flex-row justify-left gap-12 md:gap-10 lg:gap-16">
          <div>
            <div className={`uppercase text-cardHolderTab lg:text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Card Holder</div>

            <div className="text-small lg:text-medium font-semibold">{cardHolder}</div>
          </div>

          <div>
            <div className={`uppercase text-cardHolderTab lg:text-xs ` + `${theme === 'whiteCard' ? 'text-whiteCardSecondaryForeground' : 'text-cardSecondaryForeground'}`}>Valid Thru</div>

            <div className="text-small lg:text-medium font-semibold">{validThru}</div>
          </div>
        </div>
      </div>

      <CardFooter
        theme={theme}
        className={`flex flex-row justify-between px-5 py-4 lg:px-6 lg:py-5 rounded-b-small md:rounded-b-medium lg:rounded-b-large ${theme === 'whiteCard' ? 'border-t border-border' : ''}`}
      >
        <div className="text-medium lg:text-large font-semibold">{cardNumber}</div>

        <div className="flex flex-row relative">
          <div className={`w-5 h-5 lg:w-8 lg:h-8 ${theme === 'whiteCard' ? 'bg-darkSemiTransparent' : 'bg-semiTransparent'} rounded-full absolute right-2.5 lg:right-4`}></div>

          <div className={`w-5 h-5 lg:w-8 lg:h-8 ${theme === 'whiteCard' ? 'bg-darkSemiTransparent' : 'bg-semiTransparent'} rounded-full absolute right-0`}></div>
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
