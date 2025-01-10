import Image from "next/image";

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
        Thoughts and Learnings
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Incoming Software Engineer (Machine Learning) at Meta Reality Labs, with previous experience as a Machine Learning Research Engineer at Scale AI and Research Data Scientist at Meta.
        </p>
        <p>
          My research interests are in generative AI, primarily in the areas of synthetic data generation and agentic AI.
        </p>
      </div>
    </section>
  );
}
