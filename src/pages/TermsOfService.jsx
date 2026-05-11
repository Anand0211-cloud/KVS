import React from 'react';

const TermsOfService = () => {
  return (
    <div className="pt-32 pb-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-12 tracking-tight">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by KVS Universal Solutions, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, you must not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">2. Scope of Services</h2>
            <p>
              KVS Universal Solutions provides logistics support, dispatch management, documentation handling, and business support services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">3. User Responsibilities</h2>
            <p>
              Users are responsible for providing accurate and timely information required for the execution of logistics and support services. Any delays or errors caused by inaccurate data provided by the user are the responsibility of the user.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">4. Operational Procedures</h2>
            <p>
              All logistics operations, including transport coordination and load management, are subject to our standard operational procedures and global logistics regulations. We maintain absolute integrity in our processes and expect the same from our clients and partners.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">5. Payment and Invoicing</h2>
            <p>
              Invoices for services rendered are issued based on agreed-upon rates and schedules. Payment terms are strictly enforced to ensure the continuity of high-velocity operations. Late payments may result in service disruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">6. Limitation of Liability</h2>
            <p>
              KVS Universal Solutions shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, except where required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">7. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.
            </p>
          </section>

          <p className="pt-8 text-xs font-bold text-outline-variant uppercase tracking-widest">
            Last Updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
