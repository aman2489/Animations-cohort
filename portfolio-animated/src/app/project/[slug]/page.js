import ProjectPage from "@/components/ProjectPage";
import { projects } from "@/data/projects";

const page = async ({params}) => {

  const {slug} = await params;

  const index = projects.findIndex(p => p.slug === slug);

  const project = projects[index];

  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <ProjectPage project={project} nextProject={nextProject} />
    </>
  )
}

export default page
