import React from "react";
import Link from "next/link";
import { serviceLocations } from "@/Data/data";

const CitesKeyword = () => {
    return (
        <div className="px-3 py-4 md:py-0 overflow-hidden mb-2 md:mb-10 md:px-8 lg:px-26">
            <h2 className="text-4xl my-2 text-center md:text-start md:text-5xl font-bold md:my-12 mb-6 text-black">
                Our Supply <span className="text-[#FAAC18]">Network</span>
            </h2>
            <div className="flex justify-center md:justify-start gap-2 flex-wrap text-black">
                {serviceLocations?.map(({ href, label, id }) => {
                    return (
                        <Link href={href} key={id} className="hover:font-bold text-sm hover:underline">
                            {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CitesKeyword;