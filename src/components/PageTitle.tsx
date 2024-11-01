'use client'

import { cn } from "@/lib/utils";

type TitleProps = {
    title: string;
    className?: string;
}

export default function PageTitle({title,className}:TitleProps) {
  return (
    <>
  <h1 className={cn("text-2xl font-bold", className)}>
    {title}
    </h1>
    </>
  );
}
