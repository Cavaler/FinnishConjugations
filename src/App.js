import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Nouns from "./Nouns.js"
import Verbs from "./Verbs.js"

function App() {
  return (
    <div className="App">
  <Tabs>
    <TabList>
      <Tab>Nouns and Adjectives</Tab>
      <Tab>Verbs</Tab>
    </TabList>

    <TabPanel>
      <Nouns />
    </TabPanel>
    <TabPanel>
      <Verbs />
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default App;
