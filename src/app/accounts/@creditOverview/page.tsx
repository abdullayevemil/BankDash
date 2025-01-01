import { CreditBarChart } from "@/components/accounts/creditBarChart";

export default function CreditOverview() {
  return (
    <div className="w-2/3 flex flex-col gap-5">
      <div className="font-inter text-large font-semibold flex justify-left items-center text-primary2">
        Debit & Credit Overview
      </div>

      <CreditBarChart></CreditBarChart>
    </div>
  );
}
