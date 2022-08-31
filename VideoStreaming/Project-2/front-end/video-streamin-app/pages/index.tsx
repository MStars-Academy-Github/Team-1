import type { NextPage } from "next";
import ReactPlayer from "react-player";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div>
          <h1 className="text-xl-3 rounded-md bg-blue-600">
            My anime player yahoo!
          </h1>
          {/* <ReactPlayer url="https://youtu.be/vqTwqKyJdWA" /> */}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Chuka
        </a>
      </footer>
    </div>
  );
};

export default Home;
