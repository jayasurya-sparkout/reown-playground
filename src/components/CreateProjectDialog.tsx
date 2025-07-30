'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

interface CreateProjectDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function CreateProjectDialog ({
    open,
    onOpenChange
}: CreateProjectDialogProps) {

    const [name, setName] = useState<string>("");

    const handleSubmit = () => {
        if (!name.trim()) return;

        console.log('Creating project:', name);
        setName('');
        onOpenChange(false);
    }
    
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                <Label htmlFor="name">Project Name</Label>
                <Input
                    id="name"
                    placeholder="Enter project name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                </div>
                <div className="flex justify-end gap-2">
                <Button variant="outline" className="cursor-pointer" onClick={() => onOpenChange(false)}>
                    Cancel
                </Button>
                <Button onClick={handleSubmit} className="cursor-pointer">Create</Button>
                </div>
            </DialogContent>
        </Dialog>
    )

}