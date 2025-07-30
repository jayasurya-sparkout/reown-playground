'use client';

import { Card, CardHeader, CardAction, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { useRouter, usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";

interface ProjectDetailsProps {
    isProject: boolean;
    project?: {
        id: string;
        name: string;
        tasks: number;
    }
    task?: {
        id: string;
        name: string;
        status: string;
        dueDate: string;
        assignee: string;
        priority: string;
        description: string;
    }
}

export default function ProjectCard({ isProject, project, task }: ProjectDetailsProps) {

    const router = useRouter();
    const pathname = usePathname();
    return (
        <Card className="cursor-pointer hover:shadow-xl transition-shadow gap-4"
            onClick={() => {
                if (isProject) {
                    router.push(`/projects/${project?.id}`);
                } else {
                    router.push(`${pathname}/tasks/${task?.id}`);
                }
            }}
        >
            <CardHeader>
                <CardTitle className="text-lg">
                    {isProject ? (
                        <div className="">{project?.name}</div>
                    ) : (
                        <div className="flex flex-nowrap justify-between gap-0">
                            <div className="">{task?.name}</div>
                            <CardAction className="pl-2">
                                <Badge variant="outline">
                                    {task?.priority}
                                </Badge>
                            </CardAction>
                        </div>
                    )}</CardTitle>
            </CardHeader>
            <CardContent>
                {isProject ? (
                    <p className="text-sm text-muted-foreground">{project?.tasks}</p>
                ) : (
                    <div className="flex flex-col gap-1">
                        <div className="">{task?.assignee}</div>
                        <div className="flex flex-nowrap gap-2 items-center">
                            <span className="text-sm">{task?.status}</span>
                            <span className="text-sm">{task?.dueDate}</span>
                        </div>
                        <CardDescription className="">
                            {task?.description}
                        </CardDescription>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};