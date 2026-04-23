import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import TeamSection from '../components/TeamSection'
import PartnerMarquee from '../components/PartnerMarquee'
import LiveLab from '../components/LiveLab'
import InteractionHub from '../components/InteractionHub'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PartnerMarquee />
      <ServicesSection />
      <LiveLab />
      <AboutSection />
      <TeamSection />
      <InteractionHub />
    </div>
  )
}
