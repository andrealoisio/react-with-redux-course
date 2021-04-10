import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framwork",
  },

  {
    title: "Why use React",
    content: "React is a favorite JS library among enginners",
  },
  {
    title: "How do you use REact",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Yellow",
    value: "yellow",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
        <div>
          <Header />
          <Route path="/">
            <Accordion items={items} />
          </Route>
          <Route path="/list">
            <Search />
          </Route>
          <Route path="/dropdown">
            <Dropdown
             label="Select a color"
             options={options}
             selected={selected}
             onSelectedChange={setSelected}
             />
          </Route>
          <Route path="/translate">
            <Translate />
          </Route>
        </div>
    </div>
  );
};

export default App;
