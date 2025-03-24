import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-4 basis-0 grow shrink">
      <h1 className="text-6xl font-bold text-zinc-100">404</h1>
      <p className="text-xl text-zinc-400 max-w-md">{t("message")}</p>
      <Link
        href="/"
        className="text-blue-400 hover:text-blue-300 transition-colors"
      >
        {t("back-home")}
      </Link>
    </div>
  );
}
