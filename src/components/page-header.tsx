interface PageHeaderProps {
  subtitle: string;
}

export function PageHeader({ subtitle }: PageHeaderProps) {
  return (
    <div>
      <h2 className="text-xl max-w-prose text-zinc-400 mt-2 dark:text-zinc-400 text-wrap!">
        {subtitle}
      </h2>
    </div>
  );
}
