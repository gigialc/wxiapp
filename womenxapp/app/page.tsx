import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Members from "./components/Members";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10 bg-white">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-20 mt-20">
        <h1 className="text-3xl sm:text-5xl font-bold mb-5">
          <span className="text-black-900 dark:text-black">Womenx Innovators</span>
        </h1>
        <p className="text-base sm:text-xl dark:text-black">
          A community of 300+ women dedicated to building the next generation of female unicorn tech founders.
        </p>
        {/* Apply Button */}
        <a href="https://forms.gle/F18Hdr8jv4bJbKnD8" target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 sm:px-6">
            Apply
          </button>
        </a>
        <br />
        {/* Image */}
        <Image
          src="/cafe.jpeg"
          alt="Womenx Innovators"
          width={500}
          height={500}
          className="w-full max-w-xs sm:max-w-md"
        />
        {/* Information Section */}
        <div className="mt-16 text-center px-4 sm:px-20">
          <p className="text-sm sm:text-xl font-semibold text-gray-900 dark:text-black">
            If <span className="font-bold">women and men</span> around the world <span className="font-bold">participated equally as entrepreneurs</span>, global GDP could ultimately rise by approximately 3% to 6%, <span className="font-bold">boosting the global economy by $2.5 trillion to $5 trillion</span> - Harvard Business Review
          </p>
          <p className="mt-8 text-sm sm:text-xl text-gray-900 dark:text-black">
            The problem is... today <span className="font-bold">only 14% of unicorns</span> have a <span className="font-bold">female cofounder</span> and <span className="font-bold">only 5% have a founding CEO who identifies as female</span> - Forbes 2024
          </p>
        </div>
        <Members />
        {/* Additional Sections */}
        <div className="mt-40 text-center px-4 sm:px-20">
          <h3 className="text-xl sm:text-2xl text-pink-600 font-bold">WHAT WE DO</h3>
          <p className="mt-4 text-lg sm:text-3xl font-bold text-gray-900 dark:text-black">
            Empowering Community of Women in Innovation and Entrepreneurship
          </p>
        </div>
        <div className="flex flex-wrap justify-around w-full mt-16 px-4 sm:px-20 mb-40">
          <div className="text-center w-full sm:w-80 p-6">
            <Image
              src="/slack_icon.png"
              alt="Slack Channel"
              width={100}
              height={100}
              className="mx-auto" // Centers the image horizontally within its container
            />
            <h3 className="text-xl sm:text-2xl font-bold mt-4 dark:text-black">Slack Channel</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-black">
              Join our vibrant Slack community, a dynamic space for daily interactions, where members can share insights, seek advice, and build lasting connections with fellow 240+ women innovators.
            </p>
          </div>
          <div className="text-center w-full sm:w-80 p-6">
            <Image
              src="/coffee.jpeg"
              alt="In person events"
              width={160}
              height={160}
              className="mx-auto" // Centers the image horizontally within its container
            />
            <h3 className="text-xl sm:text-2xl font-bold mt-4 dark:text-black">In person events</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-black">
              Experience the power of connection at our in-person events, ranging from workshops to networking gatherings, designed to inspire, educate, and foster meaningful relationships among women entrepreneurs.
            </p>
          </div>
          <div className="text-center w-full sm:w-80 p-6">
            <Image
              src="/resources.png"
              alt="Resources"
              width={100}
              height={100}
              className="mx-auto" // Centers the image horizontally within its container
            />
            <h3 className="text-xl sm:text-2xl font-bold mt-4 dark:text-black">Resources</h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-black">
              Access a curated selection of resources, including educational materials, tools, and guides, specifically tailored to support and accelerate the growth of women-led ventures in the innovation ecosystem.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
