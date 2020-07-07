import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import savedGamesService from "../services/savedGames.service";
import chapterService from "../services/chapter.service";
import Chapter from "../components/Chapter/Chapter";
function FinishedGame(props) {
  const SavedGamesService = new savedGamesService();
  const ChapterService = new chapterService();
  useEffect(() => {
    SavedGamesService.getFullSave(props.match.params.saveId).then((save) => {
      const chaptersPromise = save.choicesTree.map((choice) => {
        const target = choice.didSuccess ? choice.choice.successTargetChapter : choice.choice.failureTargetChapter;
        return ChapterService.getChapter(target).then((chapter) => chapter);
      });

      Promise.all(chaptersPromise)
        .then((chaptersTravelled) => {
          console.log(chaptersTravelled);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  return <div></div>;
}

export default withRouter(FinishedGame);
