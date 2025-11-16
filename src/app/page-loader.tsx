import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: LoaderProps) => (
  <div
    aria-label="Loading..."
    role="status"
    className={cn(
      " bg-linear-to-b from-slate-950 to-slate-900 relative flex min-h-screen items-center justify-center",
      className
    )}
  >
    <div className="w-full flex flex-col justify-center items-center py-20">
      <div className="flex items-center gap-3 mb-8">
        <img src="/movie.svg" alt="MM" className="size-10" />
        <span className="text-2xl font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent font-momo">
          MovieMania
        </span>
      </div>

      {/* Simple moving line loader */}
      <div className="w-64 h-1 bg-linear-to-r from-slate-700 to-slate-800 rounded-full overflow-hidden relative shadow-lg">
        <div className="absolute h-full w-20 bg-linear-to-r from-amber-400 to-amber-600 rounded-full animate-[slide_1.5s_ease-in-out_infinite] shadow-lg shadow-amber-500/50"></div>
      </div>
    </div>
  </div>
);
