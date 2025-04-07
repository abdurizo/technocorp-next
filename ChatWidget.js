import { useEffect } from "react";

export default function ChatWidget() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "./chat.js"; // Adjust path as needed
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Clean up the script
      };
    }
  }, []);

  return null; // Nothing to render directly
}
