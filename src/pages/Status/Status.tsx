import { FormEvent, KeyboardEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const location = useLocation();
  const tweet = location.state;
  const [answers, setAnswer] = useState([
    {
      key: 1,
      name: "Elon Musk",
      arroba: "@elonmusk",
      content: "incredible!",
      img: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      likes: 12,
      retweets: 2,
      comments: 4,
    },
    
  ]);
  const [newAnswer, setNewAnswer] = useState("");

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    const answerObject = {
      key: Date.now(),
      name: "Carlos Henrique",
      arroba: "@chenriqueend",
      content: newAnswer,
      img: "https://github.com/chenriqueend.png",
      likes: 0,
      retweets: 0,
      comments: 0,
    };
    setAnswer([answerObject, ...answers]);
    setNewAnswer("");
  }
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key == "Enter" && (event.ctrlKey || event.metaKey)) {
      const answerObject = {
        key: Date.now(),
        name: "Carlos Henrique",
        arroba: "@chenriqueend",
        content: newAnswer,
        img: "https://github.com/chenriqueend.png",
        likes: 0,
        retweets: 0,
        comments: 0,
      };
      setAnswer([answerObject, ...answers]);
      setNewAnswer("");
    }
  }
  return (
    <main className="status">
      <Header title="Tweet" />
      {tweet && (
        <Tweet
          key={tweet.key}
          content={tweet.content}
          arroba={tweet.arroba}
          name={tweet.name}
          img={tweet.img}
          likes={tweet.likes}
          retweets={tweet.retweets}
          comments={tweet.comments}
          verified={tweet.verified}
          postImg={tweet.postImg}
        />
      )}
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
            img={answer.img}
          />
        );
      })}
    </main>
  );
}
