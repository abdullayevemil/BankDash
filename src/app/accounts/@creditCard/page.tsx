import CreditCard from "@/components/dashboard/creditCard";

export default function CreditCards() {
  return (
      <div className="flex flex-col w-1/3 gap-5">
        <div className="flex flex-row w-full justify-between">
          <div  className="font-inter text-large font-semibold flex justify-left items-center text-primary2">My Card</div>

          <div className="font-inter text-sectionSubtitle font-semibold flex justify-right items-center px-2 text-primary2">See All</div>
        </div>

        <CreditCard
          className="w-full"
          cardHolder="Eddy Cusuma"
          balance={5756}
          validThru="12/22"
          theme={"lightBlueCard"}
          cardNumber="3778 **** **** 1234"
        />
      </div>
  );
}
