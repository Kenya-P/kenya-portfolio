import { motion, AnimatePresence } from "framer-motion";
import useLocalStorage from "../hooks/useLocalStorage.js";
import Button from "./Button.jsx";

export default function LandingOverlay({ name, tagline }) {
  const [dismissed, setDismissed] = useLocalStorage("landingDismissed", false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur dark:bg-slate-950/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Welcome overlay"
        >
          <motion.div
            className="w-[min(680px,92vw)] rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-950"
            initial={{ y: 16, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 8, scale: 0.99, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
              {tagline}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              {name}
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Full-stack projects, case studies, and UI work—optimized for fast review.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                variant="primary"
                onClick={() => {
                  setDismissed(true);
                  // jump to projects for recruiters
                  setTimeout(() => {
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }, 50);
                }}
              >
                Enter Portfolio
              </Button>

              <Button
                variant="secondary"
                onClick={() => setDismissed(true)}
              >
                Skip
              </Button>

              <a
                href="#projects"
                className="ml-auto inline-flex items-center text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                onClick={() => setDismissed(true)}
              >
                View work immediately →
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500 dark:text-slate-400">
              Tip: This overlay shows once per device and can be skipped anytime.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
