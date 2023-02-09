import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "ewqr14",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want",
    },
    {
      id: "fd543h",
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript on any project you want",
    },
    {
      id: "fhcs43",
      label: "Can I use CSS on a project?",
      content: "You can use CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
