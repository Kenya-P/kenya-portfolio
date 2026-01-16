import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";

export default function Navbar({ links }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Portfolio
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#projects" variant="ghost">
              Work
            </Button>
            <Button href="#contact" variant="primary">
              Contact
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
