// export default function TabButton(props) {
//   function handleClick() {
//     console.log('Click');
//   }
//
//   return (
//     <li>
//       <button onClick={handleClick}>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({children, onClick, isSelected}) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onClick}>{children}</button>
    </li>
  );
}