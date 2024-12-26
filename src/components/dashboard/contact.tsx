import Image from "next/image";
import React from "react";

interface Props {
    imageUrl: string;
    name: string;
    position: string;
}

export default function Contact({ imageUrl, name, position }: Props) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center focus:font-bold hover:cursor-pointer" tabIndex={0}>
            <Image width={70} height={70} className="w-[70] h-[70] rounded-full object-cover overflow-hidden" src={imageUrl} alt="contact photo"/>

            <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-center font-inter text-base text-contactName">{name}</div>

                <div className="text-center font-inter text-base text-primaryText">{position}</div>
            </div>
        </div>
    );
}
