import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
      <Header />
      <br />
      <br />
      <br />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-black-900">Womenx Innovators</span>
        </h1>
        <p className="text-1xl">
          A community of 300+ women dedicated to building the next generation of female unicorn tech founders.
        </p>
        {/* ADD APPLY BUTTON */}
        <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700">
          Apply
        </button>
        <br />
        {/* ADD AN IMAGE */}
        <Image
          src="/cafe.jpeg" // Correctly referencing the image in the public folder
          alt="womenx innovators"
          width={500}
          height={500}
        />
        {/* <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="/opportunities"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Opportunities &rarr;</h3>
            <p className="mt-4 text-xl">
              Find opportunities to grow your startup
            </p>
          </a>
          <a
            href="/events"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Events &rarr;</h3>
            <p className="mt-4 text-xl">
              Attend events and network with other womenx innovators
            </p>
          </a>
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Post an Opportunity &rarr;</h3>
            <p className="mt-4 text-xl">
              Post an opportunity for others to see
            </p>
          </a>
        </div> */}
        <div className="mt-16 text-center">
          <p className="text-xl font-semibold text-gray-900">
            If <span className="font-bold">women and men</span> around the world <span className="font-bold">participated equally as entrepreneurs</span>, global GDP could ultimately rise by approximately 3% to 6%, <span className="font-bold">boosting the global economy by $2.5 trillion to $5 trillion</span> - Harvard Business Review
          </p>
          <p className="mt-8 text-xl text-gray-900">
            The problem is... today <span className="font-bold">only 14% of unicorns</span> have a <span className="font-bold">female cofounder</span> and <span className="font-bold">only 5% have a founding CEO who identifies as female</span> - Forbes 2024
          </p>
          {/* ADD NEW SECTION */}
          
        <div className="bg-pink-600 text-white py-10 mt-16 w-full">
          <h2 className="text-3xl font-bold">OUR MEMBERS ARE</h2>
          <div className="flex justify-around mt-8">
            <div className="text-center">
              <p className="text-5xl font-bold">70%</p>
              <p className="mt-2">Founders</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">10%</p>
              <p className="mt-2">Investors</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">15%</p>
              <p className="mt-2">Mentors</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold">5%</p>
              <p className="mt-2">Students</p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl text-pink-600 font-bold">WHAT WE DO</h3>
          <p className="mt-4 text-3xl font-bold text-gray-900">
            Empowering Community of Women in Innovation and Entrepreneurship
          </p>
          </div>
          {/* ADD NEW SECTION */}
        <div className="flex flex-wrap justify-around max-w-6xl mt-16 sm:w-full">
          <div className="text-center w-80 p-6">
            <Image src="/slack-icon.png" alt="Slack Chanel" width={100} height={100} />
            <h3 className="text-2xl font-bold mt-4">Slack Chanel</h3>
            <p className="mt-4 text-gray-700">
              Join our vibrant Slack community, a dynamic space for daily interactions, where members can share insights, seek advice, and build lasting connections with fellow 240+ women innovators.
            </p>
          </div>
          <div className="text-center w-80 p-6">
            <Image src="/coffee.jpeg" alt="In person events" width={100} height={100} />
            <h3 className="text-2xl font-bold mt-4">In person events</h3>
            <p className="mt-4 text-gray-700">
              Experience the power of connection at our in-person events, ranging from workshops to networking gatherings, designed to inspire, educate, and foster meaningful relationships among women entrepreneurs.
            </p>
          </div>
          <div className="text-center w-80 p-6">
            <Image src="/resources-icon.png" alt="Resources" width={100} height={100} />
            <h3 className="text-2xl font-bold mt-4">Resources</h3>
            <p className="mt-4 text-gray-700">
              Access a curated selection of resources, including educational materials, tools, and guides, specifically tailored to support and accelerate the growth of women-led ventures in the innovation ecosystem.
            </p>
          </div>
        </div>
        </div>
      </main>
      <br />
      <br />
      <Footer />
    </div>
  );
}
