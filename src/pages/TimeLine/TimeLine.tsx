import { FormEvent, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Separator } from "../../components/Separator/Separator";
import { Tweet } from "../../components/Tweet/Tweet";
import "./TimeLine.css";

export function TimeLine() {
  const [tweets, setTweets] = useState([
    {
      key: 35,
      name: "T",
      arroba: "@tylerthecreator",
      content: "if the world was ending, i think i would grab some Cinnamon Toast Crunch, a bunch of water, and i'd probably just... I'd probably go crazy.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg/1200px-Tyler_the_Creator_%2852163761341%29_%28cropped%29.jpg",
      likes: "42.3k",
      retweets: "32.1k",
      comments: "17.4k",
      verified: true,
    },
    {
      key: 24,
      name: "CHOQUEI",
      arroba: "@choquei",
      content:
        "🚨FOFOCA: Miley Cyrus x Dua Lipa \n Entenda como a aparente amizade se transformou em uma guerra fria nos bastidores da indústria musical. Pegue a pipoca, compartilhe e siga o fio.",
      img: "https://pbs.twimg.com/profile_images/1624042710037299200/_wiCdKIW_400x400.jpg",
      likes: "832",
      retweets: "127",
      comments: "38",
      verified: true,
      postImg: "src/assets/imgs/dualipa-treta.jpg",
    },
    {
      key: 12,
      name: "Elon Musk",
      arroba: "@elonmusk",
      content:
        "My fortune is from an inheritance based on the enslavement of south african peoples",
      img: "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
      likes: "962.6k",
      retweets: "476.9k",
      comments: "129.1k",
      verified: false,
    },
    {
      key: 36,
      name: "Jair M. Bolsonaro",
      arroba: "@jairbolsonaro",
      content: "Finalmente descobri o que é golden shower 😎",
      img: "https://pbs.twimg.com/profile_images/1614784189462618112/EUGqFFah_400x400.jpg",
      likes: "12.6k",
      retweets: "8.4k",
      comments: "11.2k",
      verified: true,
    },  
  ]);
  const [newTweet, setNewTweet] = useState("");

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    const tweetObject = {
      key: Date.now(),
      name: "Carlos Henrique",
      arroba: "@chenriqueend",
      content: newTweet,
      img: "https://github.com/chenriqueend.png",
      likes: "0",
      retweets: "0",
      comments: "0",
      verified: false,
    };
    setTweets([tweetObject, ...tweets]);
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
            key=""
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
        return (
          <Tweet
            key={tweet.key}
            content={tweet.content}
            img={tweet.img}
            arroba={tweet.arroba}
            name={tweet.name}
            likes={tweet.likes}
            retweets={tweet.retweets}
            comments={tweet.comments}
            verified={tweet.verified}
            postImg={tweet.postImg}
          />
        );
      })}
    </main>
  );
}
