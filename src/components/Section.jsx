import { cls } from "../styles/utils.js";

export default function Section({ id, className, children }) {
  return (
    <section id={id} className={cls("py-16 md:py-20 scroll-mt-20", className)}>
      {children}
    </section>
  );
}
