'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import ProjectCard from "@/components/ProjectCard";

export default function TaskPage () {
    
    const [showDialog, setShowDialog] = useState(false);

    const tasks = [
        { id: "1", name: "Fix sidebar collapse bug", status: "Completed", dueDate: "2025-08-01", assignee: "Alice Johnson", priority: "High", description: "Sidebar doesn't collapse properly on mobile view." },
        { id: "2", name: "Add dark mode toggle", status: "Completed", dueDate: "2025-08-05", assignee: "Bob Smith", priority: "Medium", description: "User should be able to switch between light and dark mode." },
        { id: "3", name: "Update project settings page UI", status: "Completed", dueDate: "2025-07-31", assignee: "Chitra Mehta", priority: "Low", description: "Align form inputs and make responsive." },
        { id: "4", name: "Implement task filters", status: "Completed", dueDate: "2025-08-01", assignee: "Hardin", priority: "Medium", description: "Allow users to filter tasks by status, assignee, and due date." },
        { id: "5", name: "Write API docs", status: "In Progress", dueDate: "2025-08-01", assignee: "Tessa", priority: "Medium", description: "Document all project-related API endpoints in Swagger." },
        { id: "6", name: "Optimize dashboard performance", status: "To Do", dueDate: "2025-08-10", assignee: "George", priority: "Medium", description: "Reduce load time by lazy loading charts and caching data." },
        { id: "7", name: "Redesign task detail view", status: "To Do", dueDate: "2025-08-02", assignee: "Rebbecca", priority: "Medium", description: "Login should redirect users to the correct dashboard based on role." },
        { id: "8", name: "Fix login redirect issue", status: "To Do", dueDate: "2025-08-01", assignee: "Catherine", priority: "Medium", description: "Improve layout and usability of the single task detail page." },
        { id: "9", name: "Add notification system", status: "To Do", dueDate: "2025-08-01", assignee: "Mia", priority: "High", description: "Users should receive email and in-app notifications for task updates." },
    ];

    return (
        <div className="p-6">

            <div className="flex justify-between items-baseline mb-6">
                <div className="w-3/4">
                    <h1 className="text-2xl font-semibold">Project Name : <span className="">Project Name</span></h1>
                    <p className="text-md text-muted-foreground">This project involves designing, building, and launching the new company dashboard with task management features and wallet integration</p>
                </div>
                <div className="w-1/4 text-right">
                    <Button onClick={() => setShowDialog(true)} className='cursor-pointer'>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Task
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tasks.map((task) => (
                    <ProjectCard isProject={false} key={task.id} task={task} />
                ))}
            </div>

        </div>
    )

}