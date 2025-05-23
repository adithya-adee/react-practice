import { ThemeProvider, ThemeContext } from "@/provider/context-provider";
import { useContext } from "react";

export default function UseContextPage() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`text-3xl border ${
          theme === "dark" ? "border-white" : "border-amber-300"
        }
        ${theme === "dark" ? "text-white" : "text-purple-500"}  `}
      >
        Hello World
      </div>
      <button onClick={toggleTheme}></button>
    </>
  );
}
