export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900">
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 pt-40 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Welcome to The Berkeley Project
        </h1>
        <p className="max-w-2xl text-lg text-gray-700">
          We unite the Berkeley community through service and meaningful
          connections with the greater East Bay. Explore our impact, learn about
          our committees, and see how you can support the cause.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/impact"
            className="rounded-full bg-[#003262] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1f4f7a]"
          >
            Explore Our Impact
          </a>
          <a
            href="/committees"
            className="rounded-full border border-[#003262] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#003262] transition-colors hover:bg-[#003262] hover:text-white"
          >
            Meet Our Committees
          </a>
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-2">
        <article className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
          <h2 className="text-xl font-semibold text-[#003262]">
            Community Driven Service
          </h2>
          <p className="mt-4 text-sm text-gray-700">
            Students and East Bay partners collaborate on projects that make a
            tangible difference for schools, neighborhoods, and parks.
          </p>
        </article>
        <article className="rounded-3xl bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.1)]">
          <h2 className="text-xl font-semibold text-[#003262]">
            Year-Round Engagement
          </h2>
          <p className="mt-4 text-sm text-gray-700">
            Our committees plan events, secure resources, and capture stories so
            Berkeley Project can keep growing year after year.
          </p>
        </article>
      </section>
    </div>
  );
}
