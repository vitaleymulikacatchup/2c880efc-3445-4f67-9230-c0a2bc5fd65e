"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navbarItems = [
  { name: "Hero", id: "hero" },
  { name: "About", id: "about" },
  { name: "FAQ", id: "faq" },
  { name: "How to Buy", id: "how-to-buy" },
  { name: "Tokenomics", id: "tokenomics" },
  { name: "Footer", id: "footer" }
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={200}
        logoHeight={80}
        navItems={navbarItems}
        buttonText="Join Community"
        onButtonClick={() => alert('Button clicked!')}
        className="sticky"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to MemeMoon"
          description="Join the most fun and vibrant memecoin community!"
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SocialsAbout
          title="About MemeMoon"
          descriptions={[
            "MemeMoon is a community-driven memecoin aimed at fun and engagement.",
            "Join us in an adventurous journey through memes and laughter!",
            "Follow us on social media for updates and events."
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <ImageFAQ
          items={[
            { title: "What is MemeMoon?", content: "MemeMoon is a fun-oriented cryptocurrency for meme lovers!" },
            { title: "How can I buy?", content: "You can buy MemeMoon from our partner DEX platforms." },
            { title: "What are the benefits?", content: "Join us for community activities, airdrops, and meme competitions!" }
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics"
          description="Our tokenomics model supports transparency and community involvement."
          kpiItems={[
            { value: "50%", description: "Liquidity Pool", icon: { name: 'LucideIcon' } },
            { value: "20%", description: "Marketing", icon: { name: 'LucideIcon' } },
            { value: "30%", description: "Community Reward", icon: { name: 'LucideIcon' } }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: "Links", items: [{ label: "Home", onClick: () => {} }, { label: "About", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
            { title: "Social", items: [{ label: "Twitter", onClick: () => {} }, { label: "Discord", onClick: () => {} }, { label: "Telegram", onClick: () => {} }] },
            { title: "Legal", items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MemeMoon. All Rights Reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}