import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import NounsWidget from "./Nouns.js"
import VerbsWidget from "./Verbs.js"

function App() {
  return (
    <div className="App">
  <Tabs>
    <TabList>
      <Tab>Nouns and Adjectives</Tab>
      <Tab>Verbs</Tab>
    </TabList>

    <TabPanel>
      <NounsWidget />
    </TabPanel>
    <TabPanel>
      <VerbsWidget />
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default App;
