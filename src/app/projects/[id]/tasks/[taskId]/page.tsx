'use client';

import { Card, CardHeader, CardAction, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { useRouter, usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function TaskIdPage() {

    return (
        <div className="h-full flex items-center">
            <Card className="max-w-2xl m-auto min-w-xl">
                <CardHeader className="gap-0 gap-x-2">
                    <div className="">
                        <CardTitle className="text-2xl">Title</CardTitle>
                        <CardDescription>Desc</CardDescription>
                    </div>
                    <CardAction className="gap-4 flex">
                        <Badge variant="outline" className="cursor-pointer">
                            Edit
                        </Badge>
                        <Badge variant="outline" className="cursor-pointer">
                            Delete
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                            <span className="min-w-[100px] font-medium">Status</span>
                            <span className="">: Completed</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="min-w-[100px] font-medium">Priority</span>
                            <span className="">: High</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="min-w-[100px] font-medium">Due Date:</span>
                            <span className="">: 2025-08-10</span>
                        </div>
                        <div className="flex flex-row gap-2">
                            <span className="min-w-[100px] font-medium">Assignee:</span>
                            <span className="">: Alice</span>
                        </div>

                        <div className="pt-4">
                            <h2 className="text-md font-semibold mb-1">Description:</h2>
                            <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                            </p>
                        </div>
                    </div>

                </CardContent>
                <CardFooter className="justify-center">
                    <Button size="sm" className="cursor-pointer">
                        Back To Projects
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )

}