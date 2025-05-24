import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export default function UseRefPage() {
  const [value, setValue] = useState<string>("help");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.value = "Noob it is useRef";
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <motion.div
      initial={{ x: 100, y: 100 }}
      animate={{ x: 0, y: 0 }}
      transition={{
        duration: 3,
        type: "spring",
      }}
      className="shadow-lg shadow-white/40 drop-shadow-2xl h-[20vh] w-[50vh]"
    >
      <motion.div
        initial={{ x: 0, y: -150 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 3,
          type: "spring",
        }}
      >
        <Input
          type="text"
          value={value}
          onChange={handleInput}
          ref={inputRef}
        />
      </motion.div>
      <motion.div
        initial={{ x: -250, y: 200 }}
        animate={{ x: 0, y: 0 }}
        transition={{
          duration: 3,
          type: "spring",
        }}
      >
        <Button onClick={handleClick} className="mt-5">
          Change Value
        </Button>
      </motion.div>
    </motion.div>
  );
}
