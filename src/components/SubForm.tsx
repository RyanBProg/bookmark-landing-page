import { FormEvent, useState } from "react";

export default function SubForm() {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setIsError(true);
      return;
    }
    setIsError(false);
    console.log("Form submitted with email:", email);
  };
  return (
    <div className="bg-softBlue py-14">
      <div className="mx-auto px-6 max-w-[600px]">
        <p className="text-white uppercase text-center">
          35,000+ already joined
        </p>
        <h2 className="text-white text-center font-medium text-2xl mt-2">
          Stay up-to-date with what we're doing
        </h2>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col flex-nowrap justify-start gap-4 mt-10 sm:flex-row">
          <div className="sm:w-5/6">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="rounded-md py-2 px-4 w-full"
            />
            <div
              className={`bg-softRed rounded-md p-2 mt-1 ${
                isError ? "block" : "hidden"
              }`}>
              <p className="text-white italic text-sm">
                Whoops, make sure it's an email
              </p>
            </div>
          </div>
          <button className="btn bg-softRed text-white text-lg hover:brightness-150 sm:w-1/6 sm:h-fit">
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
