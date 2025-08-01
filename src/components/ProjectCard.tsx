'use client';

import {
    Card,
    CardHeader,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "./ui/card";
import { useRouter, usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Star, Link as LinkLogo } from 'lucide-react';
import Link from "next/link";

interface AssignedUsers {
    name: string;
    email: string;
    designation: string;
}

interface ProjectDetailsProps {
    isProject: boolean;
    project?: {
        id: string;
        projctImage: string;
        name: string;
        shortName: string;
        logo: string;
        createdAt: string;
        description: string;
        users: AssignedUsers[];
        tasks: number;
    };
    task?: {
        id: string;
        name: string;
        status: string;
        dueDate: string;
        assignee: string;
        priority: string;
        description: string;
    };
}

export default function ProjectCard({ isProject, project, task }: ProjectDetailsProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (isProject) {
            router.push(`/projects/${project?.id}`);
        } else {
            router.push(`${pathname}/tasks/${task?.id}`);
        }
    };

    return (
        <Card
            onClick={handleClick}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 border rounded-xl overflow-hidden gap-0 p-0"
        >
            <CardHeader className="p-0 relative gap-0">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={project?.projctImage || "/placeholder.jpg"}
                        alt="Project"
                        fill
                        className="object-cover w-full h-full"
                    />
                </AspectRatio>

                {isProject && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl flex items-end p-4">
                        <div className="flex items-start justify-between w-full">
                            <div className="flex items-center gap-3">
                                <div className="relative h-8 w-8 rounded-md overflow-hidden bg-muted">
                                    <Image
                                        src={project?.logo || project?.projctImage || "/placeholder.jpg"}
                                        alt="Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-white">
                                    <div className="font-semibold">{project?.name}</div>
                                    <div className="text-sm text-slate-300">{project?.shortName}</div>
                                </div>
                            </div>
                            <div className="flex flex-nowrap gap-3">
                                <div className="shadow-lg rounded-md bg-transparent w-8 h-8 flex items-center justify-center">
                                    <LinkLogo className="w-4 h-4 text-white" />
                                </div>
                                <div className="shadow-lg rounded-md bg-transparent w-8 h-8 flex items-center justify-center">
                                    <Star className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </CardHeader>

            <CardContent className="p-4">
                {isProject ? (
                    <div className="text-sm text-muted-foreground">
                        <div className="space-y-1 mb-2 flex flex-nowrap justify-between">
                            <div className={`text-sm text-foreground/80 flex flex-nowrap w-full relative`}>
                                {project?.users?.length! > 0 ? (
                                    <div className="relative h-6">
                                        {project?.users.map((user, idx) => (
                                            <div
                                                key={idx}
                                                className={`text-sm text-white flex items-center justify-center h-6 w-6 rounded-full overflow-hidden absolute top-1/2 -translate-y-1/2 border border-white ${idx === 0 ? 'z-2' : 'z-3'}`}
                                                style={{ left: `${idx * 18}px`, backgroundColor: '#4d757c' }}
                                            >
                                                <span className="text-xs font-semibold">{user.name[0]}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="">
                                        <Badge className="" style={{ backgroundColor: '#4d757c' }}>Assign</Badge>
                                    </div>
                                )}
                            </div>
                            <div className="">
                                <Link href='/' className="text-[#4d757c] hover:font-bold">
                                    Join
                                </Link>
                            </div>
                        </div>
                        Tasks: <span className="font-medium">{project?.tasks}</span>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="flex justify-between items-start">
                            <div className="font-medium text-base">{task?.name}</div>
                            <CardAction>
                                <Badge variant="outline">{task?.priority}</Badge>
                            </CardAction>
                        </div>
                        <div className="text-sm text-muted-foreground">{task?.assignee}</div>
                        <div className="text-sm flex gap-2 text-muted-foreground">
                            <span>Status: {task?.status}</span>
                            <span>Due: {task?.dueDate}</span>
                        </div>
                        <CardDescription className="text-sm">
                            {task?.description}
                        </CardDescription>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
