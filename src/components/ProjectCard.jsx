import { motion } from "framer-motion";
import Button from "./Button.jsx";

export default function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {project.oneLiner}
          </p>
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
          {project.type}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, 6).map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <Button href={project.liveUrl} variant="primary" external>
            Live Demo
          </Button>
        ) : (
          <Button onClick={onOpen} variant="primary">
            Case Study
          </Button>
        )}
        <Button href={project.repoUrl} variant="secondary" external>
          Code
        </Button>
        <Button onClick={onOpen} variant="ghost">
          Case Study
        </Button>
      </div>
    </motion.div>
  );
}
