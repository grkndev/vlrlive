import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Team({
  teamName = "Team Name",
  teamLogo = "https://github.com/shadcn.png",
  className: cnn,
}: {
  teamName: string;
  teamLogo: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-center gap-x-2", cnn)}>
      <span className="font-bold text-xl">Team Name</span>
      <Avatar className="rounded-lg size-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}

