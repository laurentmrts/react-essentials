import { EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import {useState} from "react";
import CoreConcepts from "./components/CoreConcepts";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  )}

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
          {tabContent}

          {/*{!selectedTopic && <p>Please select a topic.</p>}*/}
          {/*{selectedTopic && (*/}
          {/*  <div id="tab-content">*/}
          {/*    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
          {/*    <p>{EXAMPLES[selectedTopic].description}</p>*/}
          {/*    <pre>*/}
          {/*    <code>*/}
          {/*      {EXAMPLES[selectedTopic].code}*/}
          {/*    </code>*/}
          {/*  </pre>*/}
          {/*  </div>*/}
          {/*)}*/}

          {/*{!selectedTopic ? (*/}
          {/*  <p>Please select a topic.</p>*/}
          {/*): (*/}
          {/*  <div id="tab-content">*/}
          {/*    <h3>{EXAMPLES[selectedTopic].title}</h3>*/}
          {/*    <p>{EXAMPLES[selectedTopic].description}</p>*/}
          {/*    <pre>*/}
          {/*      <code>*/}
          {/*        {EXAMPLES[selectedTopic].code}*/}
          {/*      </code>*/}
          {/*    </pre>*/}
          {/*  </div>*/}
          {/*)}*/}
        </section>
      </main>
    </>
  );
}

export default App;
