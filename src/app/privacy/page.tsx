export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16 text-neutral-900 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Privacy Policy
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Last updated: 2025-02-15
          </p>
        </header>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">1. Information we collect</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            We collect the email, display name, and basic details you provide during sign-up/sign-in; with your authorization, we may fetch public profile info and email from third parties (e.g., X/Twitter).
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">2. How we use data</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            All information is used only for account creation, authentication, and security; we do not use it for advertising or unrelated purposes.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">3. Storage and security</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            We apply reasonable security measures such as hashed credentials and least-privilege access. If we detect unusual activity, we may temporarily restrict access to protect security.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">4. Sharing and third parties</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            We do not sell or share your data with third parties except as required by law or with your consent. Third-party logins only access information within the granted scope.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">5. Your rights</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            You may request updates or deletion of your account information at any time; to delete or export data, please contact us via the site’s contact methods.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">6. Contact</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            For any privacy questions, reach out using the contact options in the site footer.
          </p>
        </section>
      </div>
    </main>
  );
}
