import { CurrentWeather } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CurrentWeather />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">This week's weather</h1>
          <p>Explore the next 5 days' weather</p>
          <div className="home__filter-container">Hi!</div>
        </div>
      </div>
    </main>
  );
}
