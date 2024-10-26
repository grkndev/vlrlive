export type TournamentCardProps = {
  tournamentName: string;
  tmIcon: string;
  date: string;
  time: string;
  team1: string;
  team1Icon: string;
  team2: string;
  team2Icon: string;
  matchScore1: number;
  matchScore2: number;
  bannedMaps: string[];
  stage: string;
};

export type TournamentEditCardProps = {
  tournamentNameOnChange: (value: string) => void;
  tmIconOnChange: (value: string) => void;
  dateOnChange: (value: string) => void;
  timeOnChange: (value: string) => void;
  team1OnChange: (value: string) => void;
  team1IconOnChange: (value: string) => void;
  team2OnChange: (value: string) => void;
  team2IconOnChange: (value: string) => void;
  matchScore1OnChange: (value: string) => void;
  matchScore2OnChange: (value: string) => void;
  bannedMapsOnChange: (value: string) => void;
  stageOnChange: (value: string) => void;
};
