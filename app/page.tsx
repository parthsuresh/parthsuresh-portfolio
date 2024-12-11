import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Welcome to my blog!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Parth, currently working as a Machine Learning Research Engineer at Scale AI. Prior to that, I was a Research Data Scientist at Meta.
          My research interests are in natural language processing and generative AI.
        </p>
        <p>
          I will be posting about my learnings and experiences from my work on AI projects.
        </p>
      </div>
    </section>
  );
}
