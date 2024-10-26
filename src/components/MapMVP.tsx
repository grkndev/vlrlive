import { MapMVPProps } from "@/types/Map";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function MapMVP({ player, stats }: MapMVPProps) {
  return (
    <div className="flex flex-row items-center justify-around">
      <span className="text-6xl font-extrabold bg-gradient-to-r from-[#BEAE00] via-[#585100] to-[#BEAE00] bg-clip-text text-transparent">
        MVP
      </span>
      <div className="flex flex-row items-center justify-center space-x-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{player.name}</span>
          <div className="flex flex-row justify-between items-center text-xs w-full">
            <span>ACS: {stats.acs}</span>
            <span>KDA: {stats.kda}</span>
          </div>
        </div>
        <Avatar className="rounded-md size-20">
          <AvatarImage src={player.avatar} />
          <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
