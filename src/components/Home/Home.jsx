import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://img.freepik.com/free-vector/gradient-smart-home-isometric-technology-background_52683-4498.jpg?w=996&t=st=1665365145~exp=1665365745~hmac=222f01a43130783a22c33f89c5054148d5a3872c6f7f6be2045c34c60e5fe361"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Hello,
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to Smart Home                     </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Best E-commerce platform for buying high quality Smart Home Appliances at extremely affordable Price.
            </p>
            <div className="flex items-center ml-20">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white border border-black border-x-2 bg-blue-900 rounded-3xl hover:bg-blue-800"
              >
                Shop Now
            </Link>
            <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-semibold tracking-wide text-blue-800 rounded-3xl border border-blue-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
          
export default Home;