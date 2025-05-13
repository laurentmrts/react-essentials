export default function Section({ title, children, ...props }) {
// proxy props example
  return <section {...props}>
    <h2>{title}</h2>
    {children}
  </section>
}