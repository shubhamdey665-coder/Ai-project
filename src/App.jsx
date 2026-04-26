
import GoalGlobe from "./components/GoalGlobe";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <section className="hero">
        <div className="heroText">
          <p className="badge">AI Goal Tracker + Personal Mentor</p>

          <h1>GoalNow AI</h1>

          <p className="subtitle">
            Build your dream goal plan with AI, track progress, take tests,
            revise weekly, and complete your target step by step.
          </p>

          <div className="buttons">
            <button className="primary">Start Planning</button>
            <button className="secondary">View Templates</button>
          </div>
        </div>

        <GoalGlobe />
      </section>
    </main>
  );
}
