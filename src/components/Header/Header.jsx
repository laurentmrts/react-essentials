import headerImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const randomDescription = reactDescriptions[genRandomInt(reactDescriptions.length-1)];
  return (
    <header>
      <img src={headerImg} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}