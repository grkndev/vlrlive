import Team from "@/components/Team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Separator } from "@/components/ui/separator";
import { TournamentCardProps, TournamentEditCardProps } from "@/types/Card";
import { Input } from "./ui/input";
export default function TournamentEditCard({
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

  tournamentNameOnChange,
  tmIconOnChange,
  dateOnChange,
  timeOnChange,
  team1OnChange,
  team1IconOnChange,
  team2OnChange,
  team2IconOnChange,
  matchScore1OnChange,
  matchScore2OnChange,
  bannedMapsOnChange,
  stageOnChange,
}: TournamentCardProps & TournamentEditCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-6 px-8">
        <div className="flex flex-row items-center justify-center space-x-2">
          <Avatar className="rounded-lg">
            <AvatarImage src={tmIcon} />
            <AvatarFallback>{tournamentName.charAt(0)}</AvatarFallback>
          </Avatar>
          <Input
            value={tournamentName}
            onChange={(e) => tournamentNameOnChange(e.target.value)}
          />
        </div>
        <div className="flex flex-row items-end justify-center text-xs space-x-1 text-zinc-400">
          <Input value={date} onChange={(e) => dateOnChange(e.target.value)} />
          <Input value={time} onChange={(e) => timeOnChange(e.target.value)} />
        </div>
      </CardHeader>
      <Separator className="h-[2px] bg-[#161616]" />
      <CardBody className="justify-between items-center p-8">
        <div className={"flex flex-col items-center justify-center gap-y-2"}>
          <Input
            value={team1}
            onChange={(e) => team1OnChange(e.target.value)}
          />
          <Input
            value={team1Icon}
            onChange={(e) => team1IconOnChange(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center font-bold space-x-2 text-3xl">
          <Input
            className="w-12 text-center"
            value={matchScore1}
            onChange={(e) => matchScore1OnChange(e.target.value)}
          />
          <span>-</span>
          <Input
            className="w-12 text-center"
            value={matchScore2}
            onChange={(e) => matchScore2OnChange(e.target.value)}
          />
        </div>
        <div
          className={
            "flex  items-center justify-center gap-y-2 flex-col"
          }
        >
          <Input
            value={team2}
            onChange={(e) => team2OnChange(e.target.value)}
          />
          <Input
            value={team2Icon}
            onChange={(e) => team2IconOnChange(e.target.value)}
          />
        </div>
      </CardBody>
      <Separator className="h-[2px] bg-[#161616]" />
      <CardFooter className="flex items-center space-x-12 justify-between px-8 py-6 text-xs text-zinc-400">
        <Input value={stage} onChange={(e) => stageOnChange(e.target.value)} />
        <Input
          value={bannedMaps.join(", ")}
          onChange={(e) => bannedMapsOnChange(e.target.value)}
        />
      </CardFooter>
    </Card>
  );
}
