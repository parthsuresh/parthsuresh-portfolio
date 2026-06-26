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

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a Software Engineer (Machine Learning) at Meta Reality Labs. I work on
          synthetic data, data curation, and benchmarks for evaluating language
          and multimodal models.
        </p>
        <p>
          Before this, I was an ML research engineer at Scale AI, working on
          reasoning, synthetic data generation, and LLM judges. Earlier at
          Meta, I was a research data scientist working at the intersection
          of developer productivity, software engineering, and machine
          learning.
        </p>
      </div>
    </section>
  );
}
