"use client";

import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/contexts/LanguageContext";
import { AcademicCapIcon, GlobeAltIcon, BriefcaseIcon, EnvelopeIcon, CommandLineIcon, TrophyIcon } from "@heroicons/react/24/outline";
import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import NerdyStats from "@/components/NerdyStats";
import CodingGame from "@/components/CodingGame";

export default function Home() {
  const t = useTranslations();
  const { setLanguage } = useLanguage();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <HeroSection t={t} onLanguageChange={setLanguage} />

      <Section color="rose" pattern="grid">
        <SectionHeader
          title={t.sections.educationaljourney.title}
          color="rose"
          Icon={AcademicCapIcon}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <Card
            color="rose"
            title={t.sections.educationaljourney.title}
            description={t.sections.educationaljourney.description}
            icon={AcademicCapIcon}
            items={t.sections.educationaljourney.items}
            initialAnimation={{ x: -50 }}
          />

          <Card
            color="teal"
            title={t.sections.internationalexperience.title}
            description={t.sections.internationalexperience.description}
            icon={GlobeAltIcon}
            items={t.sections.internationalexperience.items}
            initialAnimation={{ x: 50 }}
          />
        </div>
      </Section>

      <Section color="violet" pattern="diagonal">
        <SectionHeader
          title={t.sections.professionalwork.title}
          color="violet"
          Icon={BriefcaseIcon}
          description={t.ui.teachingNote}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {Object.values(t.jobs).map((job, index) => (
            <Card
              key={index}
              color="violet"
              title={job.title}
              company={job.company}
              location={job.location}
              period={job.period}
              items={job.responsibilities.map(text => ({ text }))}
            />
          ))}
        </div>
      </Section>

      <Section color="emerald" pattern="dots">
        <SectionHeader
          title={t.sections.nerdystats.title}
          color="emerald"
          Icon={CommandLineIcon}
        />
        <NerdyStats {...t.sections.nerdystats} />
      </Section>

      <Section color="yellow" pattern="grid">
        <SectionHeader
          title={t.sections.codinggame.title}
          color="yellow"
          Icon={TrophyIcon}
        />
        <CodingGame {...t.sections.codinggame} />
      </Section>

      <Section color="orange" pattern="dots">
        <SectionHeader
          title={t.sections.contact.title}
          color="orange"
          Icon={EnvelopeIcon}
        />
        <ContactForm {...t.sections.contact} />
      </Section>

      <Footer
        githubUrl="https://github.com/yourusername"
        linkedinUrl="https://linkedin.com/in/yourusername"
        email="your.email@example.com"
      />
    </main>
  );
}
