import Profile from "@/components/Profile";
import Skills from "@/components/Skills";
import ExperienceAndEducation from "@/components/ExperienceAndEducation";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="w-full">
      <Profile/>
      <ExperienceAndEducation/>
      <Skills/>
    </main>
  );
}
