import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-custom-green-night">
      <div>
        <h1 className="text-custom-green-oil text-xl font-bold">ERROR</h1>
        <div className="text-custom-green-oil text-lg">
          Oooooops!!!, If you get it means Something went wrong for you ... But
          it's not the End For you!
        </div>
        <Button
          type="button"
          className="bg-custom-green-oil rounded hover:bg-custom-green-light text-custom-green-night hover:text-custom-light"
        >
          <Link href="/">Go Back to Home page</Link>
        </Button>
      </div>
    </main>
  );
};

export default page;
