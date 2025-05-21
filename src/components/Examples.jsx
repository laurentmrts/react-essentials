import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples () {
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
    <Section title="Examples" id="examples">
      <Tabs buttonsContainer="menu" //peut aussi prendre les custom Components
        buttons={
        // grace au chevron vide on peut passer plusieurs composants avec la synthaxe jsx
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
          <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
          <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
        </>
      }>
        {tabContent}
      </Tabs>

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

    </Section>
  )
}