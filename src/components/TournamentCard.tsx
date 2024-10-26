import Team from "@/components/Team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";
import { TournamentCardProps } from "@/types/Card";
export default function TournamentCard({
  tournamentName,
  tmIcon,
  date,
  time,
  team1,
  team1Icon,
  team2,
  team2Icon,
  matchScore1,
  matchScore2,
  bannedMaps,
  stage,
}: TournamentCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-6 px-8">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Avatar className="rounded-lg">
            <AvatarImage src={tmIcon} />
            <AvatarFallback>{tournamentName.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{tournamentName}</span>
        </div>
        <div className="flex flex-col items-end justify-center text-xs text-zinc-400">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </CardHeader>
      <Separator className="h-[2px] bg-[#161616]" />
      <CardBody className="justify-between items-center p-8">
        <Team teamName={team1} teamLogo={team1Icon} />
        <div className="flex items-center justify-center font-bold space-x-2 text-3xl">
          <span>{matchScore1}</span>
          <span>-</span>
          <span>{matchScore2}</span>
        </div>
        <Team
          teamName={team2}
          teamLogo={team2Icon}
          className="flex-row-reverse"
        />
      </CardBody>
      <Separator className="h-[2px] bg-[#161616]" />
      <CardFooter className="flex items-center justify-between px-8 py-6 text-xs text-zinc-400">
        <span>{stage}</span>
        <span>Banned: {bannedMaps.join(", ")}</span>
      </CardFooter>
    </Card>
  );
}
