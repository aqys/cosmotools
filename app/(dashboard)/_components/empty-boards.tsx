"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoard = () => {
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;
        
        mutate ({
            orgId: organization.id,
            title: "New board",
        })
        .then((id) => {
            toast.success("Board created!");
            // redirect til board/{id}
        })
        .catch(() => toast.error("Failed to create board"));
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src="/empty-boards.svg"
                height={280}
                width={280}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Start by creating a board for you organization.
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg" variant="astral" className='border-bright-astral-BLIND border-2'>
                    Create board
                </Button>
            </div>
        </div>
    );
};