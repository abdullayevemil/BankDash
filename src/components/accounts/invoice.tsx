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
      <div className="flex flex-row gap-4">
        <Container
          iconbackground={iconBackground}
          className="rounded-3xl flex justify-center items-center p-4"
        >
          <Image width={22} height={22} src={iconUrl} alt="transaction icon" />
        </Container>

        <div>
          <div className="font-inter text-base font-medium">{name}</div>

          <div className="font-inter text-base font-medium text-primaryText">
            {time}
          </div>
        </div>
      </div>

      <div
        className="font-inter text-base font-medium text-primaryText"
      >
        ${amount}
      </div>
    </div>
  );
}

const Container = styled.div<{ iconbackground: string }>`
  background-color: ${(props) => props.iconbackground};
`;
