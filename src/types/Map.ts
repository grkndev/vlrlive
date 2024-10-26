export type MapHeaderProps = {
  team1: string;
  team2: string;
  mapName: string;
  score1: number;
  score2: number;
  time: string;
};
export type MapTabsProps = {
  maps: string[];
  activeMapIndex: number;
  onMapChange: (index: number) => void;
};
export type MapTableProps = {
  team1: {
    player: string;
    agents: string[];
    rr: string;
    acs: string;
    k: string;
    d: string;
    a: string;
    plusMinus: string;
    kast: string;
    adr: string;
    hs: string;
    fk: string;
    fd: string;
    avarage: string;
  }[];
  team2: {
    player: string;
    agents: string[];
    rr: string;
    acs: string;
    k: string;
    d: string;
    a: string;
    plusMinus: string;
    kast: string;
    adr: string;
    hs: string;
    fk: string;
    fd: string;
    avarage: string;
  }[];
};
export type MapMVPProps = {
  player: {
    name: string;
    avatar: string;
  };
  stats: {
    acs: number;
    kda: string;
  };
};
