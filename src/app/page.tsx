"use client";
import MapHeader from "@/components/MapHeader";
import MapMVP from "@/components/MapMVP";
import MapRounds from "@/components/MapRounds";
import MapTable from "@/components/MapTable";
import MapTabs from "@/components/MapTabs";
import TournamentCard from "@/components/TournamentCard";
import { Card } from "@/components/ui/Card";
import { MapTableProps } from "@/types/Map";
import Image from "next/image";
import { useState } from "react";

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
  const maps = ["Map 1", "Map 2", "Map 3"];
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
      <div className="flex flex-row items-center justify-center p-10 gap-10 ">
        <div className="w-1/2 flex flex-col gap-y-8 ">
          <TournamentCard
            bannedMaps={["Abbys", "Split"]}
            date="Saturday, October 26th"
            team1="Team 1"
            team1Icon="https://github.com/shadcn.png"
            team2="Team 2"
            team2Icon="https://github.com/shadcn.png"
            tournamentName="Tournament Name"
            tmIcon="https://github.com/shadcn.png"
            matchScore1={1}
            matchScore2={1}
            stage="PlayOffs: Upper Final"
            time="1:00 PM +03"
          />
          <div className="flex flex-col space-y-20">
            <div className="flex flex-col gap-8">
              <MapTabs
                maps={maps}
                activeMapIndex={activeMapIndex}
                onMapChange={setActiveMapIndex}
              />
              <MapHeader
                team1="Team 1"
                team2="Team 2"
                score1={8}
                score2={13}
                time="52:48"
                mapName={maps[activeMapIndex]}
              />
              <MapRounds
                team1={{ name: "TMN", avatar: "https://github.com/shadcn.png" }}
                team2={{ name: "TMN", avatar: "https://github.com/shadcn.png" }}
                rounds={Array.from({ length: 24 }).map((_, index) => ({
                  round: index + 1,
                  winner: index % 2 === 0,
                }))}
              />
            </div>
            <MapMVP
              player={{
                name: "Player Name",
                avatar: "https://github.com/shadcn.png",
              }}
              stats={{ kda: "30/10/10", acs: 350 }}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center space-y-2">
          <h1 className="font-bold text-2xl">
            Map Stats: {maps[activeMapIndex]}
          </h1>
          <Card>
            <MapTable data={tableData} />
          </Card>
        </div>
      </div>
    </div>
  );
}
