import React from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt ut labore lorem ipsum dolorl lorem ipsum dolor. Ut enim ad minim veniam,",
    },
    {
      id: 2,
      rating: 9,
      text: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt ut labore lorem ipsum dolorl lorem ipsum dolor. Ut enim ad minim veniam,",
    },
    {
      id: 3,
      rating: 8,
      text: "lorem ipsum dolor sit amet, consectetur adip locus, sed do eiusmod tempor incididunt ut labore lorem ipsum dolorl lorem ipsum dolor. Ut enim ad minim veniam,",
    },
  ]);

  //Edit Feedback Function
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  // Delete Feedback Function
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add Feedback Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Update Feedback Item
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbackEdit, // actual piece of state to be edited
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, // actual functon
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
