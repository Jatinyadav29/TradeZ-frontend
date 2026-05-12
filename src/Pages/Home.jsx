import CommunitySection from "../Components/Home/CommunitySection";
import ContactSection from "../Components/Home/ContactSection";
import CtaSection from "../Components/Home/CtaSection";
import FAQSection from "../Components/Home/FAQSection";
import Features from "../Components/Home/Features";
import Hero from "../Components/Home/Hero";
import IntegrationSection from "../Components/Home/IntegrationSection";
import Layout from "../Components/Layouts/Layout";
import LiveFeed from "../Components/Home/LiveFeed";
import ProWorkspace from "../Components/Home/ProWorkspace";

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
