import { cls } from "../styles/utils.js";

const variants = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800",
  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  full = false,
  type = "button",
}) {
  const common =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition shadow-sm";
  const className = cls(common, variants[variant], full && "w-full");

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
