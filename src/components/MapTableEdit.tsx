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

export default function MapTableEdit({ data }: { data: MapTableProps }) {
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
              <Input value={row.player} />
            </TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.rr} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.acs} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.k} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.d} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.a} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.plusMinus} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.kast} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.acs} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.adr} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.hs} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.fk} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.fd} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.avarage} />
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
        {data.team2.map((row: any, index) => (
          <TableRow key={index}>
            <TableCell>
              <Input value={row.player} />
            </TableCell>
            <TableCell>
              <Avatar className="rounded-md size-8 p-1 bg-[#161616]">
                <AvatarImage src={`/${row.agents}.png`} />
                <AvatarFallback>{row.agents.at(0)}</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.rr} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.acs} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.k} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.d} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.a} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.plusMinus} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.kast} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.acs} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.adr} />
            </TableCell>
            <TableCell>
              <Input className="w-16 text-center" value={row.hs} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.fk} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.fd} />
            </TableCell>
            <TableCell>
              <Input className="w-10 text-center" value={row.avarage} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
