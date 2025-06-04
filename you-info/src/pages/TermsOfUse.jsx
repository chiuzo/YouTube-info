import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        By accessing or using the YouInfo website, you agree to be bound by these Terms of Use and our Privacy Policy. If you disagree with any part of these terms, you must not use our service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Content</h2>
      <p className="mb-4">
        All content provided on this site is for informational purposes only. You may not copy, reproduce, republish, upload, or distribute any material without prior written consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. YouTube Data</h2>
      <p className="mb-4">
        All video information is retrieved using the YouTube Data API. We do not host any videos or claim ownership over the content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Modifications</h2>
      <p className="mb-4">
        We reserve the right to modify these terms at any time. Your continued use of the service means you accept any new or modified terms.
      </p>
    </div>
  );
};

export default TermsOfUse;
