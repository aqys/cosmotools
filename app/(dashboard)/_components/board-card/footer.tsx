import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
    title: string;
    authorLabel: string;
    createdAtLabel: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
};

export const Footer = ({
    title,
    authorLabel,
    createdAtLabel,
    isFavorite,
    onClick,
    disabled
}: FooterProps) => {
    return (
        <div className="relative bg-black-astral p-3">
            <p className="text-[13px] truncate max-w-[100%-20px]">
                {title}
            </p>
            <p className="opacity-0 text-muted-foreground group-hover:opacity-100 transition-opacity text-[11px] truncate">
                {authorLabel}, {createdAtLabel}
            </p>
            <button
                disabled={disabled}
                onClick={onClick}
                className={cn("opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-bright-astral-BLIND",
                    disabled && "cursor-not-allowed opacity-75"
                )}
            >
                <Star
                    className={cn("h-5 w-5",
                        isFavorite && "fill-bright-astral-BLIND text-bright-astral-BLIND"
                    )}
                />
            </button>
        </div>
    );
};