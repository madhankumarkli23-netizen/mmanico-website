import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - M MANI & CO',
  description: 'Terms and conditions for using M MANI & CO website',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Terms of Use</h1>
          <p className="text-sm text-neutral-600">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl prose prose-neutral">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use this website.
          </p>

          <h2>Website Purpose</h2>
          <p>
            This website is maintained for informational purposes only. It does not constitute solicitation, advertisement, or an offer of professional services. Professional services are provided only through formal written engagement agreements.
          </p>

          <h2>Use of Content</h2>
          <p>
            Content on this website, including text, graphics, images, and downloadable resources, is provided for general information and educational purposes. You may view, download, and print content for personal, non-commercial use only.
          </p>

          <p>You may not:</p>
          <ul>
            <li>Reproduce, distribute, or republish website content for commercial purposes without written permission</li>
            <li>Modify or create derivative works from website content</li>
            <li>Remove copyright, trademark, or other proprietary notices</li>
            <li>Use automated systems (bots, scrapers) to access the website</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, design, trademarks, and materials on this website are the property of M MANI & CO or their respective owners. Unauthorized use may violate copyright, trademark, and other laws.
          </p>

          <h2>User Responsibilities</h2>
          <p>When using this website, you agree to:</p>
          <ul>
            <li>Provide accurate and truthful information in forms and communications</li>
            <li>Not use the website for unlawful purposes or to transmit harmful code</li>
            <li>Not attempt to gain unauthorized access to any part of the website or systems</li>
            <li>Not submit confidential credentials (passwords, OTPs, bank details) through forms or email</li>
          </ul>

          <h2>Limitation of Warranty</h2>
          <p>
            This website and its content are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not warrant that:
          </p>
          <ul>
            <li>The website will be uninterrupted or error-free</li>
            <li>Content is accurate, complete, or current</li>
            <li>Defects will be corrected</li>
            <li>The website is free from viruses or harmful components</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, M MANI & CO shall not be liable for any damages arising from:
          </p>
          <ul>
            <li>Use or inability to use this website</li>
            <li>Reliance on any information or content provided</li>
            <li>Errors, omissions, or inaccuracies in content</li>
            <li>Unauthorized access to or alteration of your data</li>
            <li>Third-party websites or services linked from this website</li>
          </ul>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless M MANI & CO from any claims, damages, losses, or expenses (including legal fees) arising from your use of this website or violation of these Terms of Use.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website may contain links to external websites for convenience and reference. We do not endorse or control third-party websites and are not responsible for their content, accuracy, or practices.
          </p>

          <h2>Modification and Termination</h2>
          <p>
            We reserve the right to:
          </p>
          <ul>
            <li>Modify these Terms of Use at any time</li>
            <li>Update, suspend, or discontinue any part of the website</li>
            <li>Restrict or terminate access to the website without notice</li>
          </ul>
          <p>
            Continued use of the website after changes to these terms constitutes acceptance of the modified terms.
          </p>

          <h2>Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from use of this website shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These Terms of Use, together with our Privacy Policy and Disclaimer, constitute the entire agreement between you and M MANI & CO regarding use of this website.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms of Use, please contact us at <a href="mailto:info@mmanico.com" className="text-primary-700 hover:text-primary-800">info@mmanico.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
