import { useState } from "react";
import posts from "./db/postsdb.js";
import RallyCard from "./components/RallyCard";
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextCard = () => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < posts.length ? nextIndex : 0;
    });
  };

  const handlePrevCard = () => {
    setActiveIndex((prevIndex) => {
      const prevIndexCandidate = prevIndex - 1;
      return prevIndexCandidate >= 0 ? prevIndexCandidate : posts.length - 1;
    });
  };

  return (
    <>
      <main className="flex items-center">
        <div className="grid grid-cols-4 gap-5">
          {posts.map((post, i) => {
            return (
              <RallyCard
                key={post.id}
                title={post.title}
                content={post.content}
                image={post.image}
                isActive={i === activeIndex}
              ></RallyCard>
            );
          })}
        </div>
      </main>
      <button
        className="rounded-full bg-slate-400 text-black p-5"
        onClick={handleNextCard}
      >
        Prossimo
      </button>
      <button
        className="rounded-full bg-slate-400 text-black p-5"
        onClick={handlePrevCard}
      >
        Precedente
      </button>
    </>
  );
}

export default App;
