import { useState } from "react";

const questions = [
  {
    title: "What is a Bookmark?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error maiores ipsam vitae, voluptates quod id consectetur possimus officia maxime ad nobis alias. Aspernatur, dolores.",
  },
  {
    title: "How can I request a new browser?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error maiores ipsam vitae, voluptates quod id consectetur possimus officia maxime ad nobis alias. Aspernatur, dolores.",
  },
  {
    title: "Is there a mobile app?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error maiores ipsam vitae, voluptates quod id consectetur possimus officia maxime ad nobis alias. Aspernatur, dolores.",
  },
  {
    title: "What about other Chromium browsers?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error maiores ipsam vitae, voluptates quod id consectetur possimus officia maxime ad nobis alias. Aspernatur, dolores.",
  },
];

type QuestionProps = {
  title: string;
  answer: string;
};

function Question({ title, answer }: QuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex justify-between items-center py-4">
        <h3>{title}</h3>
        <button
          className={`hover:brightness-150 ${isOpen && "rotate-180"}`}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path
              fill="none"
              stroke={isOpen ? "#FA5757" : "#5267DF"}
              strokeWidth="3"
              d="M1 1l8 8 8-8"
            />
          </svg>
        </button>
      </div>
      <p className={`text-grayishBlue mb-8 ${isOpen ? "block" : "hidden"}`}>
        {answer}
      </p>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="mx-auto max-w-[600px] mt-10 mb-40 px-6">
      <h2 className="font-medium text-2xl text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center max-w-[600px] mx-auto text-grayishBlue">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </p>
      <div className="my-10 divide-y-2 last:border-b-[2px]">
        {questions.map((question) => {
          return (
            <Question
              key={question.title}
              title={question.title}
              answer={question.answer}
            />
          );
        })}
      </div>
      <button className="btn bg-softBlue text-white hover:brightness-150 w-fit shadow-lg mx-auto block">
        More Info
      </button>
    </div>
  );
}
