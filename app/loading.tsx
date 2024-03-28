import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-screen fixed inset-0 flex justify-center items-center bg-black text-white z-[100]">
      <div className="flex gap-2">
        <Loader2 size={18} className="animate-spin" /> Loading...
      </div>
    </div>
  );
}
