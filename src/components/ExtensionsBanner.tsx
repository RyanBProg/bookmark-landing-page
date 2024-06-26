import chromeLogo from "../assets/images/logo-chrome.svg";
import firefoxLogo from "../assets/images/logo-firefox.svg";
import operaLogo from "../assets/images/logo-opera.svg";
import dotImage from "../assets/images/bg-dots.svg";

export default function ExtensionsBanner() {
  return (
    <div className="mb-60 px-6">
      <h2 className="font-medium text-2xl text-center mb-4">
        Download the extension
      </h2>
      <p className="text-center max-w-[600px] mx-auto text-grayishBlue">
        We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>
      <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-4 lg:gap-10">
        <div className="flex flex-col items-center rounded-lg shadow-lg max-w-[250px]">
          <img src={chromeLogo} alt="google chrome logo" className="mt-6" />
          <h3 className="mt-6 mb-2 text-xl font-medium">Add to Chrome</h3>
          <p className="text-grayishBlue">Minimum version 62</p>
          <img src={dotImage} alt="" className="mt-8" />
          <button className="btn bg-softBlue text-white hover:brightness-150 w-fit shadow-lg m-6">
            Add & Install Extension
          </button>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-lg max-w-[250px] md:-mb-16">
          <img src={firefoxLogo} alt="firefox logo" className="mt-6" />
          <h3 className="mt-6 mb-2 text-xl font-medium">Add to Firefox</h3>
          <p className="text-grayishBlue">Minimum version 55</p>
          <img src={dotImage} alt="" className="mt-8" />
          <button className="btn bg-softBlue text-white hover:brightness-150 w-fit shadow-lg m-6">
            Add & Install Extension
          </button>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-lg max-w-[250px] md:-mb-32">
          <img src={operaLogo} alt="opera logo" className="mt-6" />
          <h3 className="mt-6 mb-2 text-xl font-medium">Add to Opera</h3>
          <p className="text-grayishBlue">Minimum version 46</p>
          <img src={dotImage} alt="" className="mt-8" />
          <button className="btn bg-softBlue text-white hover:brightness-150 w-fit shadow-lg m-6">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
}
