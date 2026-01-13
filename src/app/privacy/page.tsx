import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - M MANI & CO',
  description: 'Privacy policy and data protection practices for M MANI & CO website',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-neutral-600">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl prose prose-neutral">
          <h2>Introduction</h2>
          <p>
            M MANI & CO respects your privacy and is committed to protecting any personal information you may provide while using this website. This privacy policy explains how we collect, use, and safeguard your information.
          </p>

          <h2>Information We Collect</h2>

          <h3>Contact Form Submissions</h3>
          <p>When you submit an enquiry through our contact form, we collect:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Service category and enquiry message</li>
            <li>Contact preferences</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>Our website may collect basic technical information such as:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
          </ul>

          <h3>Calculator Tools</h3>
          <p>
            All calculator tools on this website operate entirely within your browser. No data entered into calculators is transmitted to our servers or stored anywhere. Calculations are performed locally on your device.
          </p>

          <h2>How We Use Your Information</h2>
          <p>Information collected through contact forms is used solely for:</p>
          <ul>
            <li>Responding to your enquiry</li>
            <li>Assessing engagement suitability</li>
            <li>Communicating regarding potential professional services</li>
          </ul>

          <p>We do not use your information for:</p>
          <ul>
            <li>Marketing or promotional purposes</li>
            <li>Selling or renting to third parties</li>
            <li>Automated decision-making or profiling</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            Contact enquiries are retained for a reasonable period to allow for follow-up and engagement assessment. If an engagement is not formed, enquiry data is deleted within a reasonable timeframe unless you request otherwise.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
          </p>

          <p className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <strong>Important:</strong> Do not submit passwords, OTPs, bank account credentials, or highly sensitive documents through website forms or email. Such information should only be shared through secure, authenticated channels during an active professional engagement.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may use third-party services for hosting, analytics, or functionality. These services may collect information in accordance with their own privacy policies. We do not control third-party data practices.
          </p>

          <h2>Cookies</h2>
          <p>
            This website may use cookies for basic functionality and analytics. Cookies are small files stored on your device. You can control cookie settings through your browser preferences.
          </p>

          <h2>External Links</h2>
          <p>
            This website contains links to external websites (government portals, regulatory authorities). We are not responsible for the privacy practices of third-party websites.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with data protection authorities</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            This website is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this privacy policy or to exercise your rights, please contact us at <a href="mailto:info@mmanico.com" className="text-primary-700 hover:text-primary-800">info@mmanico.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
