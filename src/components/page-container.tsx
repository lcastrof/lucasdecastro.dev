interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex flex-col gap-6 font-[family-name:var(--font-geist-sans)] flex-full">
      {children}
    </div>
  );
}
