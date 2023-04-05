import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./TimeLine.css";

let newTweet = "";

export function TimeLine() {
  const [tweets, setTweets] = useState(["twt", "twt2", "tw3"]);
  const [newTweet, setNewTweet] = useState("");

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets]);
    setNewTweet("");
  }
  return (
    <main className="timeLine">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="new-tweet-form" action="">
        <label htmlFor="tweet">
          <img
            src="https://github.com/chenriqueend.png"
            alt="Carlos Henrique"
          />
          <textarea
            id=""
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>
        <button type="submit">Tweet</button>
      </form>
      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />;
      })}
    </main>
  );
}
