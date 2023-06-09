import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// COMPONENT THAT DISPLAY'S THE DATA
const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <>
      <Card>
        <div className="num-display">{item.rating}</div>
        <button
          onClick={() => {
            deleteFeedback(item.id);
          }}
          className="close"
        >
          <FaTimes color="puple" />
        </button>
        <button
          onClick={() => {
            editFeedback(item);
          }}
          className="edit"
        >
          <FaEdit color="puple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
};

FeedbackItem.prototype = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
