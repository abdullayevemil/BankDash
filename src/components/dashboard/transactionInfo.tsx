import { TransactionInfo } from "@/types/transactionInfo";
import Image from "next/image";
import styled from "styled-components";

export default function TransactionInformation({
  iconbackground,
  iconUrl,
  name,
  date,
  amount,
}: TransactionInfo) {
  return (
    <div className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row gap-4 sm:gap-2 lg:gap-4 items-center">
        <Container
          iconbackground={iconbackground}
          className="rounded-full flex justify-center items-center p-4 sm:p-3 lg:p-4"
        >
          <Image className="w-5 h-5 sm:w-4 sm:h-4 lg:h-6 lg:w-6" width={22} height={22} src={iconUrl} alt="transaction icon" />
        </Container>

        <div>
          <div className="font-inter text-sm sm:text-small lg:text-base font-medium">{name}</div>

          <div className="font-inter text-xs lg:text-base font-medium text-primaryText">{date}</div>
        </div>
      </div>

      <div className={`font-inter text-cardBalanceTab lg:text-base font-medium ${amount < 0 ? 'text-negativePrice' : 'text-positivePrice'}`}>{amount < 0 ? `-$${-amount}` : `+$${amount}`}</div>
    </div>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
