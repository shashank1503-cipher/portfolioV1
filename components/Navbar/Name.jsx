import React from "react";
import { useState } from "react";
const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
const Name = (props) => {
  const arrayOfName = [
    "print('Hello Visitor!')",
    "System.out.println('Hello Visitor!');",
    "cout << 'Hello Visitor!';",
    " console.log('Hello Visitor!');",
    "<h1>Hello Visitor!</h1>",
    "printf('Hello Visitor!');",
    " Console.WriteLine ('Hello Visitor!');",
  ];
  const [names, setNames] = React.useState(arrayOfName[0]);
  useInterval(() => {
    var index = Math.floor(Math.random() * 7);
    setNames(arrayOfName[index]);
  }, 1000);
  return (<p data-aos="fade-down" data-aos-once="true"><a href="#">{names}</a></p>)
};

export default Name;
