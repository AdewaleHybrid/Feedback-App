import FeedbackList from "../components/FeedbackList"; // Accept the data
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";

function HomePage() {
  // APP Level State
  return (
    <>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </>
  );
}

export default HomePage;
