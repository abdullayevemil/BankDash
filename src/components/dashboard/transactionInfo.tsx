import { TransactionInfo } from "@/types/transactionInfo";
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
      <div className="flex flex-row gap-4">
        <Container
          iconbackground={iconbackground}
          className="rounded-full flex justify-center items-center p-4"
        >
          <img width={22} height={22} src={iconUrl} alt="transaction icon" />
        </Container>

        <div>
          <div className="font-inter text-base font-medium">{name}</div>

          <div className="font-inter text-base font-medium text-primaryText">{date}</div>
        </div>
      </div>

      <div className={`font-inter text-base font-medium ${amount < 0 ? 'text-negativePrice' : 'text-positivePrice'}`}>{amount < 0 ? `-$${-amount}` : `+$${amount}`}</div>
    </div>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
