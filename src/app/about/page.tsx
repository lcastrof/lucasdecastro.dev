export default function About() {
  return (
    <div className="flex flex-col gap-2 justify-center font-[family-name:var(--font-geist-sans)] flex-full">
      <h1 className="text-6xl text-gray-200">About</h1>
      <p className="text-xl max-w-prose">
        This is a simple blog built with Next.js and Tailwind CSS. You can find
        the source code somewhere, I guess.
      </p>
    </div>
  );
}
