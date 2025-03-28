import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { getSingletonHighlighter } from "shiki";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const highlighter = await getSingletonHighlighter({
  themes: ["nord", "dracula", "night-owl", "tokyo-night"],
  langs: [
    "typescript",
    "javascript",
    "json",
    "bash",
    "shell",
    "css",
    "html",
    "markdown",
    "tsx",
    "go",
    "yaml",
  ],
});

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium mb-2 text-4xl" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="text-zinc-200 font-medium mt-8 mb-4 text-2xl" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-zinc-200 font-medium mt-8 mb-4 text-xl" {...props} />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-zinc-300 leading-snug" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-zinc-300 list-decimal pl-5 space-y-2" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-zinc-300 list-disc pl-5 space-y-1" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-sky-400 hover:dark:text-sky-300 dark:underline dark:underline-offset-2 dark:decoration-sky-800";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"code">) => {
    if (!className) {
      return (
        <code
          className="rounded px-1 py-0.5 text-sm font-medium bg-zinc-700 text-zinc-200"
          {...props}
        >
          {children}
        </code>
      );
    }

    const language = className.replace("language-", "");
    const htmlContent = highlighter.codeToHtml(children as string, {
      lang: language,
      themes: {
        dark: "night-owl",
        light: "night-owl",
      },
    });

    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  },

  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-zinc-300 pl-4 text-zinc-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
