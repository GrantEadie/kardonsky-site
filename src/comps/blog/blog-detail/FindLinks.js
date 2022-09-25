import React from "react";

const FindLinks = ({ text }) => {
  const textWithLinks = (text) => {
    let arr = [];
    text.split(/(?=\[http)/g).forEach((e) => {
      if (!e.includes("[http")) {
        arr = [...arr, { plainText: e }];
        return;
      }
      const firstIndex = e.indexOf("[http");
      const linkEnd = e.indexOf("]", firstIndex) + 1;
      const hyperlinkEnd = e.indexOf("}", linkEnd) + 1;
      const link = e.slice(firstIndex + 1, linkEnd - 1);
      const hyperText = e.slice(linkEnd + 1, hyperlinkEnd - 1);
      const postPlain = e.slice(hyperlinkEnd);
      arr = [...arr, { link, hyperText, postPlain }];
    });
    return arr.map((obj, index) =>
      obj.hasOwnProperty("plainText") ? (
        <React.Fragment key={index}>{obj.plainText}</React.Fragment>
      ) : (
        <React.Fragment key={index}>
          <a href={obj.link} target="_blank" rel="noreferrer">
            {obj.hyperText}
          </a>
          {obj.postPlain}
        </React.Fragment>
      )
    );
  };

  return textWithLinks(text);
};

export default FindLinks;
