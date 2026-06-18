import HeroSection       from '../components/HeroSection'
import PartnerMarquee    from '../components/PartnerMarquee'
import ServicesSection   from '../components/ServicesSection'
import StatsSection      from '../components/StatsSection'
import CaseStudiesSection from '../components/CaseStudiesSection'
import AboutSection      from '../components/AboutSection'
import InsightsSection   from '../components/InsightsSection'
import CareersSection    from '../components/CareersSection'
import LocationsSection  from '../components/LocationsSection'
import TeamSection       from '../components/TeamSection'
import InteractionHub    from '../components/InteractionHub'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PartnerMarquee />
      <ServicesSection />
      <StatsSection />
      <CaseStudiesSection />
      <AboutSection />
      <InsightsSection />
      <CareersSection />
      <LocationsSection />
      <TeamSection />
      <InteractionHub />
    </div>
  )
}
