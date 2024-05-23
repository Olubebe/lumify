import Link from "next/link";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="lg:grid-col-3 lg:pt- xl: lg:pb- pb-24 pt-10 sm:pb-32 lg:gap-x-0 lg:pb-52  lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="cols-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className=" absolute -top-20 left-0 hidden w-28 lg:block ">
                {/* HeroSection Ui */}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
