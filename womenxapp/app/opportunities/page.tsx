// an opportunities page
//
import Link from 'next/link';
import Header from '../components/Header';
import Image from 'next/image';

export default function Opportunities() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mb-10">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-5xl font-bold py-10">
          <span className="text-black-900">Opportunities</span>
        </h1>
        <p className="mt-3 text-1xl">
          Find opportunities to grow your startup
        </p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Opportunity 1 &rarr;</h3>
            <p className="mt-4 text-xl">
              Description of opportunity 1
            </p>
          </a>
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Opportunity 2 &rarr;</h3>
            <p className="mt-4 text-xl">
              Description of opportunity 2
            </p>
          </a>
          <a
            href="#"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-pink-600 focus:text-pink-600"
          >
            <h3 className="text-2xl font-bold">Opportunity 3 &rarr;</h3>
            <p className="mt-4 text-xl">
              Description of opportunity 3
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}