import type { Metadata } from "next";
import Link from "next/link";
import { LegalNavbar } from "@/components/LegalNavbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Breezy",
  description:
    "Learn how Breezy collects, uses, and protects your information when you split expenses with friends.",
};

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Breezy (&ldquo;Breezy,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          information when you use the Breezy mobile application and related
          services (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By creating an account or using Breezy, you agree to the practices
          described in this Privacy Policy. If you do not agree, please do not
          use the Service.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We collect information you provide directly and information collected automatically when you use Breezy.</p>
        <h3 className="mt-6 text-lg font-semibold text-black">
          Information you provide
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Name</li>
          <li>Email address</li>
          <li>Profile photo (if you choose to provide one)</li>
          <li>Payment usernames you connect (Venmo, Cash App, PayPal, Zelle)</li>
          <li>Group information, including group names and members</li>
          <li>Expense data, including amounts, descriptions, and split details</li>
          <li>Settlement records</li>
          <li>Subscription information for Breezy Pro</li>
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-black">
          Information collected automatically
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Device information (such as device type, operating system, and app version)</li>
          <li>Analytics data about how you interact with the Service</li>
          <li>Push notification tokens (if you enable notifications)</li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: (
      <>
        <p>We use the information we collect to operate and improve Breezy, including to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Provide, maintain, and improve the Service</li>
          <li>Create and manage your account</li>
          <li>Enable you to create groups and invite friends</li>
          <li>Record, organize, and display shared expenses</li>
          <li>Calculate balances and settlement amounts</li>
          <li>Process and manage Breezy Pro subscriptions</li>
          <li>Send notifications about group activity, balances, and settlements</li>
          <li>Analyze usage to improve features and user experience</li>
          <li>Detect, prevent, and address fraud, abuse, or security issues</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    id: "payment-information",
    title: "Payment Information",
    content: (
      <>
        <p className="rounded-2xl border border-breezy-green/20 bg-breezy-green-muted/40 p-5 font-medium text-black">
          Breezy does not process or store payment card information.
        </p>
        <p className="mt-4">
          When you settle expenses with friends, payments occur directly through
          third-party platforms such as Venmo, PayPal, Cash App, and Zelle. Breezy
          only stores the payment usernames you choose to connect so we can help
          you initiate settlements. We do not have access to your financial
          accounts or payment credentials on those platforms.
        </p>
        <p>
          Breezy Pro subscriptions are processed through Apple&apos;s App Store (or
          other authorized payment providers). Payment and billing for subscriptions
          are handled by those providers in accordance with their own privacy
          policies.
        </p>
      </>
    ),
  },
  {
    id: "sharing-information",
    title: "Sharing Information",
    content: (
      <>
        <p className="font-medium text-black">
          Breezy does not sell your personal information.
        </p>
        <p className="mt-4">We may share information only in the following circumstances:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-black">With other group members</strong>{" "}
            — Information you add to a group (such as expenses, balances, and your
            name) is visible to other members of that group as required for the
            Service to function.
          </li>
          <li>
            <strong className="font-medium text-black">With service providers</strong>{" "}
            — We work with trusted third parties that help us operate the Service
            (such as hosting, analytics, authentication, and notification
            delivery). These providers may only use your information to perform
            services on our behalf.
          </li>
          <li>
            <strong className="font-medium text-black">If required by law</strong>{" "}
            — We may disclose information if required to do so by law, regulation,
            legal process, or governmental request, or when we believe disclosure
            is necessary to protect the rights, property, or safety of Breezy, our
            users, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We retain your information for as long as your account is active or as
          needed to provide the Service. We may also retain certain information as
          necessary to comply with legal obligations, resolve disputes, enforce our
          agreements, and support legitimate business operations.
        </p>
        <p>
          When you delete your account, we will delete or anonymize your personal
          information within a reasonable timeframe, except where we are required
          or permitted to retain certain data by law. Information shared within
          groups may remain visible to other group members in historical expense
          records unless those records are also deleted as part of your request.
        </p>
      </>
    ),
  },
  {
    id: "account-deletion",
    title: "Account Deletion",
    content: (
      <>
        <p>
          You may request deletion of your Breezy account and associated personal
          data at any time by contacting us at{" "}
          <a
            href="mailto:support@breezyapp.com"
            className="font-medium text-breezy-green-dark underline decoration-breezy-green/30 underline-offset-2 hover:text-breezy-green"
          >
            support@breezyapp.com
          </a>{" "}
          or through account settings in the app (where available).
        </p>
        <p>
          Upon verification of your request, we will delete your account and personal
          information in accordance with applicable law and our data retention
          practices. Deleting your account is permanent and cannot be undone.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    content: (
      <>
        <p>
          We take reasonable administrative, technical, and organizational measures
          designed to protect your information against unauthorized access, loss,
          misuse, or alteration. These measures include encryption in transit,
          access controls, and secure infrastructure practices.
        </p>
        <p>
          No method of transmission over the internet or electronic storage is
          completely secure. While we strive to protect your information, we cannot
          guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        Breezy is not intended for children under 13 years of age. We do not
        knowingly collect personal information from children under 13. If we learn
        that we have collected personal information from a child under 13, we will
        take steps to delete that information promptly. If you believe a child
        under 13 has provided us with personal information, please contact us at{" "}
        <a
          href="mailto:support@breezyapp.com"
          className="font-medium text-breezy-green-dark underline decoration-breezy-green/30 underline-offset-2 hover:text-breezy-green"
        >
          support@breezyapp.com
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we make changes,
        we will revise the &ldquo;Last updated&rdquo; date at the top of this page
        and, where appropriate, provide additional notice within the app or by
        email. Your continued use of Breezy after changes become effective
        constitutes acceptance of the updated Privacy Policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or our privacy practices,
          please contact us:
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

export default function PrivacyPage() {
  return (
    <>
      <LegalNavbar />
      <main className="min-h-screen bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-breezy-green/20 bg-breezy-green-muted/50 px-4 py-1.5 text-xs font-medium text-breezy-green-dark">
            Legal
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-black/45">Last updated: June 9, 2026</p>
          <p className="mt-6 text-base leading-relaxed text-black/60 sm:text-lg">
            Your privacy matters to us. This policy describes how Breezy handles
            your information when you split expenses with friends.
          </p>

          <nav
            aria-label="Privacy Policy sections"
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
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-breezy-green-dark transition-colors hover:text-breezy-green"
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
