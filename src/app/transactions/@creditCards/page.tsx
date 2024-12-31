import CreditCard from "@/components/dashboard/creditCard";

export default function CreditCards() {
  return (
    <>
      <div className="flex flex-row w-2/3 gap-[30]">
        <CreditCard
          className="w-1/2 text-white"
          cardHolder="Eddy Cusuma"
          balance={5756}
          validThru="12/22"
          cardNumber="3778 **** **** 1234"
          theme={"darkCard"}
        />

        <CreditCard
          className="w-1/2"
          cardHolder="Eddy Cusuma"
          balance={5756}
          validThru="12/22"
          theme={"whiteCard"}
          cardNumber="3778 **** **** 1234"
        />
      </div>
    </>
  );
}
