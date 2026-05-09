"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      {/* Fallback loading state while redirecting */}
      <div className="size-8 border-2 border-[#5EC8F2]/20 border-t-[#5EC8F2] rounded-full animate-spin" />
    </div>
  );
}
