"use client";

import { TransactionOverview } from "@/types/transactionOverview";
import Image from "next/image";
import styled from "styled-components";

export default function TransactionsOverviewTable({
  transactions,
}: {
  transactions: TransactionOverview[];
}) {
  return (
    <table className="w-full table-auto text-left">
      <tbody>
        {transactions.map(
          ({
            iconBackground,
            iconUrl,
            name,
            date,
            category,
            cardNumber,
            status,
            amount,
          }: TransactionOverview) => (
            <tr key={`${name}-${date}`}>
              <td className="flex items-center gap-8 py-[5]">
                <Container
                  iconbackground={iconBackground}
                  className="rounded-[20] flex justify-center items-center p-[15]"
                >
                  <Image width={25} height={25} src={iconUrl} alt="icon" />
                </Container>
                
                <div>
                  <div className="font-inter text-base font-medium">{name}</div>
                  
                  <div className="text-primaryText text-[15]">{date}</div>
                </div>
              </td>
              
              <td className=" py-[5] text-primaryText text-base">{category}</td>
              
              <td className=" py-[5] text-primaryText text-base">{cardNumber.slice(0, 4)} ****</td>
              
              <td className=" py-[5] text-primaryText text-base">{status}</td>
              
              <td
                className={` py-[5] text-right ${
                  amount < 0 ? "text-negativePrice" : "text-positivePrice"
                }`}
              >
                {amount < 0 ? `-$${-amount}` : `+$${amount}`}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
