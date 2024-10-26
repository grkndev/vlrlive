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

export default function MapTable({
  data,
}: {
  data: MapTableProps;
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
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
            <TableCell>{row.player}</TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{row.rr}</TableCell>
            <TableCell>{row.acs}</TableCell>
            <TableCell>{row.k}</TableCell>
            <TableCell>{row.d}</TableCell>
            <TableCell>{row.a}</TableCell>
            <TableCell>{row.plusMinus}</TableCell>
            <TableCell>{row.kast}</TableCell>
            <TableCell>{row.acs}</TableCell>
            <TableCell>{row.adr}</TableCell>
            <TableCell>{row.hs}</TableCell>
            <TableCell>{row.fk}</TableCell>
            <TableCell>{row.fd}</TableCell>
            <TableCell>{row.avarage}</TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
        {data.team2.map((row: any, index) => (
          <TableRow key={index}>
            <TableCell>{row.player}</TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>{row.rr}</TableCell>
            <TableCell>{row.acs}</TableCell>
            <TableCell>{row.k}</TableCell>
            <TableCell>{row.d}</TableCell>
            <TableCell>{row.a}</TableCell>
            <TableCell>{row.plusMinus}</TableCell>
            <TableCell>{row.kast}</TableCell>
            <TableCell>{row.acs}</TableCell>
            <TableCell>{row.adr}</TableCell>
            <TableCell>{row.hs}</TableCell>
            <TableCell>{row.fk}</TableCell>
            <TableCell>{row.fd}</TableCell>
            <TableCell>{row.avarage}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
