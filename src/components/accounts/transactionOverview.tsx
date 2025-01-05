"use client";

import useWindowWidth from "@/hooks/width";
import { Transaction } from "@/types/transaction";
import Image from "next/image";
import styled from "styled-components";

export default function TransactionsOverviewTable({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const width = useWindowWidth();

  return (
    <table className="w-full table-auto text-left">
      <tbody>
        {transactions.map(
          ({
            iconBackground,
            iconUrl,
            name,
            date,
            type,
            cardNumber,
            status,
            amount,
          }: Transaction) => (
            <tr key={`${name}-${date}`}>
              <td className="flex items-center gap-3 sm:gap-4 lg:gap-6 py-1">
                <Container
                  iconbackground={iconBackground}
                  className="rounded-xl sm:rounded-medium lg:rounded-large flex justify-center items-center p-3 lg:p-4"
                >
                  <Image width={25} height={25} src={iconUrl} alt="icon" className="w-5 h-5 lg:w-7 lg:h-7"/>
                </Container>
                
                <div className="flex flex-col gap-1 lg:gap-[7px]">
                  <div className="font-inter text-sm sm:text-xs lg:text-base font-medium">{name}</div>
                  
                  <div className="text-primaryText text-xs lg:text-base">{date}</div>
                </div>
              </td>
              
              {
                (width || 700) >= 640 ? <><td className=" py-1 text-primaryText text-xs lg:text-base">{type}</td>
              
                <td className=" py-1 text-primaryText text-xs lg:text-base">{cardNumber.slice(0, 4)} ****</td>
                
                <td className=" py-1 text-primaryText text-xs lg:text-base">{status}</td></> : null
              }
              
              <td
                className={`text-xs lg:text-base py-1 text-right ${
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
