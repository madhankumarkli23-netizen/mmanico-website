import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - M MANI & CO',
  description: 'Important disclaimers and notices for M MANI & CO website',
};

export default function DisclaimerPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Disclaimer</h1>
          <p className="text-sm text-neutral-600">Last updated: January 2026</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl prose prose-neutral">
          <h2>Website Purpose</h2>
          <p>
            This website is maintained by M MANI & CO, Chartered Accountants, for informational purposes only. The content provided on this website does not constitute solicitation, advertisement, or invitation for professional services.
          </p>

          <h2>No Professional Relationship</h2>
          <p>
            Visiting this website, reading content, using tools, or submitting enquiries does not create any professional relationship between you and M MANI & CO. Professional services are provided only pursuant to formal written engagement terms executed after proper assessment of competence, independence, and conflict considerations.
          </p>

          <h2>Not Professional Advice</h2>
          <p>
            Information and content provided on this website, including articles, updates, calculators, and downloadable resources, are for general educational and informational purposes only. They do not constitute professional advice and should not be relied upon for making specific financial, tax, legal, or business decisions.
          </p>
          <p>
            Professional advice should be obtained based on specific facts and circumstances after engaging qualified professionals.
          </p>

          <h2>Accuracy and Currency</h2>
          <p>
            While efforts are made to ensure accuracy, we make no representations or warranties regarding the completeness, accuracy, reliability, or currency of information on this website. Tax laws, regulations, and compliance requirements change frequently. Content may not reflect the most recent developments.
          </p>

          <h2>Regulatory Updates</h2>
          <p>
            Regulatory updates referenced on this website are sourced from official channels and link to official sources. However, these are provided for convenience only. Users should refer to original official notifications and publications for authoritative information.
          </p>

          <h2>Calculator Tools</h2>
          <p>
            Online calculators and tools provided on this website perform indicative calculations based on standard provisions and general assumptions. They do not account for individual circumstances, specific exemptions, recent amendments, or interpretative positions. Results should not be used for actual tax computation, compliance filing, or decision-making without professional verification.
          </p>

          <h2>Privacy and Data</h2>
          <p>
            Calculator tools operate locally in your browser and do not transmit data to any server. Form submissions are handled per our Privacy Policy. Users should not share passwords, OTPs, bank credentials, or highly sensitive information through website forms or email.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            This website contains links to external websites (government portals, regulatory bodies) for user convenience. We are not responsible for the content, accuracy, or availability of third-party websites.
          </p>

          <h2>ICAI Compliance</h2>
          <p>
            This website is maintained in accordance with the Code of Ethics issued by the Institute of Chartered Accountants of India (ICAI) and applicable advertising and solicitation norms. It does not contain any content that is prohibited under professional conduct regulations.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, M MANI & CO shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from use of this website or reliance on any information contained herein.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of this website at any time without notice. This disclaimer may be updated periodically.
          </p>

          <h2>Governing Law</h2>
          <p>
            Use of this website and interpretation of this disclaimer shall be governed by Indian law. Disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.
          </p>

          <h2>Contact</h2>
          <p>
            For clarifications regarding this disclaimer, please contact us at <a href="mailto:info@mmanico.com" className="text-primary-700 hover:text-primary-800">info@mmanico.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
