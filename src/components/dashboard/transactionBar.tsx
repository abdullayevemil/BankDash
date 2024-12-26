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
        <form onSubmit={submitTransaction} className="flex flex-row justify-between items-center gap-7">
            <label className="text-primaryText font-inter text-base">Write amount</label>

            <div  className="flex flex-row rounded-full bg-transactionBar">
                <input name="amount" placeholder="525.50" className="bg-transactionBar rounded-l-full px-7 py-4 placeholder-placeholder text-primaryText"/>

                <button type="submit" className="flex flex-row rounded-full px-6 py-3 gap-3 bg-sendButton items-center">
                    <span className="text-white font-inter font-medium text-base">Send</span>

                    <SendIcon width={26} height={22} color="white" />
                </button>
            </div>
        </form>
    );
}