import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  key: number;
  name: string;
  arroba: string;
  content: string;
  img?: string;
  likes?: string;
  comments?: string;
  retweets?: string;
  verified?: boolean;
  postImg?: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet" state={props}>
      <img src={props.img} alt="" />
      <div className="tweet-content">
        <div className="name-with-seal">
          <strong>{props.name}</strong>
          {props.verified == true && (
            <img src="src/assets/imgs/seal-check.svg" />
          )}
        </div>
        <span className="arroba">{props.arroba}</span>
        <div className="post-content">
          <p>{props.content}</p>
          {props.postImg && <img src={props.postImg} />}
        </div>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {props.comments}
          </button>
          <button type="button">
            <ArrowClockwise />
            {props.retweets}
          </button>
          <button type="button">
            <Heart />
            {props.likes}
          </button>
        </div>
      </div>
    </Link>
  );
}
