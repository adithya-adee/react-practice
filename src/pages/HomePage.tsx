import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Link to="/use-state">use state demo</Link>
        <Link to="/use-effect">use effect demo</Link>
      </div>
    </>
  );
}
