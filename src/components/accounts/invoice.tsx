import Image from "next/image";
import { Invoice } from "@/types/invoice";
import styled from "styled-components";

export default function InvoiceInfo({
  id,
  name,
  time,
  amount,
  iconUrl,
  iconBackground,
}: Invoice) {
  return (
    <div key={id} className="flex flex-row w-full justify-between items-center">
      <div className="flex flex-row gap-3 lg:gap-5 items-center">
        <Container
          iconbackground={iconBackground}
          className="rounded-xl sm:rounded-medium lg:rounded-large flex justify-center items-center p-3 lg:p-4"
        >
          <Image width={24} height={24} src={iconUrl} alt="transaction icon" className="w-5 h-5 lg:w-7 lg:h-7" />
        </Container>

        <div className="flex flex-col gap-1 lg:gap-[7px]">
          <div className="font-inter  text-sm sm:text-xs lg:text-base font-medium">{name}</div>

          <div className="font-inter  text-sm sm:text-xs lg:text-base font-medium text-primaryText">
            {time}
          </div>
        </div>
      </div>

      <div
        className="font-inter  text-sm sm:text-xs lg:text-base font-medium text-primaryText"
      >
        ${amount}
      </div>
    </div>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
