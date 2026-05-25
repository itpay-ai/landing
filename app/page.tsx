import { HeroSection } from "@/components/landing/hero-section"
import { InfrastructureSection } from "@/components/landing/infrastructure-section"
import { MCPIntegrationSection } from "@/components/landing/mcp-integration-section"
import { PaymentRailsSection } from "@/components/landing/payment-rails-section"
import { FourPartySection } from "@/components/landing/four-party-section"
import { ProtocolSection } from "@/components/landing/protocol-section"
import { ConversationalCommerceSection } from "@/components/landing/conversational-commerce-section"
import { AINativeSection } from "@/components/landing/ai-native-section"
import { WalletCreditsSection } from "@/components/landing/wallet-credits-section"
import { EventRuntimeSection } from "@/components/landing/event-runtime-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { FutureCommerceSection } from "@/components/landing/future-commerce-section"
import { TrustSection } from "@/components/landing/trust-section"
import { CTASection } from "@/components/landing/cta-section"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <InfrastructureSection />
      <FourPartySection />
      <ProtocolSection />
      <MCPIntegrationSection />
      <PaymentRailsSection />
      <ConversationalCommerceSection />
      <AINativeSection />
      <WalletCreditsSection />
      <EventRuntimeSection />
      <PricingSection />
      <TrustSection />
      <FutureCommerceSection />
      <CTASection />
      <Footer />
    </main>
  )
}
