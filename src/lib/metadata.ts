import { translations } from './translations';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://parsazeinali.com';

export const getMetadata = (lang: 'en' | 'fa'): Metadata => {
  const t = translations[lang];
  
  const title = `${t.name} - ${t.role}`;
  const description = `${t.role}. ${t.sections.educationaljourney.description}. ${t.sections.internationalexperience.description}. Professional experience includes ${Object.values(t.jobs).map(job => job.company).join(', ')}.`;

  const keywords = [
    // Personal keywords
    t.name,
    'Full Stack Developer',
    'Software Engineer',
    'Web Developer',
    'Computer Science',
    // Skills & Technologies
    'C++',
    'C#',
    'ASP.NET',
    '.NET Developer',
    'React',
    'TypeScript',
    'JavaScript',
    'Full Stack Development',
    // Experience keywords
    'Enterprise Software',
    'Web Development',
    'Software Architecture',
    'Backend Development',
    'Frontend Development',
    'Database Optimization',
    'API Development',
    // Education & Certifications
    'IELTS 7.5',
    'AP Computer Science',
    'Computer Olympiad',
    // Locations
    'Iran',
    'Turkey',
    'International Experience',
    // Languages
    lang === 'fa' ? 'فارسی' : 'English',
    lang === 'fa' ? 'برنامه‌نویس' : 'Programmer',
    // Job-specific keywords
    ...Object.values(t.jobs).flatMap(job => [
      job.title,
      job.company,
      job.location
    ])
  ].filter(Boolean);

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: t.name }],
    creator: t.name,
    publisher: t.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'fa': '/fa'
      }
    },
    openGraph: {
      type: 'website',
      title,
      description,
      siteName: t.name,
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      alternateLocale: lang === 'fa' ? 'en_US' : 'fa_IR',
      url: baseUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@parsazeinali',
    },
    verification: {
      google: 'your-google-verification-code',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology'
  };
}; 