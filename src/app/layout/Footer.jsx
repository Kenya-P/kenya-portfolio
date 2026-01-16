import Container from "../../components/Container.jsx";

export default function Footer({ profile }) {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <div className="flex gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href={profile.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
