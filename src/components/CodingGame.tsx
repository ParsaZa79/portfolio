import { motion, Reorder } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDoubleRightIcon, PlayIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

type Difficulty = "easy" | "mediocre" | "complex";

type CodingGameProps = {
  title: string;
  subtitle: string;
  challenges: {
    title: string;
    description: string;
    difficulties: {
      [K in Difficulty]: {
        title: string;
        description: string;
        task: string;
        codeBlocks: string[];
        solution: string[];
        feedback: {
          success: string;
          error: string;
        };
      };
    };
  };
  ui: {
    dropHere: string;
    runCode: string;
    resetCode: string;
    loading: string;
  };
};

export default function CodingGame({ title, subtitle, challenges, ui }: CodingGameProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>("easy");
  const [codeBlocks, setCodeBlocks] = useState<string[]>([]);
  const [placedBlocks, setPlacedBlocks] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackType, setFeedbackType] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    resetChallenge();
  }, [selectedDifficulty]);

  const resetChallenge = () => {
    const challenge = challenges.difficulties[selectedDifficulty];
    setCodeBlocks([...challenge.codeBlocks].sort(() => Math.random() - 0.5));
    setPlacedBlocks([]);
    setFeedback(null);
    setFeedbackType(null);
  };

  const checkSolution = () => {
    setIsRunning(true);
    const challenge = challenges.difficulties[selectedDifficulty];
    
    setTimeout(() => {
      const isCorrect = JSON.stringify(placedBlocks) === JSON.stringify(challenge.solution);
      setFeedback(isCorrect ? challenge.feedback.success : challenge.feedback.error);
      setFeedbackType(isCorrect ? "success" : "error");
      setIsRunning(false);
    }, 1500);
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    const colors = {
      easy: "yellow",
      mediocre: "orange",
      complex: "rose"
    };
    return colors[difficulty];
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Game Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-zinc-400">{subtitle}</p>
      </motion.div>

      {/* Difficulty Selection */}
      <div className="flex justify-center gap-4 mb-12">
        {(["easy", "mediocre", "complex"] as const).map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelectedDifficulty(difficulty)}
            className={`relative group px-6 py-3 rounded-lg font-medium transition-transform hover:-translate-y-1 ${
              selectedDifficulty === difficulty
                ? `bg-${getDifficultyColor(difficulty)}-500 text-white`
                : "bg-zinc-900 text-zinc-400"
            }`}
          >
            <div className={`absolute inset-0 bg-${getDifficultyColor(difficulty)}-400 rounded-lg -z-10 translate-y-1 group-hover:translate-y-2 transition-transform ${
              selectedDifficulty === difficulty ? "opacity-100" : "opacity-0"
            }`} />
            {challenges.difficulties[difficulty].title}
          </button>
        ))}
      </div>

      {/* Challenge Description */}
      <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 p-6 mb-8">
        <h3 className="text-2xl font-bold mb-4">{challenges.difficulties[selectedDifficulty].task}</h3>
        <p className="text-zinc-400">{challenges.difficulties[selectedDifficulty].description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Code Blocks */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-zinc-300">Available Blocks</h4>
          <div className="space-y-2">
            {codeBlocks.map((block, index) => (
              <motion.div
                key={block + index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => {
                  setCodeBlocks(codeBlocks.filter((_, i) => i !== index));
                  setPlacedBlocks([...placedBlocks, block]);
                }}
              >
                <div className="absolute inset-0 bg-violet-500/10 rounded-lg transition-opacity opacity-0 group-hover:opacity-100" />
                <div className="relative bg-zinc-900 p-4 rounded-lg border border-zinc-800 hover:border-violet-500/50 transition-all font-mono text-sm">
                  {block}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Code Drop Area */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-zinc-300">Solution</h4>
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-lg border border-zinc-800 p-6 min-h-[300px]">
            <Reorder.Group axis="y" values={placedBlocks} onReorder={setPlacedBlocks} className="space-y-2">
              {placedBlocks.map((block, index) => (
                <Reorder.Item
                  key={block + index}
                  value={block}
                  className="relative bg-zinc-900 p-4 rounded-lg border border-zinc-800 font-mono text-sm cursor-move"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronDoubleRightIcon className="w-4 h-4 text-violet-500" />
                  </div>
                  {block}
                </Reorder.Item>
              ))}
            </Reorder.Group>
            {placedBlocks.length === 0 && (
              <div className="text-center text-zinc-500 py-12">{ui.dropHere}</div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={resetChallenge}
              className="px-4 py-2 rounded-lg font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowPathIcon className="w-5 h-5" />
            </button>
            <button
              onClick={checkSolution}
              disabled={isRunning || placedBlocks.length === 0}
              className="relative group bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:-translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-yellow-400 rounded-lg -z-10 translate-y-1 group-hover:translate-y-2 transition-transform" />
              {isRunning ? (
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  {ui.loading}
                </motion.span>
              ) : (
                <span className="flex items-center gap-2">
                  <PlayIcon className="w-5 h-5" />
                  {ui.runCode}
                </span>
              )}
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg ${
                feedbackType === "success"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                  : "bg-rose-500/10 border border-rose-500/20 text-rose-300"
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 