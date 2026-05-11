import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-24 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-headline font-black text-on-surface mb-12 tracking-tight">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <div className="prose prose-slate max-w-none space-y-8 text-on-surface-variant leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">1. Introduction</h2>
            <p>
              At KVS Universal Solutions, we are committed to protecting your privacy and ensuring the security of your personal and business information. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our logistics and business support services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">2. Information Collection</h2>
            <p>
              We collect information that is necessary for the provision of our services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details (Name, Email, Phone Number, Address)</li>
              <li>Business information related to logistics operations</li>
              <li>Operational data required for load management and tracking</li>
              <li>Financial information for invoicing and billing management</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">3. Use of Information</h2>
            <p>
              Your information is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and manage our logistics and business support services</li>
              <li>To communicate regarding service updates and operational requirements</li>
              <li>To process invoices and manage billing records</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">4. Data Security</h2>
            <p>
              We implement industry-standard security measures, including advanced encryption and secure digital archiving, to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">5. Data Sharing</h2>
            <p>
              KVS Universal Solutions does not sell or rent your information to third parties. We only share data with trusted partners and carriers when essential for the execution of logistics operations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-headline font-bold text-on-surface">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or how your data is handled, please contact us at solutions@kvsuniversal.com.
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

export default PrivacyPolicy;
