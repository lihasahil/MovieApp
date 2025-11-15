import { cn } from "@/lib/utils";

/**
 * BackgroundGlow component to create a glowing background effect.
 *
 * This component renders a radial gradient background that can be used to enhance the visual appearance of a section.
 * It is designed to be used as a decorative element in the UI.
 */
export const BackgroundGlow = ({ className }: { className?: string }) => (
  <div className={cn("pointer-events-none absolute inset-0 z-[-1]", className)}>
    <div className="relative h-full w-full [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_at_center,#3b82f620,transparent)] [&>div]:opacity-60 [&>div]:mix-blend-multiply">
      <div></div>
    </div>
  </div>
);
