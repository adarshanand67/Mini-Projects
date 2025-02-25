import React from "react";
import "./Btn.scss";

export default function Button({text, className, href, newTab}) {
  return (
    <div className={className}>
      <a className="learn-more" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
