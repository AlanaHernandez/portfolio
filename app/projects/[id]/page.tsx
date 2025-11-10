import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import ClientProjectPage from "./client-page";

export const dynamic = 'force-dynamic';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ClientProjectPage project={project} />;
}

