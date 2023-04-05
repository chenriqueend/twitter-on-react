import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [answers, setAnswer] = useState([
    "teu cu",
    "tas viajando é",
    "conversando merda",
  ]);
  const [newAnswer, setNewAnswer] = useState("");

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswer([newAnswer, ...answers]);
    setNewAnswer("");
  }
  function handleHoykeySubmit(event: KeyboardEvent) {
    if (event.key == "Enter" && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim impedit,
        sit, ad facere consequatur nisi praesentium cumque temporibus dolorem
        voluptates repellendus quaerat, aliquid nostrum! Atque ea ipsum qui
        deleniti saepe."
      />

      <Separator />
      <form onSubmit={createNewAnswer} className="answer-tweet-form" action="">
        <label htmlFor="tweet">
          <img
            src="https://github.com/chenriqueend.png"
            alt="Carlos Henrique"
          />
          <textarea
            onChange={(event) => {
              setNewAnswer(event.target.value);
            }}
            id=""
            value={newAnswer}
            onKeyDown={handleHoykeySubmit}
            placeholder="Tweet your answer"
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span> Answer</span>
        </button>
      </form>
      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />;
      })}
    </main>
  );
}
