import { useNavigate } from "react-router-dom";

const MitraPrivacy = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 mt-16 pt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-6 py-3 bg-white bg-opacity-90 rounded-xl shadow-md backdrop-blur-md text-gray-800 font-medium transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Go Back
      </button>

      <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-black-600 mb-6">
            Privacy Policy
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Sweekar (&quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;). We are committed to protecting your privacy and
              handling your personal information with transparency and care.
              This Privacy Policy outlines how we collect, use, disclose, and
              safeguard your information when you visit our website
              (sweekarme.in), use our mobile application (Gazra Mitra, if
              applicable and data is shared), or engage with our services
              (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-gray-700 mb-4">
              Our Services are designed to provide safe and inclusive
              professional support, particularly for the LGBTQAI+ community and
              women. We understand the sensitivity of the information you may
              share and are dedicated to maintaining its confidentiality.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">
                  Personal Identification Information (PII):
                </span>{" "}
                This includes your name, email address, phone number, date of
                birth, and other similar identifiers you provide when
                registering, booking a consultation, filling out forms, or
                contacting us.
              </li>
              <li>
                <span className="font-medium">
                  Sensitive Personal Information (SPI):
                </span>{" "}
                Given the nature of our Services (mental health, medical, legal
                aid), we may collect SPI such as information related to your
                health conditions, mental well-being, sexual orientation, gender
                identity, or legal circumstances. We will only collect SPI with
                your explicit consent and for the specific purpose of delivering
                the requested Services. You have the right to withdraw this
                consent at any time.
              </li>
              <li>
                <span className="font-medium">
                  Non-Personal Identification Information:
                </span>{" "}
                This includes your browser type, operating system, Internet
                Service Provider (ISP), IP address (anonymized where possible),
                and website usage patterns (e.g., pages visited, time spent on
                pages). This information is typically collected automatically
                through server logs and analytics tools.
              </li>
              <li>
                <span className="font-medium">
                  Cookies and Tracking Technologies:
                </span>{" "}
                We may use cookies, web beacons, and similar technologies to
                enhance your experience, remember your preferences, and gather
                analytics data. You can control cookie settings through your
                browser.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                To provide, operate, and maintain our Services, including
                facilitating consultations with professionals.
              </li>
              <li>
                To personalize your experience and tailor content and services
                to your needs.
              </li>
              <li>To process transactions and manage bookings.</li>
              <li>
                To communicate with you, respond to your inquiries, and send
                important notices or service-related updates.
              </li>
              <li>
                To improve our platform, Services, and user experience based on
                feedback and usage patterns.
              </li>
              <li>
                For research and analysis, using anonymized and aggregated data,
                to better understand community needs and improve service
                offerings.
              </li>
              <li>
                To ensure the security of our platform and to prevent fraud or
                abuse.
              </li>
              <li>
                To comply with applicable legal and regulatory obligations.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              4. How We Protect Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We are committed to protecting your information. We implement a
              variety of security measures, including:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                Data encryption (e.g., SSL/TLS) for information transmitted
                online.
              </li>
              <li>
                Secure server infrastructure and access controls to prevent
                unauthorized access.
              </li>
              <li>Regular security assessments and updates to our systems.</li>
              <li>
                Confidentiality agreements with our staff and listed
                professionals who may have access to your information.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              While we strive to use commercially acceptable means to protect
              your Personal Information, no method of transmission over the
              Internet or method of electronic storage is 100% secure.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              5. Sharing Your Personal Information
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your PII to third parties for their
              marketing purposes. We may share your information in the following
              circumstances:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">
                  With Service Providers (Professionals):
                </span>{" "}
                We share your information with the verified professionals
                (therapists, doctors, lawyers, etc.) listed on our platform only
                when you book a consultation or request a service from them.
                This sharing is based on your explicit consent and is solely for
                the purpose of enabling them to provide you with the requested
                service. These professionals are bound by confidentiality
                obligations.
              </li>
              <li>
                <span className="font-medium">With Third-Party Vendors:</span>{" "}
                We may engage trusted third-party companies and individuals to
                perform services on our behalf (e.g., payment processing, data
                analytics, hosting services, customer support). These vendors
                will only have access to your information to perform these tasks
                and are obligated not to disclose or use it for any other
                purpose.
              </li>
              <li>
                <span className="font-medium">For Legal Reasons:</span> We may
                disclose your information if required to do so by law or in
                response to valid requests by public authorities (e.g., a court
                or a government agency), or to protect the rights, property, or
                safety of Sweekar, our users, or the public.
              </li>
              <li>
                <span className="font-medium">
                  Aggregated or Anonymized Data:
                </span>{" "}
                We may share aggregated or anonymized information that does not
                directly identify you with partners for research, analysis, or
                service improvement.
              </li>
              <li>
                <span className="font-medium">Business Transfers:</span> In the
                event of a merger, acquisition, reorganization, or sale of
                assets, your information may be transferred as part of that
                transaction. We will notify you of any such change in ownership
                or control of your personal information.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                <strong>Access:</strong> You can request access to the personal
                information we hold about you.
              </li>
              <li>
                <strong>Correction:</strong> You can request to correct or
                update any inaccurate or incomplete personal information.
              </li>
              <li>
                <strong>Deletion:</strong> You can request the deletion of your
                personal information, subject to certain legal and contractual
                restrictions.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Where we process your
                information based on consent (especially SPI), you have the
                right to withdraw your consent at any time.
              </li>
              <li>
                <strong>Data Portability:</strong> You may have the right to
                request a copy of your data in a machine-readable format.
              </li>
              <li>
                <strong>Opt-out:</strong> You can opt-out of receiving
                promotional communications from us by following the unsubscribe
                instructions in those communications or by contacting us
                directly.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the details
              provided below.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">7. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy,
              including for the purposes of satisfying any legal, accounting, or
              reporting requirements. For SPI, retention periods will be
              strictly limited to what is necessary for service provision or as
              required by professional ethical guidelines and applicable law.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              8. Third-Party Websites and Services
            </h2>
            <p className="text-gray-700 mb-4">
              Our Services may contain links to other websites or services that
              are not operated by us. If you click on a third-party link, you
              will be directed to that third party&apos;s site. We strongly
              advise you to review the Privacy Policy of every site you visit.
              We have no control over and assume no responsibility for the
              content, privacy policies, or practices of any third-party sites
              or services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our Services are not intended for individuals under the age of 18
              (or the relevant age of majority in their jurisdiction). We do not
              knowingly collect personal information from children. If we become
              aware that we have collected personal information from a child
              without verification of parental consent, we will take steps to
              remove that information from our servers.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date. We encourage you
              to review this Privacy Policy periodically for any changes.
              Changes to this Privacy Policy are effective when they are posted
              on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraPrivacy;
