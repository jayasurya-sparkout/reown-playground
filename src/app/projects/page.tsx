'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import CreateProjectDialog from '@/components/CreateProjectDialog';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  const [showDialog, setShowDialog] = useState(false);
  
  const projects = [
    { id: '1', name: 'Marketing Dashboard', tasks: 12 },
    { id: '2', name: 'Product Roadmap', tasks: 7 },
    { id: '3', name: 'Client Work', tasks: 20 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Your Projects</h1>
        <Button onClick={() => setShowDialog(true)} className='cursor-pointer'>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard isProject={true} key={project.id} project={project} />
        ))}
      </div>

      <CreateProjectDialog open={showDialog} onOpenChange={setShowDialog} />
    </div>
  );
}
