import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function MapRounds({
  team1,
  team2,
  rounds,
}: {
  team1: { name: string; avatar: string };
  team2: { name: string; avatar: string };
  rounds: { round: number; winner: boolean }[];
}) {
  return (
    <div className="flex items-end justify-center space-x-4">
      <div className="flex flex-col items-center justify-center space-y-1">
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs">{team1.name}</span>
          <Avatar className="rounded-sm size-5">
            <AvatarImage src={team1.avatar} />
            <AvatarFallback>{team1.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs">{team2.name}</span>
          <Avatar className="rounded-sm size-5">
            <AvatarImage src={team2.avatar} />
            <AvatarFallback>{team2.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end space-x-2">
        {rounds.map((round, index) => (
          <div
            key={index}
            className="flex  flex-col items-center justify-center space-y-1"
          >
            <div className="rounded-sm size-5 flex items-center justify-center">
              <span className="text-xs">{round.round}</span>
            </div>
            {round.winner ? (
              <>
                <Avatar className="bg-win rounded-sm size-6 p-[2px]">
                  <AvatarImage src="/elim.webp" />
                </Avatar>
                <div className="bg-[#161616] rounded-sm size-6 p-[2px]" />
              </>
            ) : (
              <>
                <div className="bg-[#161616] rounded-sm size-6 p-[2px]" />
                <Avatar className="bg-lose rounded-sm size-6 p-[2px]">
                  <AvatarImage src="/elim.webp" />
                </Avatar>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
