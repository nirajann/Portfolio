import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../../style/Secret.css"; // Assuming you have a CSS file for About section

const Secret = () => {
  const Nipple = (props) => {
    return (
      <span className="nipple" style={{ backgroundColor: props.color }}></span>
    );
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const Boob = ({ children, ...props }) => {
    const jiggle = (e) => {
      const clickedBoob = e.target;
      clickedBoob.classList.add("jiggle");
      sleep(1000).then(() => {
        clickedBoob.classList.remove("jiggle");
      });
    };

    return (
      <div className="boob-container" onClick={jiggle}>
        <div className="boob">{children}</div>
      </div>
    );
  };

  const Breasts = ({ children, ...props }) => {
    return <div className={"breast cup-" + props.cup}>{children}</div>;
  };

  const App = () => {
    return (
      <Breasts cup="d">
        <Boob>
          <Nipple color="#EE8280" />
        </Boob>
        <Boob>
          <Nipple color="#EE8280" />
        </Boob>
      </Breasts>
    );
  };

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      ReactDOM.render(<App />, rootElement);
    }
  }, []);

  return (
    <div className="SecretPassage">
      <div id="root"></div>
    </div>
  );
};

export default Secret;
