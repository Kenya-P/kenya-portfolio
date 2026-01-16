import { Moon, Sun, Laptop } from "lucide-react";
import useTheme from "../hooks/useTheme.js";

const options = [
  { key: "light", icon: Sun, label: "Light" },
  { key: "dark", icon: Moon, label: "Dark" },
  { key: "system", icon: Laptop, label: "System" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-1 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex gap-1">
        {options.map((o) => {
          const Icon = o.icon;
          const active = theme === o.key;
          return (
            <button
              key={o.key}
              onClick={() => setTheme(o.key)}
              className={[
                "rounded-xl px-3 py-2 text-sm transition",
                active
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
              ].join(" ")}
              aria-label={o.label}
            >
              <Icon size={16} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
