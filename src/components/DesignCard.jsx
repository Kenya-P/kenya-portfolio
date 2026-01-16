export default function DesignCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-950"
    >
      <p className="text-sm font-medium">{item.title}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-600 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
        View →
      </p>
    </a>
  );
}
