import Modal from "./Modal.jsx";
import Button from "./Button.jsx";

export default function ProjectModal({ project, onClose }) {
  const open = Boolean(project);

  return (
    <Modal open={open} onClose={onClose} title={project?.title}>
      {project && (
        <div className="space-y-6">
          <p className="text-slate-600 dark:text-slate-300">{project.oneLiner}</p>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm font-medium">Problem</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {project.caseStudy.problem}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
              <p className="text-sm font-medium">Solution</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
            <p className="text-sm font-medium">Highlights</p>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={project.liveUrl} variant="primary" external>
              Live Demo
            </Button>
            <Button href={project.repoUrl} variant="secondary" external>
              GitHub Repo
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}
