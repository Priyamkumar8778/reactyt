import React from "react";
import { Bookmark } from "lucide-react";
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://thumbs.dreamstime.com/b/icons-sample-psost-setting-428651105.jpg"
            alt=""
          />
          <buttom>
            save <Bookmark />
          </buttom>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default App;
