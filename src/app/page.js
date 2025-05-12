import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="w-full">
      <Profile/>
      <Skills/>
      <Experiences/>
      <Education/>
    </main>
  );
}