import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { MapTableProps } from "@/types/Map";
import { Input } from "./ui/input";

export default function MapTableEdit({
  data,
  onChange,
}: {
  data: MapTableProps;
  onChange: (tableData: MapTableProps) => void;
}) {
  const handleChange = (
    teamKey: 'team1' | 'team2',
    rowIndex: number,
    field: string,
    value: string
  ) => {
    const newData = {
      ...data,
      [teamKey]: data[teamKey].map((row, index) =>
        index === rowIndex ? { ...row, [field]: value } : row
      ),
    };
    onChange(newData);
  };

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="text-xs text-center">Player</TableHead>
          <TableHead className="text-xs text-center">Agents</TableHead>
          <TableHead className="text-xs text-center">RR</TableHead>
          <TableHead className="text-xs text-center">ACS</TableHead>
          <TableHead className="text-xs text-center">K</TableHead>
          <TableHead className="text-xs text-center">D</TableHead>
          <TableHead className="text-xs text-center">A</TableHead>
          <TableHead className="text-xs text-center">+/-</TableHead>
          <TableHead className="text-xs text-center">KAST</TableHead>
          <TableHead className="text-xs text-center">ACS</TableHead>
          <TableHead className="text-xs text-center">ADR</TableHead>
          <TableHead className="text-xs text-center">HS%</TableHead>
          <TableHead className="text-xs text-center">FK</TableHead>
          <TableHead className="text-xs text-center">FD</TableHead>
          <TableHead className="text-xs text-center">+/-</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.team1.map((row: any, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input 
                value={row.player} 
                onChange={(e) => handleChange('team1', index, 'player', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.rr}
                onChange={(e) => handleChange('team1', index, 'rr', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.acs}
                onChange={(e) => handleChange('team1', index, 'acs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.k}
                onChange={(e) => handleChange('team1', index, 'k', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.d}
                onChange={(e) => handleChange('team1', index, 'd', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.a}
                onChange={(e) => handleChange('team1', index, 'a', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.plusMinus}
                onChange={(e) => handleChange('team1', index, 'plusMinus', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.kast}
                onChange={(e) => handleChange('team1', index, 'kast', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.acs}
                onChange={(e) => handleChange('team1', index, 'acs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.adr}
                onChange={(e) => handleChange('team1', index, 'adr', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.hs}
                onChange={(e) => handleChange('team1', index, 'hs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.fk}
                onChange={(e) => handleChange('team1', index, 'fk', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.fd}
                onChange={(e) => handleChange('team1', index, 'fd', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.avarage}
                onChange={(e) => handleChange('team1', index, 'avarage', e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
        {data.team2.map((row: any, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input 
                value={row.player}
                onChange={(e) => handleChange('team2', index, 'player', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.rr}
                onChange={(e) => handleChange('team2', index, 'rr', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.acs}
                onChange={(e) => handleChange('team2', index, 'acs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.k}
                onChange={(e) => handleChange('team2', index, 'k', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.d}
                onChange={(e) => handleChange('team2', index, 'd', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.a}
                onChange={(e) => handleChange('team2', index, 'a', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.plusMinus}
                onChange={(e) => handleChange('team2', index, 'plusMinus', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.kast}
                onChange={(e) => handleChange('team2', index, 'kast', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.acs}
                onChange={(e) => handleChange('team2', index, 'acs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.adr}
                onChange={(e) => handleChange('team2', index, 'adr', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-16 text-center" 
                value={row.hs}
                onChange={(e) => handleChange('team2', index, 'hs', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.fk}
                onChange={(e) => handleChange('team2', index, 'fk', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.fd}
                onChange={(e) => handleChange('team2', index, 'fd', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input 
                className="w-10 text-center" 
                value={row.avarage}
                onChange={(e) => handleChange('team2', index, 'avarage', e.target.value)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
