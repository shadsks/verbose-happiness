import Image from "next/image";
import { Reveal, RevealLines } from "@/components/Reveal";
import { MarkerLink, SectionLabel } from "@/components/nitex-ui";

export function Story() {
  return (
    <section className="relative w-full bg-paper text-black">
      <div className="relative min-h-svh w-full overflow-hidden">
        {/* background editorial image */}
        <Image
          src="/images/ad2ed937b1a767d90cdeb432397a3c2e5257a23a-1792x2140.jpg"
          alt="Model in a field with a leather bag"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-paper/10" />

        {/* eyebrow */}
        <div className="absolute left-4 top-24 sm:left-8">
          <SectionLabel num="1" title="OUR MISSION" dark />
        </div>

        {/* giant display heading */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 sm:px-8">
          <RevealLines
            className="font-display display-lg text-black"
            lines={["FROM MISSED", "LEADS TO", "BOOKINGS"]}
          />
        </div>

        {/* lime info card */}
        <Reveal
          variant="slide-in"
          className="absolute bottom-6 right-4 sm:right-8 w-[min(92vw,30rem)] bg-lime text-black p-7 sm:p-9"
        >
          <p className="text-sm sm:text-[15px] leading-relaxed">
            Vyzee helps local businesses turn inquiry gaps into revenue growth
            with Websites, automation, SEO, and marketing systems built for daily operations.
          </p>
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed">
            We focus first on dental clinics and medspas across Metro Manila,
            then expand into F&B and wellness verticals. Our promise is simple: improve inquiry-to-booking conversion by 30% in 90 days, or we keep working until we hit it.
          </p>
          <div className="mt-7 flex flex-col gap-3 border-t border-black/15 pt-5">
            <MarkerLink>INSIDE VYZEE</MarkerLink>
            <MarkerLink>WORKFLOW AUTOMATIONS</MarkerLink>
            <MarkerLink>GROWTH BUNDLES</MarkerLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
