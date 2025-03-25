interface PageHeaderProps {
  subtitle: string;
}

export function PageHeader({ subtitle }: PageHeaderProps) {
  return (
    <div>
      <h2 className="text-xl max-w-prose text-slate-400 mt-2 text-wrap!">
        {subtitle}
      </h2>
    </div>
  );
}
