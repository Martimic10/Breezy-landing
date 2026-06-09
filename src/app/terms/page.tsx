import type { Metadata } from "next";
import Link from "next/link";
import { LegalNavbar } from "@/components/LegalNavbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Breezy",
  description:
    "Read the Terms of Service for Breezy, the expense-sharing app for groups, friends, and trips.",
};

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the Breezy mobile application and related services
          (collectively, the &ldquo;Service&rdquo;) operated by Breezy
          (&ldquo;Breezy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;).
        </p>
        <p>
          By downloading, accessing, or using Breezy, you agree to be bound by
          these Terms. If you do not agree, you may not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "description",
    title: "Description of Service",
    content: (
      <>
        <p>
          Breezy is a platform designed to help people organize and manage shared
          expenses. The Service enables you to:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Share and track expenses with friends, roommates, and groups</li>
          <li>Create groups for trips, events, households, and other activities</li>
          <li>Record expenses and split costs among group members</li>
          <li>Automatically calculate balances between participants</li>
          <li>Track settlements between users</li>
          <li>Access optional premium features through Breezy Pro subscriptions</li>
        </ul>
        <p>
          Breezy is a record-keeping and organizational tool. We may update,
          modify, or discontinue features of the Service at any time.
        </p>
      </>
    ),
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    content: (
      <>
        <p>
          To use certain features of Breezy, you must create an account using a
          valid email address. You are responsible for:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Maintaining the confidentiality and security of your account credentials</li>
          <li>Providing accurate, current, and complete account information</li>
          <li>All activities that occur under your account</li>
          <li>Notifying us promptly of any unauthorized access or security breach</li>
        </ul>
        <p>
          You may not create an account on behalf of another person without
          permission, or use an account belonging to someone else.
        </p>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    content: (
      <>
        <p>When using Breezy, you agree not to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Abuse, harass, threaten, or harm other users</li>
          <li>Submit false, misleading, or fraudulent expense or payment information</li>
          <li>Interfere with or disrupt the functionality or security of the Service</li>
          <li>Attempt to gain unauthorized access to Breezy systems or user accounts</li>
          <li>Use the Service for any unlawful purpose or in violation of applicable laws</li>
          <li>Scrape, copy, or reverse engineer any part of the Service without permission</li>
          <li>Use automated systems to access the Service in a manner that exceeds reasonable use</li>
        </ul>
        <p>
          We reserve the right to investigate and take appropriate action against
          anyone who violates these Terms.
        </p>
      </>
    ),
  },
  {
    id: "group-content",
    title: "Group Content",
    content: (
      <>
        <p>
          You retain ownership of the content you submit to Breezy, including:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Group names and descriptions</li>
          <li>Expense titles, notes, and amounts</li>
          <li>Payment usernames and settlement information you voluntarily provide</li>
          <li>Profile information and photos you upload</li>
        </ul>
        <p>
          By submitting content to the Service, you grant Breezy a non-exclusive,
          worldwide, royalty-free license to use, store, display, and process that
          content solely for the purpose of operating and providing the Service to
          you and other members of your groups.
        </p>
        <p>
          You represent that you have the right to share any content you submit and
          that your content does not violate the rights of any third party.
        </p>
      </>
    ),
  },
  {
    id: "payment-disclaimer",
    title: "Payment Services Disclaimer",
    content: (
      <>
        <p className="rounded-2xl border border-breezy-green/20 bg-breezy-green-muted/40 p-5 font-medium text-black">
          Breezy is not a bank, payment processor, or money transmitter.
        </p>
        <p className="mt-4">
          Breezy only facilitates expense tracking, balance calculation, and
          settlement record-keeping. We do not hold, transfer, or process funds on
          your behalf.
        </p>
        <p>
          Actual payments between users are conducted through third-party services
          such as Venmo, Cash App, PayPal, and Zelle. Breezy is not responsible for
          the availability, accuracy, or policies of those third-party payment
          platforms. Any disputes regarding actual money transfers must be resolved
          directly between users and the relevant payment provider.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscription Terms",
    content: (
      <>
        <p>
          Breezy offers an optional premium subscription plan, Breezy Pro, with
          additional features. By subscribing to Breezy Pro, you agree to the
          following:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-black">Monthly subscriptions</strong>{" "}
            — Breezy Pro is billed on a recurring monthly basis at the price displayed
            at the time of purchase.
          </li>
          <li>
            <strong className="font-medium text-black">Automatic renewal</strong>{" "}
            — Your subscription will automatically renew at the end of each billing
            period unless you cancel before the renewal date.
          </li>
          <li>
            <strong className="font-medium text-black">Cancellation</strong>{" "}
            — You may cancel your subscription at any time through your Apple App
            Store account settings. Cancellation takes effect at the end of the
            current billing period.
          </li>
          <li>
            <strong className="font-medium text-black">Refunds</strong>{" "}
            — Refunds for Breezy Pro subscriptions are governed by Apple&apos;s App
            Store policies. Breezy does not directly process subscription payments
            or refunds.
          </li>
        </ul>
        <p>
          We may change subscription pricing or features with reasonable notice.
          Price changes will apply to subsequent billing periods after notice is
          provided.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          The Service, including all software, code, designs, logos, trademarks,
          branding, and content created by Breezy, is owned by Breezy or its
          licensors and is protected by intellectual property laws.
        </p>
        <p>
          You may not copy, modify, distribute, sell, lease, or create derivative
          works based on any part of the Service without our prior written consent.
          The Breezy name, logo, and related marks are trademarks of Breezy.
        </p>
        <p>
          Nothing in these Terms grants you any right to use Breezy branding except
          as necessary to use the Service in accordance with these Terms.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: (
      <p>
        THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        BREEZY DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE,
        SECURE, OR FREE OF HARMFUL COMPONENTS. YOU USE THE SERVICE AT YOUR OWN RISK.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BREEZY AND ITS
          OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY
          LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE
          OF THE SERVICE.
        </p>
        <p>
          IN NO EVENT SHALL BREEZY&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS
          ARISING OUT OF OR RELATING TO THE SERVICE EXCEED THE GREATER OF (A) THE
          AMOUNT YOU PAID TO BREEZY IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM,
          OR (B) ONE HUNDRED U.S. DOLLARS ($100).
        </p>
        <p>
          Some jurisdictions do not allow certain limitations of liability, so some
          of the above limitations may not apply to you.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <p>
          You may stop using Breezy at any time by deleting your account or
          discontinuing use of the Service.
        </p>
        <p>
          We reserve the right to suspend or terminate your access to the Service,
          with or without notice, if we reasonably believe you have violated these
          Terms, engaged in fraudulent or abusive behavior, or if continued access
          would harm Breezy, other users, or third parties.
        </p>
        <p>
          Upon termination, your right to use the Service ceases immediately.
          Provisions of these Terms that by their nature should survive termination
          will remain in effect.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to Terms",
    content: (
      <p>
        We may update these Terms from time to time. When we make material changes,
        we will update the &ldquo;Last updated&rdquo; date at the top of this page
        and may provide additional notice within the app or by email. Your
        continued use of Breezy after changes become effective constitutes
        acceptance of the revised Terms. If you do not agree to the updated Terms,
        you must stop using the Service.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws
        of the State of [State/Country], without regard to its conflict of law
        principles. Any disputes arising under these Terms shall be resolved in the
        courts located in [Jurisdiction], and you consent to the personal
        jurisdiction of such courts.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have questions about these Terms of Service, please contact us:
        </p>
        <div className="mt-6 rounded-2xl border border-black/5 bg-[#f8f8f8] p-6">
          <p className="font-semibold text-black">Breezy</p>
          <p className="mt-2 text-black/60">Email:</p>
          <a
            href="mailto:support@breezyapp.com"
            className="text-lg font-medium text-breezy-green-dark hover:text-breezy-green"
          >
            support@breezyapp.com
          </a>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <LegalNavbar />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-breezy-green/20 bg-breezy-green-muted/50 px-4 py-1.5 text-xs font-medium text-breezy-green-dark">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-black/45">Last updated: June 9, 2026</p>
          <p className="mt-6 text-base leading-relaxed text-black/60 sm:text-lg">
            Please read these terms carefully before using Breezy. They explain
            your rights and responsibilities when using our expense-sharing platform.
          </p>

          <nav
            aria-label="Terms of Service sections"
            className="mt-10 rounded-2xl border border-black/5 bg-[#fafafa] p-6"
          >
            <p className="text-sm font-semibold text-black">On this page</p>
            <ol className="mt-4 space-y-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-black/55 transition-colors hover:text-breezy-green-dark"
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-16 space-y-16">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-bold text-breezy-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-black/65">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-20 border-t border-black/5 pt-10">
            <p className="text-sm text-black/45">
              See also our{" "}
              <Link
                href="/privacy"
                className="font-medium text-breezy-green-dark hover:text-breezy-green"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-breezy-green-dark transition-colors hover:text-breezy-green"
            >
              ← Return to Breezy
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
