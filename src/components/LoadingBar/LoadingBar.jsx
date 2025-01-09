import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const LoadingBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  if (!loading) return null;

  return (
    <div className="">
      <div className="h-[5px] w-full bg-[#00E85D]/80 transition-all z-50 relative duration-300 ease-out animate-[loading_4s_ease-in-out_infinite]" />
    </div>
  );
};

export default LoadingBar;
