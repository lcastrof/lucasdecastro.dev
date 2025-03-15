import { FaDownload } from "react-icons/fa";

interface DownloadCVProps {
  cvUrl: string;
  label: string;
}

export function DownloadCV({ cvUrl, label }: DownloadCVProps) {
  return (
    <div className="flex justify-center mt-12">
      <a
        href={cvUrl}
        download
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors"
      >
        <FaDownload className="w-4 h-4" />
        {label}
      </a>
    </div>
  );
}
