import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
const Navbar = () => {
  const user = undefined;
  const isAdmin = false;
  return (
    <nav className="border-gray- sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-gray-200">
          <Link href="/" className="z-40 flex font-semibold">
            <span>Lumify</span>
          </Link>
          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  SignOut
                </Link>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard
                  </Link>
                ) : null}
                {/* <Link
                  href="/cart"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden items-center gap-1 sm:flex",
                  })}
                >
                  <ShoppingCart className="ml-1.5 h-5 w-5" />
                </Link> */}
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
                {/* visual separator */}
                {/* <div className="hidden h-8 w-px bg-zinc-200 sm:block" /> */}
              </>
            )}
            <div className="ml-4 flow-root lg:ml-6">
              <ShoppingCart />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
