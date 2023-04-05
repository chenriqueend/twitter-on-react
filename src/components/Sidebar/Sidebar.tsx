import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";
import twitterLogo from "../../assets/logo.svg";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="logo twitter" />
      <nav className="main-navigation">
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="explore">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="notifications">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="messages">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="bookmarks">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="lists">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="profile">
          <User />
          <span>Profile</span>
        </a>
        <a href="more">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
