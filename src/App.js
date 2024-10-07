import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Item index={index} faq={faq} key={index} />
      ))}
    </div>
  );
}

function Item({ index, faq }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((selected) => !selected);
  }

  return (
    <>
      <div
        className={`item ${selected ? "open" : ""}`}
        key={index + 1}
        onClick={handleClick}
      >
        <div className="number">0{index + 1}</div>
        <div className="title">{faq.title}</div>
        <div className="icon">{selected ? "-" : "+"}</div>
        {selected ? <div className="content-box">{faq.text}</div> : null}
      </div>
    </>
  );
}
