import CommunitySection from "../Components/CommunitySection";
import ContactSection from "../Components/ContactSection";
import CtaSection from "../Components/CtaSection";
import FAQSection from "../Components/FAQSection";
import Features from "../Components/Features";
import Hero from "../Components/Hero";
import IntegrationSection from "../Components/IntegrationSection";
import Layout from "../Components/Layout";
import LiveFeed from "../Components/LiveFeed";
import ProWorkspace from "../Components/ProWorkspace";

const Home = () => {
  return (
    <div>
      <Layout>
        <LiveFeed />
        <Hero />
        <Features />
        <IntegrationSection />
        <CommunitySection />
        <ProWorkspace />
        <ContactSection />
        <FAQSection />
        <CtaSection />
      </Layout>
    </div>
  );
};

export default Home;
