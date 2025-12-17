import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "How to optimize React performance?",
  },
  {
    _id: "2",
    title: "How to use Next.js with TypeScript?",
  },
  {
    _id: "3",
    title: "What is the difference between SSR and SSG?",
  },
  {
    _id: "4",
    title: "Best practices for state management in React?",
  },
  {
    _id: "5",
    title: "How to implement authentication in Next.js?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "React",
    questions: 1200,
  },
  {
    _id: "2",
    name: "Next.js",
    questions: 950,
  },
  {
    _id: "3",
    name: "TypeScript",
    questions: 800,
  },
  {
    _id: "4",
    name: "JavaScript",
    questions: 1500,
  },
  {
    _id: "5",
    name: "CSS",
    questions: 600,
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              className="flex cursor-pointer items-center justify-between gap-7"
              key={_id}
              href={ROUTES.PROFILE(_id)}
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image src="/icons/chevron-right.svg" alt="Chevron" width={20} height={20} className="invert-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard key={_id} _id={_id} name={name} questions={questions} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
