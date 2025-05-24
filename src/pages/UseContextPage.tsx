import { ThemeProvider, ThemeContext } from "@/provider/context-provider";
import { useContext, useEffect, useState } from "react";

export default function UseContextPage() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [word, setWord] = useState<string>("Use Context Implementation");
  const [displayed, setDisplayed] = useState("");

  const fetchNewWord = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data: string[] = await response.json();
    console.log(data[0]);

    setWord(data[0]);
  };

  useEffect(() => {
    fetchNewWord();
    setDisplayed(""); // Reset on theme change or remount
    let i = -1;
    const interval = setInterval(() => {
      ++i;
      setDisplayed((prev) => prev + word[i]);
      if (i >= word.length - 1) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [theme]);

  return (
    <>
      <div
        className={`text-3xl border px-4 py-2 font-mono bg-black/30 rounded-lg inline-block
          ${
            theme === "dark"
              ? "border-white text-white"
              : "border-amber-300 text-purple-500"
          }
        `}
        style={{ minHeight: "3.5rem" }}
      >
        <span>
          {displayed}
          <span
            className="animate-pulse inline-block w-2 ml-1 align-bottom bg-purple-400"
            style={{ height: "1.2em" }}
          />
        </span>
      </div>
      <button
        onClick={toggleTheme}
        className="mx-4 mt-6 px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        Toggle Theme + Word
      </button>
    </>
  );
}
