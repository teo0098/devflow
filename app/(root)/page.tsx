import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to use Next.js with TypeScript?",
    tags: [
      { _id: "1", name: "nextjs" },
      { _id: "2", name: "typescript" },
    ],
    author: { _id: "1", name: "John Doe" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What is the difference between React and Vue?",
    tags: [
      { _id: "3", name: "react" },
      { _id: "4", name: "vue" },
    ],
    author: { _id: "2", name: "Jane Smith" },
    upvotes: 20,
    answers: 8,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Page = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    query ? question.title.toLowerCase().includes(query.toLowerCase()) : true
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold font-space-grotesk text-dark100_light900">All Questions</h1>

        <Button asChild className="primary-gradient text-light-900 min-h-[46px] px-4 py-3">
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1" />
      </section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}> {question.title} </h1>
        ))}
      </div>
    </>
  );
};

export default Page;
