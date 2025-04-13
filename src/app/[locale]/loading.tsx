export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full min-h-[70vh]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-2 border-b-2 border-sky-500 animate-spin" />
        <div className="absolute inset-0 blur-xl bg-sky-500/20 animate-pulse rounded-full" />
      </div>
    </div>
  );
}
