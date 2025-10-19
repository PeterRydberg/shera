import Image from "next/image";
import { CTA } from "./CTA";

import { Bowlby_One } from "next/font/google";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const bowlbyOne = Bowlby_One({ subsets: ["latin"], weight: ["400"] });

export const Welcome = () => {
  return (
    <main className="flex flex-grow flex-col  text-primary">
      <div className="mb-8 flex flex-col items-center gap-4">
        <Image
          src="/shera_icon.svg"
          alt="Shera Logo"
          width={150}
          height={150}
        />
        <h1
          className={`${bowlbyOne.className} scroll-m-20  text-8xl font-extrabold tracking-tight`}
        >
          Shera
        </h1>
        <CTA />
      </div>

      <div className="flex flex-grow flex-row gap-4 bg-primary p-6 text-primary-foreground/90 shadow-lg">
        <div className="flex w-1/2 flex-col gap-4">
          <h2
            className={`${bowlbyOne.className} pb-2 text-center text-5xl font-semibold tracking-tight`}
          >
            Skjer &apos;a?
          </h2>

          <p className="leading-7">
            What&apos;s up? If you need to connect the people you love to your
            new and awesome event, you&apos;ve come to the right place. Shera is
            tool for just that, and it&apos;s quick, fast and easy!
          </p>
          <p className="leading-7">
            Are your friends and family all spread across multiple messaging
            services or social networks? Shera makes sure they all get their
            invites and stay in the loop. Invitees don&apos;t even need to sign
            up! Who needs all that extra noise?
          </p>

          <p className="leading-7">
            Go ahead and create an event, then let the excitement begin.
          </p>
        </div>

        <div className="flex w-1/2 flex-col gap-4">
          <h2
            className={`${bowlbyOne.className} pb-2 text-center text-5xl font-semibold tracking-tight`}
          >
            Share a...
          </h2>

          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              <span className="mx-8 text-lg font-medium text-muted-foreground">
                a birthday party
              </span>
              <span className="mx-8 text-lg font-medium text-muted-foreground">
                a wedding invite
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
