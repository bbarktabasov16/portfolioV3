import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { navItems } from '@/data';
import Grid from "@/components/Grid";

const App = () => {
	return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default App
