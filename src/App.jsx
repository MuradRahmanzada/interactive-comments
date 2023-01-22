import React from "react";

import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/global.css";

import { Conversation } from "./components/converstaion";
import { NewCommentEditor } from "./components/new-comment-editor";

function App() {
  return (
    <div className="container">
      <Conversation />
    </div>
  );
}

export default App;
