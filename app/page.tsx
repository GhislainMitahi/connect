import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 ">
      Welcome To co:nnect platform click here to know more{" "}
      <Button>Click me</Button>
      <div style={{ fontFamily: "var(--font-manrope)" }}>
        <p style={{ fontWeight: 300 }}>This is Manrope font with weight 300.</p>
        <p style={{ fontWeight: 400 }}>This is Manrope font with weight 400.</p>
        <p style={{ fontWeight: 500 }}>This is Manrope font with weight 500.</p>
        <p style={{ fontWeight: 700 }}>This is Manrope font with weight 700.</p>
      </div>
    </main>
  );
}
