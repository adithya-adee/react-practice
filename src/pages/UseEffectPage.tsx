import { useState, useEffect, useCallback } from "react";
import * as motion from "motion/react-client";
import { toast } from "sonner";

interface Joke {
  id: string;
  joke: string;
  status: number;
}

export default function UseEffectPage() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  const fetchNewJoke = useCallback(async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        toast(`HTTP error! status: ${response.status}`);
      }

      const data: Joke = await response.json();
      setJoke(data);

      setShowAnimation(true);
    } catch (err) {
      console.log(err);
      toast("There was a error fetching joke");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNewJoke();
  }, [fetchNewJoke]);

  const handleNewJoke = () => {
    setShowAnimation(false); // Reset animation
    fetchNewJoke();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-start mb-4">
          <div className="text-4xl mr-4">😄</div>
          <div className="flex-1">
            <div className="text-lg leading-relaxed text-gray-800">
              {joke && showAnimation ? (
                joke.joke.split(" ").map((word, index) => (
                  <motion.span
                    key={`${joke.id}-${index}`}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {word}
                  </motion.span>
                ))
              ) : (
                <span>{joke?.joke}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleNewJoke}
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
        >
          Get Another Joke
        </button>
      </div>
    </motion.div>
  );
}
