import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Next.js 15 🚀</h1>
      <Button label="Click Me" />

      <ul className="mt-4 space-y-2">
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Signup</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}
