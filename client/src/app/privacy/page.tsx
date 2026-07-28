import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for CirqleX. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-secondary-text">
          Last updated: July 26, 2026
        </p>

        <div className="mt-12 space-y-10 text-secondary-text leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              1. Introduction
            </h2>
            <p>
              CirqleX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
              respects your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our services. By accessing or using our
              services, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect information that you provide directly to us,
              including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Personal identification information (name, email address, phone
                number)
              </li>
              <li>
                Company information (company name, industry, size)
              </li>
              <li>
                Project details and requirements you share with us
              </li>
              <li>
                Communication records when you contact us
              </li>
            </ul>
            <p className="mt-3">
              We also automatically collect certain information when you visit
              our website, such as your IP address, browser type, operating
              system, referring URLs, and pages visited. This information is
              collected through cookies and similar tracking technologies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and communicate with you</li>
              <li>Send administrative information, such as updates and security alerts</li>
              <li>Improve our website and services</li>
              <li>Analyze usage patterns and optimize user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              4. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal identification
              information to others. We may share your information with trusted
              third-party service providers who assist us in operating our
              website and conducting our business, provided that those parties
              agree to keep this information confidential. We may also disclose
              your information when we believe disclosure is appropriate to
              comply with the law, enforce our site policies, or protect ours or
              others&apos; rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. However, no method
              of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              6. Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your experience. A cookie is a
              small text file placed on your device by a web server. You can
              choose to set your web browser to refuse cookies or to alert you
              when cookies are being sent. If you do so, note that some parts of
              the site may not function properly. We use cookies for analytics
              purposes and to understand how our website is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, update, or delete your personal information. You may also
              have the right to object to or restrict certain processing of your
              data. To exercise any of these rights, please contact us using the
              information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date. You are advised to
              review this page periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:info@cirqlex.com"
                className="text-accent hover:underline"
              >
                info@cirqlex.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
