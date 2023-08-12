import { CurrentWeather, FiveDayWeather } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CurrentWeather />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <FiveDayWeather />
        </div>
      </div>
    </main>
  );
}
