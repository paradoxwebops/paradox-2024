"use client";

import { Skeleton } from "@nextui-org/react";
import { Loader2 } from "lucide-react";

export default function ComponentLoading({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  if (loading) {
    return (
      <div className="flex gap-2 justify-center items-center">
        <Loader2 className="animate-spin" /> Fetching the form for you....
      </div>
    );
  } else {
    return children;
  }
}
