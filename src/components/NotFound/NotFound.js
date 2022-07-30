import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { notFoundTexts, notFoundSelectors } from "../../utils/constants";

const NotFound = () => {
  const {
    blockSelector,
    goBackSelector,
    headingSelector,
    subheadingSelector,
    contentSelector,
  } = notFoundSelectors;
  const { goBackText, headingText, subheadingText } = notFoundTexts;
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={blockSelector}>
      <div className={contentSelector}>
        <h1 className={headingSelector}>{headingText}</h1>
        <p className={subheadingSelector}>{subheadingText}</p>
      </div>
      <p className={goBackSelector} onClick={goBack}>
        {goBackText}
      </p>
    </div>
  );
};

export default NotFound;
