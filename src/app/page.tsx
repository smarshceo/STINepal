import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Section from '@/components/Section/Section';
import Commitment from '@/components/Commitment/Commitment';
import Partnership from '@/components/Partnership/Partnership';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Section />
      <Commitment />
      <Partnership />
      <Footer />
    </main>
  );
}
