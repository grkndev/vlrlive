import { Button } from "./ui/button";

export default function MapTabs({
  maps,
  activeMapIndex,
  onMapChange,
}: {
  maps: string[];
  activeMapIndex: number;
  onMapChange: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-1 p-1 bg-cardbg rounded-md">
      {maps.map((map, index) => (
        <Button
          key={index}
          onClick={() => onMapChange(index)}
          className="w-full"
          size={"tab"}
          variant={activeMapIndex === index ? "secondary" : "ghost"}
        >
          {index + 1} - {map}
        </Button>
      ))}
    </div>
  );
}
