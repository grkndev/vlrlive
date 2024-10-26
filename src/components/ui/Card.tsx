import { cn } from "@/lib/utils";

export function Card({
  children,
  className: ca,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("bg-[#121212] border-2 border-[#161616] shadow-md rounded-xl", ca)}>{children}</div>
  );
}
export function CardHeader({
  children,
  className: ca,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-2", ca)}>{children}</div>;
}
export function CardBody({
  children,
  className: ca,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-2 flex", ca)}>{children}</div>;
}
export function CardFooter({
  children,
  className: ca,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("p-2", ca)}>{children}</div>;
}
