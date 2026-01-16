import { useMemo, useState } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import LandingOverlay from "../../components/LandingOverlay.jsx";
import Section from "../../components/Section.jsx";
import Container from "../../components/Container.jsx";
import Button from "../../components/Button.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import ProjectModal from "../../components/ProjectModal.jsx";
import DesignCard from "../../components/DesignCard.jsx";
import ThemeToggle from "../../components/ThemeToggle.jsx";

import profile from "../../content/profile.js";
import projects from "../../content/projects.js";
import designs from "../../content/design.js";

export default function Shell() {
  const [activeProject, setActiveProject] = useState(null);

  const featured = useMemo(
    () => projects.filter((p) => p.featured),
    []
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <LandingOverlay name={profile.name} tagline={profile.tagline} />

      <Navbar links={profile.nav} />
      <div className="fixed right-5 bottom-5 z-40">
        <ThemeToggle />
      </div>

      {/* HERO */}
      <Section id="top" className="pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
                {profile.badge}
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                {profile.name}
                <span className="block text-slate-600 dark:text-slate-300">
                  {profile.role}
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                {profile.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="#projects" variant="primary">
                  View Projects
                </Button>
                <Button href={profile.resumeUrl} variant="secondary" external>
                  Download Resume
                </Button>
                <Button href={profile.githubUrl} variant="ghost" external>
                  GitHub
                </Button>
                <Button href={profile.linkedinUrl} variant="ghost" external>
                  LinkedIn
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {profile.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                  >
                    <p className="text-sm font-medium">{h.title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {h.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: “premium” card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  Tech Focus
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-900">
                  <p className="text-sm font-medium">Currently building</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {profile.current}
                  </p>
                </div>

                <div className="mt-6">
                  <Button href="#contact" variant="primary" full>
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROJECTS */}
      <Section id="projects">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                The same projects listed on my resume, with clear outcomes and stack details.
              </p>
            </div>
            <Button href={profile.githubUrl} variant="ghost" external>
              View all on GitHub
            </Button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} onOpen={() => setActiveProject(p)} />
            ))}
          </div>
        </Container>
      </Section>

      {/* DESIGN */}
      <Section id="design">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight">
            Design & UI
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Selected UI work (Figma, components, responsive layouts).
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {designs.map((d) => (
              <DesignCard key={d.title} item={d} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
              {profile.about}
            </p>
          </div>
        </Container>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <Container>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Want to talk about a role or a project? Email me and I’ll respond quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`} variant="primary">
                Email Me
              </Button>
              <Button href={profile.linkedinUrl} variant="secondary" external>
                LinkedIn
              </Button>
              <Button href={profile.resumeUrl} variant="ghost" external>
                Resume
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer profile={profile} />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
