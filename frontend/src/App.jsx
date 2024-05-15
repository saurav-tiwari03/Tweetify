import { AddTweet } from "./components/AddTweet";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="flex items-center justify-end">
        <AddTweet />
      </div>
    </div>
  )
}
