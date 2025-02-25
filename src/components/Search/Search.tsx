import React from "react";
import { SearchIcon } from "../../assets";

function Search() {
    return(
        <div className="w-[485px] px-[15px] py-2 flex">
            <div className="flex h-[32px] w-full">
                <input type="text" placeholder="Tim truyen..." className="w-full p-2 outline-none" />
            </div>
            <div className="bg-white size-8 flex items-center justify-center">
                <SearchIcon className="stroke-black"></SearchIcon>
            </div>
        </div>
    )
}

export default Search