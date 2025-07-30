'use client';

import { Card, CardHeader, CardAction, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

interface ProjectDetailsProps {
    project: {
        id: string;
        name: string;
        tasks: number;
    }
}

export default function ProjectCard( { project }: ProjectDetailsProps ) {
    
    const router = useRouter();

    return (
        <Card className="cursor-pointer hover:shadow-xl transition-shadow" 
            onClick={() => (
                router.push(`/projects/${project.id}`)
            )}
        >
             <CardHeader>
                <CardTitle className="text-lg">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{project.tasks} Tasks</p>
            </CardContent>
        </Card>
    );
};