import HeroPage from "@/Components/HeroPage";
import UserProfile from "@/Components/UserProfile";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroPage />
      <UserProfile name='abiram' role='FE-D' working={true} email='abiramofficial002@gmail.com' />
    </main>
  );
}
