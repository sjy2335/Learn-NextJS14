import "./global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation/navigation";

export const metadata: Metadata = {
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "Best Movies on Best Framework.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
