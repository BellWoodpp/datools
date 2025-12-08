export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-slate-100 px-6 py-16 text-neutral-900 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-950 dark:text-neutral-100">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Terms of Service
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Last updated: 2025-02-15
          </p>
        </header>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">1. Scope of service</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            We provide account sign-in and management features, supporting email/password, magic links, and third-party social login (e.g., X/Twitter). We do not publish on behalf of users or access/operate on their direct messages.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">2. Data use</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            To complete registration and sign-in, we use the email, display name, and other basic details you provide; with permission we may fetch public profile info and email from third parties. We do not use this data for ads or unrelated purposes.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">3. User responsibilities</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            You must safeguard your credentials and not use the service for illegal, infringing, or policy-violating activities. Any risks or losses caused by user actions are the user’s responsibility.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">4. Disclaimer</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            We do not guarantee uninterrupted availability. We are not liable for outages or data loss caused by third-party changes, network issues, or force majeure. If security risks are detected, we may suspend or terminate access.
          </p>
        </section>

        <section className="space-y-4 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">5. Contact</h2>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            If you have questions or rights requests, please reach us via the contact methods in the site footer.
          </p>
        </section>
      </div>
    </main>
  );
}
