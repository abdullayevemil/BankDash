'use client';

import React, { FormEvent } from "react";
import SendIcon from '@/assets/dashboard/send.svg';
import { toast } from "react-toastify";

export default function TransactionBar() {
    const submitTransaction = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        
        const inputValue = (form.elements.namedItem("amount") as HTMLInputElement)?.value.trim();
        
        const regex = /^[0-9]+$/;
        
        if (regex.test(inputValue)) {
            toast.success('Transaction succeeded!');
        } else {
            toast.error('Transaction failed!');
        }
      };

    return (
        <form onSubmit={submitTransaction} className="flex flex-row justify-between items-center gap-5 lg:gap-7 w-full py-5 px-4 lg:px-6 lg:py-9">
            <label className="text-primaryText font-inter text-xs lg:text-base">Write amount</label>

            <div  className="flex flex-row rounded-full bg-transactionBar">
                <input name="amount" placeholder="525.50" className="w-20 md:w-28 lg:w-40 bg-transactionBar rounded-l-full px-4 py-3 lg:px-7 lg:py-4 placeholder-placeholder text-primaryText text-xs lg:text-base"/>

                <button type="submit" className="flex flex-row rounded-full p-3 lg:px-6 lg:py-3 gap-2 lg:gap-3 bg-sendButton items-center">
                    <span className="text-white font-inter font-medium text-xs lg:text-base">Send</span>

                    <SendIcon className="w-4 h-3 lg:w-6 lg:h-5" color="white" />
                </button>
            </div>
        </form>
    );
}