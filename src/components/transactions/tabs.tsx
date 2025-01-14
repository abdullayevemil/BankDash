"use client";

import { Dispatch, SetStateAction } from "react";

interface Props {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const TrasactionTypeTabs = ({ activeTab, setActiveTab } : Props) => {
  const tabs = [
    { id: "all", label: "All Transactions" },
    { id: "income", label: "Income" },
    { id: "expense", label: "Expense" },
  ];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-small lg:text-base font-medium focus:outline-none transition-all duration-300 ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrasactionTypeTabs;
