import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">

    <ApprovalCard>
        Are you sure you want to do this?
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
        author="Sam"
        timeAgo="today at 4:00 PM"
        content="nice blog"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
        author="alex"
        timeAgo="today at 5:00 PM"
        content="hello mate"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
        author="jane"
        timeAgo="today at 2:00 PM"
        content="good job"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
         <CommentDetail
        author="smit"
        timeAgo="today at 3:00 PM"
        content="good write"
        avatar={faker.image.avatar()}
      />
    </ApprovalCard>
     
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
