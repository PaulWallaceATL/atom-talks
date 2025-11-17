import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - AtomTalks',
  description: 'Get in touch with the AtomTalks team. Deploy your AI agent in 24 hours with our expert guidance.',
  openGraph: {
    title: 'Contact Us - AtomTalks',
    description: 'Get in touch with the AtomTalks team',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

