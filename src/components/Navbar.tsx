import { GithubIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="navbar-container sticky md:top-5 lg:top-10  w-[48vh] flex px-4 py-6 mb-20 justify-evenly border border-white border-solid rounded-2xl backdrop-blur-md bg-black/40">
      <div className="left flex items-center px-4">
        <h3>
          <a href="/" className="text-purple-500">
            Practice
          </a>
        </h3>
      </div>
      <div className="center flex-1 flex justify-center items-center">
        <a href="/">Home Page</a>
      </div>
      <div className="right flex items-center px-4">
        <a
          href="https://github.com/adithya-adee"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="my github account"
        >
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}
