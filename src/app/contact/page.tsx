import { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Contact Us - M MANI & CO',
  description: 'Get in touch with M MANI & CO for professional chartered accountancy services. Located in Bengaluru, Karnataka.',
};

export default function ContactPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="For enquiries regarding professional services, please reach out using the details below"
      />

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Location</h3>
                    <p className="text-neutral-600">Bengaluru, Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a
                      href="tel:+919632818089"
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      +91 96328 18089
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@mmanico.com"
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      info@mmanico.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/919632818089"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-green-700 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-3">Important Notice</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Enquiries do not constitute engagement acceptance or create any professional relationship. All professional services are subject to formal engagement terms and conditions. We assess each enquiry for competence, independence, and conflict considerations before accepting any engagement.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
