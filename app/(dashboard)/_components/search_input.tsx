"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import {
    ChangeEvent,
    useEffect,
    useState,
} from "react";

import { Input } from "@/components/ui/input";

export const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [debouncedValue, setDebounceValue] = useDebounceValue(value, 500)

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: "/",
            query: {
                search: debouncedValue,
            }
        }, { skipEmptyString: true, skipNull: true });
    
        router.push(url);
    }, [debouncedValue, router]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div  className="w-full relative">
            <Search
                className="absolute text-select-astral top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
            />
            <Input
                className="border-select-astral w-full max-w-[516px] pl-9"
                placeholder="Search boards"
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}