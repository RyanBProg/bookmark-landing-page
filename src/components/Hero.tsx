import heroImage from "../assets/images/illustration-hero.svg";

export default function Hero() {
  return (
    <section className="mx-auto flex flex-col-reverse justify-between py-6 mt-6 mb-40 gap-6 sm:flex-row sm:gap-0 md:gap-6 sm:items-center max-w-[1000px]">
      <div className="flex flex-col items-center gap-6 px-4 sm:items-start">
        <h1 className="font-medium text-4xl text-center sm:text-start sm:text-3xl md:text-5xl">
          Simple Bookmark Manager
        </h1>
        <p className="text-grayishBlue text-center sm:text-start">
          A clean and simple interface to organisze your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>
        <div className="flex gap-2">
          <button className="btn bg-softBlue text-white hover:brightness-150">
            Get it on Chrome
          </button>
          <button className="btn bg-slate-200 text-slate-600 hover:brightness-90">
            Get it on Firefox
          </button>
        </div>
      </div>
      <img
        className="w-[95%] mx-auto sm:w-1/2"
        src={heroImage}
        alt="app illustration"
      />
    </section>
  );
}
