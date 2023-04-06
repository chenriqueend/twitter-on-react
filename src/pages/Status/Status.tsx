import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [answers, setAnswer] = useState([
    {
      key: 1,
      name: "xablau",
      arroba: "@elonmusk",
      content: "falando qualquer merda",
      img: "https://github.com/chenriqueend.png",
      likes: 12,
      retweets: 2,
      comments: 4,
    },
    {
      key: 2,
      name: "xablau",
      arroba: "@elonmusk",
      content: "falasssndo qualquer merda",
      img: "https://github.com/chenriqueend.png",
      likes: 12,
      retweets: 2,
      comments: 4,
    },
    {
      key: 3,
      name: "xablau",
      arroba: "@elonmusk",
      content: "falando qualquer merda",
      img: "https://github.com/chenriqueend.png",
      likes: 12,
      retweets: 2,
      comments: 4,
    },
  ]);
  const [newAnswer, setNewAnswer] = useState("");

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    //@ts-ignore
    setAnswer([newAnswer, ...answers]);
    setNewAnswer("");
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key == "Enter" && (event.ctrlKey || event.metaKey)) {
      //@ts-ignore
      setAnswer([newAnswer, ...answers]);
      setNewAnswer("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content={""} key={0} name={""} arroba={""} />

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
            key=""
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            placeholder="Tweet your answer"
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span> Answer</span>
        </button>
      </form>
      {answers.map((answer) => {
        return (
          <Tweet
            key={answer.key}
            content={answer.content}
            arroba={answer.arroba}
            name={answer.name}
          />
        );
      })}
    </main>
  );
}
