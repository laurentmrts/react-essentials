export default function Tabs({ children, buttons, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer; // ajout dynamique des composants
  return <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
  </>
}