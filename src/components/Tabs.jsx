export default function Tabs({ children, buttons, ButtonsContainer = 'menu'}) {
  // const ButtonsContainer = buttonsContainer; // ajout dynamique des composants
  return <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
    {children}
  </>
}