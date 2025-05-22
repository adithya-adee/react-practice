import { useState } from "react";
import { sculptureList } from "../assets/json/use-state-example";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

export default function UseStatePage() {
  const [index, setIndex] = useState<number>(0);

  const sculptures: Sculpture[] = sculptureList;

  const handlePage = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <button onClick={handlePage}>Next Page</button>
      {sculptures[index].name}
    </div>
  );
}
