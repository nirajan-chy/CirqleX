import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for CirqleX. Review the rules and guidelines governing the use of our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl font-bold tracking-tight text-primary">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-secondary-text">
          Last updated: July 26, 2026
        </p>

        <div className="mt-12 space-y-10 text-secondary-text leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
                By accessing or using the services provided by CirqleX
              (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree
              to be bound by these Terms of Service. If you do not agree with
              any part of these terms, you may not access or use our services.
              These terms apply to all visitors, users, and clients of our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              2. Services
            </h2>
            <p>
              CirqleX provides digital product engineering services, including
              but not limited to custom software development, web development,
              mobile app development, AI development, UI/UX design, and cloud
              infrastructure services. The specific scope, deliverables, and
              timelines for any project will be defined in a separate statement
              of work or service agreement between you and CirqleX.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              3. Intellectual Property
            </h2>
            <p className="mb-3">
              Unless otherwise agreed in writing:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                All intellectual property rights in work product created by CirqleX under a services agreement will transfer to the client upon
                full payment.
              </li>
              <li>
                CirqleX retains ownership of pre-existing tools, libraries,
                frameworks, and methodologies used in the development process.
              </li>
              <li>
                You may not reproduce, distribute, or create derivative works
                from any proprietary materials provided by CirqleX outside
                the scope of our services engagement.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              4. Client Responsibilities
            </h2>
            <p>
              You are responsible for providing timely access to information,
              resources, and feedback necessary for us to deliver our services.
              Delays in client responses or approvals may impact project
              timelines. You are also responsible for ensuring that any content
              or materials you provide to us do not infringe on the rights of
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              5. Payment Terms
            </h2>
            <p>
              Payment terms will be defined in each project&apos;s statement of
              work or service agreement. Invoices are due within the timeframe
              specified in the agreement. Late payments may incur interest
              charges as outlined in the applicable agreement. CirqleX
              reserves the right to suspend work if payments are not received in
              accordance with the agreed terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, CirqleX
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from the use of or
              inability to use our services. Our total liability for any claim
              arising out of or relating to these terms or our services shall
              not exceed the amount paid by you to us for the specific services
              giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              7. Termination
            </h2>
            <p>
              Either party may terminate a services engagement in accordance
              with the terms specified in the applicable statement of work or
              service agreement. Upon termination, you will pay for all services
              rendered up to the termination date. Provisions that by their
              nature should survive termination will remain in effect,
              including intellectual property rights, confidentiality, and
              limitation of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              8. Confidentiality
            </h2>
            <p>
              Both parties agree to maintain the confidentiality of any
              proprietary or sensitive information shared during the course of
              the engagement. Neither party will disclose such information to
              third parties without prior written consent, except as required by
              law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              9. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with applicable laws. Any disputes arising from or
              relating to these terms or our services shall be resolved through
              good-faith negotiations first, and if unresolved, through binding
              arbitration or litigation in a jurisdiction agreed upon by both
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              10. Changes to Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms of Service at
              any time. Changes will be effective upon posting to this page. Your
              continued use of our services after any changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-primary mb-4">
              11. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
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
