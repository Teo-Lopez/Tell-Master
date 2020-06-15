import React from "react";
import NewChapterForm from "../NewChapterForm";
function EditChapters({ loggedInUser }) {
  return <NewChapterForm loggedInUser={loggedInUser}></NewChapterForm>;
}

export default EditChapters;
