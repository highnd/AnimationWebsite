import React, { useEffect, useState } from "react";
import { defaultProps, themes, Highlight } from "prism-react-renderer";

const Code = ({
  code,
  animated,
  show,
  maxHeight,
  newTextToWrite,
  codeLast,
  animatedDelay,
}) => {
  const initialText = codeLast ? code + codeLast : code;

  const [text, setText] = useState(animated ? "" : initialText);

  //   show code animation
  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(initialText.slice(0, i));
          i++;
          if (i > initialText.length) {
            clearInterval(intervalId);
          }
        }, 30);
      }, animatedDelay || 150);
    }
  }, [initialText, show]);

  //   same effect if we have more code to add <codeLast>
  useEffect(() => {
    if (newTextToWrite) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          if (codeLast) {
            setText(code + newTextToWrite.slice(0, i) + codeLast);
          } else {
            setText(code + newTextToWrite.slice(0, i));
          }
          i++;
          if (i > newTextToWrite.length) {
            clearInterval(intervalId);
          }
        }, 50);
      }, 0);
    }
  }, [newTextToWrite]);

  return (
    <Highlight
      {...defaultProps}
      code={text}
      language="jsx"
      theme={themes.nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className + "transition-all duration-700 overflow-auto w-full  "
          }
          style={{
            ...style,
            background: "transparent",
            paddingTop: 0,
            paddingBottom: 0,
            opacity: show ? 1 : 0,
            height: "auto",
            width: "fit-content",
          }}
        >
          {tokens.map((line, index) => (
            <div
              {...getLineProps({ line, key: index })}
              style={{ position: "relative" }}
              className="lg:text-lg text-xs"
            >
              {line.map((token, key) => {
                return <span {...getTokenProps({ token, key })} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
