"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
};

export const NewBoardButton = ({
    orgId,
    disabled,
}: NewBoardButtonProps) => {
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        mutate({
            orgId,
            title: "New Board",
        })
        .then((id) => {
            toast.success("Board created");
            // Redirect til board/{id}
        })
        .catch(() => toast.error("Failed to create board"))
    }

    return (
        <button
            disabled={pending || disabled}
            onClick={onClick}
            className={cn("col-span-1 aspect-[100/127] bg-dark-astral rounded-lg transition-all hover:bg-select-astral flex flex-col items-center justify-center py-6",
                (pending || disabled) && "opacity-75"
            )}
        >
        <div />
        <Plus className="h-12 w-12 text-white stroke-1"/>
        <p className="text-xs text-white font-normal">
            New Board
        </p>
        </button>
    )
}