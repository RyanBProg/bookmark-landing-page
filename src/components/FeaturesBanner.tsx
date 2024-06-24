import { useState } from "react";
import bookmakingImage from "../assets/images/illustration-features-tab-1.svg";
import searchingImage from "../assets/images/illustration-features-tab-2.svg";
import sharingImage from "../assets/images/illustration-features-tab-3.svg";

function BookmakingTab() {
  return (
    <div className="">
      <div>
        <img src={bookmakingImage} alt="" />
        <h3>Bookmark in one click</h3>
        <p>
          Organise your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button className="btn">More Info</button>
      </div>
    </div>
  );
}

function SearchingTab() {
  return (
    <div className="">
      <div>
        <img src={searchingImage} alt="" />
        <h3>Intelligent Search</h3>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button className="btn">More Info</button>
      </div>
    </div>
  );
}

function SharingTab() {
  return (
    <div className="">
      <div>
        <img src={sharingImage} alt="" />
        <h3>Share Your Bookmarks</h3>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can sent at the click of a button.
        </p>
        <button className="btn">More Info</button>
      </div>
    </div>
  );
}

export default function FeaturesBanner() {
  const [activeBanner, setActiveBanner] = useState(0);

  return (
    <section className="flex flex-col items-center">
      <h2 className="font-medium text-2xl text-center mb-4">Features</h2>
      <p className="text-grayishBlue text-center max-w-[600px] px-4">
        Our aim is to make it quick and easy to access your favourite websites.
        Your bookmarks sync between your devices so you can access them on the
        go.
      </p>
      <div className="flex flex-col justify-center mt-10 w-full px-4">
        <button
          className="border-b-[1px] border-t-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black"
          onClick={() => {
            setActiveBanner(0);
          }}>
          Simple Bookmarking
        </button>
        <button
          className="border-b-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black"
          onClick={() => {
            setActiveBanner(1);
          }}>
          Speedy Searching
        </button>
        <button
          className="border-b-[1px] border-grayishBlue py-4 px-4 text-grayishBlue hover:text-black"
          onClick={() => {
            setActiveBanner(2);
          }}>
          Easy Sharing
        </button>
      </div>
      <>
        {activeBanner === 0 && <BookmakingTab />}
        {activeBanner === 1 && <SearchingTab />}
        {activeBanner === 2 && <SharingTab />}
      </>
    </section>
  );
}
