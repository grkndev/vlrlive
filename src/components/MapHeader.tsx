import { MapHeaderProps } from "@/types/Map";

export default function MapHeader({
  team1,
  team2,
  mapName,
  score1,
  score2,
  time,
}: MapHeaderProps) {
  return (
    <div className="items-center justify-between flex px-4">
      <div className="items-center justify-center gap-4 flex">
        <span className="text-3xl font-bold">{score1}</span>
        <span>{team1}</span>
      </div>
      <div className="items-center justify-center flex flex-col">
        <span className="text-2xl font-bold">{mapName}</span>
        <span className="text-sm text-zinc-400">{time}</span>
      </div>
      <div className="items-center justify-center gap-4 flex">
        <span>{team2}</span>
        <span className="text-3xl font-bold">{score2}</span>
      </div>
    </div>
  );
}
