import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";
import "./Tweet.css";

interface TweetProps {
  content: string;
  likes?: number;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/chenriqueend.png" alt="" />
      <div className="tweet-content">
        <strong>Carlos Henrique</strong>
        <span>@chenriqueend</span>
        <p>{props.content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {props.likes}
          </button>
          <button type="button">
            <ArrowClockwise />
            {props.likes}
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
