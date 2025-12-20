export default function BlogHero({ hero }) {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <img
        src={hero.image}
        alt={hero.title}
        className="rounded-xl object-cover w-full h-[300px]"
      />

      <div>
        <h1 className="text-3xl xl:text-4xl font-bold">
          {hero.title}
        </h1>
        <p className="text-gray-400 mt-3">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
}
