"use client";
import MapHeader from "@/components/MapHeader";
import MapMVP from "@/components/MapMVP";
import MapRounds from "@/components/MapRounds";
import MapTable from "@/components/MapTable";
import MapTabs from "@/components/MapTabs";
import TournamentCard from "@/components/TournamentCard";
import TournamentEditCard from "@/components/TournamentCardEdit";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/input";
import { MapRoundProps, MapTableProps } from "@/types/Map";
import { Check, Minus, PlusIcon, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MapTableEdit from "@/components/MapTableEdit";
import { cn } from "@/lib/utils";

const tableData: MapTableProps = {
  team1: [
    {
      player: "Player Name",
      agents: ["neon"],
      rr: "1.52",
      acs: "200",
      k: "20",
      d: "10",
      a: "5",
      plusMinus: "10",
      kast: "80%",
      adr: "100",
      hs: "50%",
      fk: "5",
      fd: "2",
      avarage: "10",
    },
  ],
  team2: [
    {
      player: "Player Name",
      agents: ["neon"],
      rr: "1.52",
      acs: "200",
      k: "20",
      d: "10",
      a: "5",
      plusMinus: "10",
      kast: "80%",
      adr: "100",
      hs: "50%",
      fk: "5",
      fd: "2",
      avarage: "10",
    },
  ],
};
export default function Home() {
  const [activeMapIndex, setActiveMapIndex] = useState(0);
  const [roundCount, setRoundCount] = useState(24);
  const [roundData, setRoundData] = useState<MapRoundProps[]>([
    {
      round: 1,
      type: "none",
      team: false,
      side: "att",
    },
  ]);

  useEffect(() => {
    if (roundCount < roundData.length) {
      setRoundData(
        roundData
          .filter((_, i) => i < roundCount)
          .map((round, i) => {
            if (i >= roundData.length) {
              return {
                round: i + 1,
                type: "none",
                team: false,
                side: "att",
              };
            }
            return round;
          })
      );
    } else {
      setRoundData([
        ...roundData,
        {
          round: roundData.length + 1,
          type: "none",
          team: false,
          side: "att",
        },
      ]);
    }
  }, [roundCount]);

  const [maps, setMaps] = useState([
    {
      name: "Bind",
      tm1: "13",
      tm2: "8",
      time: "13:00",
    },
  ]);
  const [tournamentData, setTournamentData] = useState({
    name: "Tournament Name",
    logo: "Tournament Logo",
    date: "Date",
    time: "Time",
    team1: "Team 1 Name",
    team1Logo: "Team 1 Logo",
    team2: "Team 2 Name",
    team2Logo: "Team 2 Logo",
    bracket: "Bracket",
    bannedMaps: "Banned maps",
  });

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row w-full space-x-4 items-center justify-center mt-4">
        <Image
          className="w-auto size-10 object-cover"
          src={"/BBLGPT-WHITE-EMBLEM.png"}
          width={1000}
          height={1000}
          alt="bblgptlogotext"
        />
        <Image
          className="w-20"
          src={"/BBLGPTLOGO.png"}
          width={1500}
          height={1000}
          alt="bblgptlogo"
        />
      </div>
      <div className="flex flex-col items-center justify-center p-10 gap-10 ">
        <div className="xl:w-1/2 w-full flex flex-col gap-y-8 ">
          <Card className="p-4 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 ">
              <Input
                value={tournamentData.name}
                onChange={(e) =>
                  setTournamentData({ ...tournamentData, name: e.target.value })
                }
              />
              <Input
                value={tournamentData.logo}
                onChange={(e) =>
                  setTournamentData({ ...tournamentData, logo: e.target.value })
                }
              />
              <Input
                value={tournamentData.date}
                onChange={(e) =>
                  setTournamentData({ ...tournamentData, date: e.target.value })
                }
              />
              <Input
                value={tournamentData.time}
                onChange={(e) =>
                  setTournamentData({ ...tournamentData, time: e.target.value })
                }
              />
              <Input
                value={tournamentData.team1}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    team1: e.target.value,
                  })
                }
              />
              <Input
                value={tournamentData.team1Logo}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    team1Logo: e.target.value,
                  })
                }
              />
              <Input
                value={tournamentData.team2}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    team2: e.target.value,
                  })
                }
              />
              <Input
                value={tournamentData.team2Logo}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    team2Logo: e.target.value,
                  })
                }
              />
              <Input
                value={tournamentData.bracket}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    bracket: e.target.value,
                  })
                }
              />
              <Input
                value={tournamentData.bannedMaps}
                onChange={(e) =>
                  setTournamentData({
                    ...tournamentData,
                    bannedMaps: e.target.value,
                  })
                }
              />
            </div>
            <Button className="w-full" variant={"secondary"}>
              Save
            </Button>
          </Card>
          <Card className="p-2 gap-2 flex flex-col">
            <div className="flex gap-8 flex-wrap">
              {maps.map((map, index) => (
                <div key={index} className="flex flex-col gap-2 items-center">
                  <Input
                    className="w-full"
                    value={map.name}
                    onChange={(e) => {
                      setMaps(
                        maps.map((m, i) =>
                          i === index ? { ...m, name: e.target.value } : m
                        )
                      );
                    }}
                  />
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="text-xs">TM 1</span>
                      <Input
                        className="w-10 text-center"
                        onChange={(e) =>
                          setMaps(
                            maps.map((m, i) =>
                              i === index ? { ...m, tm1: e.target.value } : m
                            )
                          )
                        }
                        value={map.tm1}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="text-xs">TM 2</span>
                      <Input
                        className="w-10 text-center"
                        onChange={(e) =>
                          setMaps(
                            maps.map((m, i) =>
                              i === index ? { ...m, tm2: e.target.value } : m
                            )
                          )
                        }
                        value={map.tm2}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="text-xs">Time</span>
                      <Input
                        className="w-16 text-center"
                        onChange={(e) =>
                          setMaps(
                            maps.map((m, i) =>
                              i === index ? { ...m, time: e.target.value } : m
                            )
                          )
                        }
                        value={map.time}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                      <Button variant={"default"} className="w-full size-8">
                        <Check />
                      </Button>
                      <Button
                        disabled={maps.length == 1}
                        onClick={() =>
                          setMaps(maps.filter((_, i) => i !== index))
                        }
                        variant={"destructive"}
                        className="w-full size-8"
                      >
                        <Trash />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={() =>
                  setMaps([
                    ...maps,
                    {
                      name: "Map Name",
                      tm1: "0",
                      tm2: "0",
                      time: "0:00",
                    },
                  ])
                }
                variant={"secondary"}
                className="w-10 h-10"
              >
                <PlusIcon />
              </Button>
            </div>
          </Card>
          <Card className="p-4 flex flex-col space-y-4 items-start">
            <div className="flex items-center justify-center gap-2">
              <span>Round Count</span>
              <Input
                className="w-12 text-center"
                contentEditable={false}
                value={roundCount}
              />
              <Button
                onClick={() => setRoundCount(roundCount + 1)}
                className="size-5"
                variant={"secondary"}
              >
                <PlusIcon />
              </Button>
              <Button
                onClick={() => setRoundCount(roundCount - 1)}
                className="size-5"
                variant={"secondary"}
              >
                <Minus />
              </Button>
            </div>
            <div className="flex items-end justify-center gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-xs">T1</span>
                <span className="text-xs">T2</span>
              </div>
              {roundData.map((round, index) => (
                <div key={index} className="flex flex-col gap-1 items-center ">
                  <span className="text-xs">{round.round}</span>
                  <Popover>
                    <PopoverTrigger
                      className={cn(
                        "size-6 bg-[#161616] hover:bg-[#202020] p-1 rounded-md",
                        round.type !== "none" && !round.team && round.side === "att" && "bg-lose",
                        round.type !== "none" && !round.team && round.side === "def" && "bg-win"
                      )}
                    >
                      {!round.team && round.type !== "none" && (
                        <Image
                          src={`/${round.type}.webp`}
                          width={100}
                          height={100}
                          alt="elim"
                          className="size-5 w-full h-full"
                        />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="flex gap-2 w-fit">
                      <div className="bg-cardbg p-1 size-6 rounded-md"></div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "elim",
                                      side: "def",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/elim.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "elim",
                                      side: "att",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/elim.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "defuse",
                                      side: "def",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/defuse.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "defuse",
                                      side: "att",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/defuse.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "boom",
                                      side: "def",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/boom.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "boom",
                                      side: "att",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/boom.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "time",
                                      side: "def",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/time.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "time",
                                      side: "att",
                                      team: false,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/time.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Popover>
                    <PopoverTrigger
                      className={cn(
                        "size-6 bg-[#161616] hover:bg-[#202020] p-1 rounded-md",
                        round.team && round.side === "att" && "bg-lose",
                        round.team && round.side === "def" && "bg-win"
                      )}
                    >
                      {round.team && round.type !== "none" && (
                        <Image
                          src={`/${round.type}.webp`}
                          width={100}
                          height={100}
                          alt="elim"
                          className="size-5 w-full h-full"
                        />
                      )}
                    </PopoverTrigger>
                    <PopoverContent className="flex gap-2 w-fit">
                      <div className="bg-cardbg p-1 size-6 rounded-md"></div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "elim",
                                      side: "def",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/elim.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "elim",
                                      side: "att",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/elim.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "defuse",
                                      side: "def",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/defuse.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "defuse",
                                      side: "att",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/defuse.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "boom",
                                      side: "def",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/boom.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "boom",
                                      side: "att",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/boom.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "time",
                                      side: "def",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-win p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/time.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                        <div
                          onClick={() => {
                            setRoundData(
                              roundData.map((r, i) =>
                                i === index
                                  ? {
                                      ...r,
                                      type: "time",
                                      side: "att",
                                      team: true,
                                    }
                                  : r
                              )
                            );
                          }}
                          className="bg-lose p-1 size-6 rounded-md flex items-center justify-center"
                        >
                          <Image
                            src={"/time.webp"}
                            width={100}
                            height={100}
                            alt="elim"
                            className="size-5 w-full h-full"
                          />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ))}
            </div>
            <Button className="w-full" variant={"secondary"}>
              Save
            </Button>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="font-bold text-2xl">
            Map Stats: {maps[activeMapIndex].name}
          </h1>
          <Card className="w-full">
            <MapTableEdit data={tableData} />
            <div className="p-4">
              <Button className="w-full" variant={"secondary"}>
                Save
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
