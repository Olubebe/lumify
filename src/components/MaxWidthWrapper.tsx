import { ReactNode } from "react";
import { cn } from "~/lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "maz-w-screen w-full-screen-xl md:ppx-20 mx-auto h-full px-2.5",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
