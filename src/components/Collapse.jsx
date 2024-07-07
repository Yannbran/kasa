import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../style/collapse.scss";

export default function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
          {title}
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`arrow ${toggle ? "rotateDown" : "rotateUp"}`}
          />
        </h3>
        <div
          className={toggle ? "collapse_content" : "collapse_content_hidden"}
        >
          {Array.isArray(content) ? (
            content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          ) : (
            <p>{content}</p>
          )}
        </div>
      </div>
    </>
  );
}
