import { useState } from "react";
import bookmakingImage from "../assets/images/illustration-features-tab-1.svg";
import searchingImage from "../assets/images/illustration-features-tab-2.svg";
import sharingImage from "../assets/images/illustration-features-tab-3.svg";

type TabProps = {
  className: string;
};

function BookmakingTab({ className }: TabProps) {
  return (
    <div
      className={`${className} flex flex-col items-center px-6 sm:flex-row sm:gap-10`}>
      <img src={bookmakingImage} alt="" className="mb-10 min-w-0" />
      <div className="flex flex-col gap-6 items-center sm:items-start">
        <h3 className="text-center font-medium text-2xl sm:text-left">
          Bookmark in one click
        </h3>
        <p className="text-center max-w-[600px] sm:text-left sm:max-w-[400px]">
          Organise your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="btn bg-softBlue text-white hover:brightness-150 w-fit">
          More Info
        </button>
      </div>
    </div>
  );
}

function SearchingTab({ className }: TabProps) {
  return (
    <div
      className={`${className} flex flex-col items-center px-6 sm:flex-row sm:gap-10`}>
      <img src={searchingImage} alt="" className="mb-10 min-w-0" />
      <div className="flex flex-col gap-6 items-center sm:items-start">
        <h3 className="text-center font-medium text-2xl sm:text-left">
          Intelligent Search
        </h3>
        <p className="text-center max-w-[600px] sm:text-left sm:max-w-[400px]">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className="btn bg-softBlue text-white hover:brightness-150 w-fit">
          More Info
        </button>
      </div>
    </div>
  );
}

function SharingTab({ className }: TabProps) {
  return (
    <div
      className={`${className} flex flex-col items-center px-6 sm:flex-row sm:gap-10`}>
      <img src={sharingImage} alt="" className="mb-10 min-w-0" />
      <div className="flex flex-col gap-6 items-center sm:items-start">
        <h3 className="text-center font-medium text-2xl sm:text-left">
          Share Your Bookmarks
        </h3>
        <p className="text-center max-w-[600px] sm:text-left sm:max-w-[400px]">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can sent at the click of a button.
        </p>
        <button className="btn bg-softBlue text-white hover:brightness-150 w-fit">
          More Info
        </button>
      </div>
    </div>
  );
}

export default function FeaturesBanner() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="flex flex-col items-center mb-10">
      <h2 className="font-medium text-2xl text-center mb-4">Features</h2>
      <p className="text-grayishBlue text-center max-w-[600px] px-4">
        Our aim is to make it quick and easy to access your favourite websites.
        Your bookmarks sync between your devices so you can access them on the
        go.
      </p>
      <div className="flex flex-col justify-center mt-10 w-full px-6 mb-20 sm:flex-row sm:max-w-[800px]">
        <button
          className={`relative border-b-[1px] border-t-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black sm:border-t-0 sm:basis-full ${
            activeTab === 0 ? "text-black" : "text-grayishBlue"
          }
            `}
          onClick={() => {
            setActiveTab(0);
          }}>
          Simple Bookmarking
          <hr
            className={`absolute h-[5px] w-40 bg-softRed bottom-0 mx-auto left-0 right-0 sm:w-full ${
              activeTab === 0 ? "block" : "hidden"
            }`}
          />
        </button>
        <button
          className={`relative border-b-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black sm:basis-full ${
            activeTab === 1 ? "text-black" : "text-grayishBlue"
          }
                      `}
          onClick={() => {
            setActiveTab(1);
          }}>
          Speedy Searching
          <hr
            className={`absolute h-[5px] w-40 bg-softRed bottom-0 mx-auto left-0 right-0 sm:w-full ${
              activeTab === 1 ? "block" : "hidden"
            }`}
          />
        </button>
        <button
          className={`relative border-b-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black sm:basis-full ${
            activeTab === 2 ? "text-black" : "text-grayishBlue"
          }
                      `}
          onClick={() => {
            setActiveTab(2);
          }}>
          Easy Sharing
          <hr
            className={`absolute h-[5px] w-40 bg-softRed bottom-0 mx-auto left-0 right-0 sm:w-full ${
              activeTab === 2 ? "block" : "hidden"
            }`}
          />
        </button>
      </div>
      <BookmakingTab className={activeTab !== 0 ? "hidden" : "block"} />
      <SearchingTab className={activeTab !== 1 ? "hidden" : "block"} />
      <SharingTab className={activeTab !== 2 ? "hidden" : "block"} />
    </section>
  );
}
