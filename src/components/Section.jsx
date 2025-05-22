export default function Section({ title, children, ...props }) {
  // proxy props example
  // on recupere toutes les attributs html passes a l'appel de Section
  // ici on recupere id="examples et tous les autres qu'on pourrait passer ect...
  return <section {...props}>
    <h2>{title}</h2>
    {children}
  </section>
}