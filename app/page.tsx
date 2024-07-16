import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-custom-green-night text-custom-light">
      Welcome To co:nnect platform click here to connect{" "}
      <Button
        type="button"
        className="bg-custom-green-oil rounded hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
      >
        <Link href="/signup">Sing up</Link>
      </Button>
    </main>
  );
}
