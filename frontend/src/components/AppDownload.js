import React from "react";

const AppDownload = () => {
  return (
    <section id="app-download" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          For a Better Experience <br /> Download the App
        </h1>

        {/* Subtext */}
        <p className="text-gray-800 text-sm md:text-base">
          Order food anytime, anywhere. Get faster access with our mobile app.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <img
            className="h-14 md:h-16 hover:scale-105 transition-transform duration-200 cursor-pointer"
            alt="Get it on Google Play"
            src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png"
          />
          <img
            className="h-14 md:h-16 hover:scale-105 transition-transform duration-200 cursor-pointer"
            alt="Download on the App Store"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
