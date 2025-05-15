import { useNavigate } from "react-router-dom";

const MitraTerms = () => {
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
            Terms and Conditions
          </h1>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Sweekar (&quot;Sweekar,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). These Terms and Conditions
              (&quot;Terms&quot;) govern your access to and use of our website
              (sweekarme.in), our mobile application (Gazra Mitra, if
              applicable), and all related services, features, content, and
              applications offered by us (collectively, the
              &quot;Services&quot;).
            </p>
            <p className="text-gray-700 mb-4">
              By accessing or using our Services, you agree to be bound by these
              Terms and our Privacy Policy (which is incorporated herein by
              reference). If you do not agree to these Terms, you may not access
              or use our Services. We specifically serve the LGBTQAI+ community
              and women, and by using our Services, you affirm that you
              understand and respect the inclusive nature of our platform.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              2. Description of Services
            </h2>
            <p className="text-gray-700 mb-4">
              Sweekar provides a platform to connect users with verified
              professionals offering services such as mental health support,
              medical consultations, legal aid, and placement services. We
              facilitate these connections but are not direct providers of these
              professional services unless explicitly stated.
            </p>
            <p className="text-gray-700 mb-4">
              The professionals listed on our platform operate as independent
              practitioners. Sweekar endeavors to verify their credentials and
              commitment to inclusivity but does not guarantee the quality,
              suitability, or outcomes of the services provided by these
              professionals.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              3. User Accounts and Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              To access certain features of our Services, you may need to
              register for an account. You agree to:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>
                Provide accurate, current, and complete information during the
                registration process.
              </li>
              <li>
                Maintain and promptly update your account information to keep it
                accurate, current, and complete.
              </li>
              <li>
                Maintain the security and confidentiality of your account
                credentials and not share them with any third party.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account or
                any other breach of security.
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              You are responsible for all activities that occur under your
              account, whether or not you have authorized such activities.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              4. User Conduct and Prohibited Activities
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Services only for lawful purposes and in a
              manner that respects the rights and dignity of others,
              particularly within our target communities. You agree not to:
            </p>
            <ul className="list-disc pl-8 mb-4 text-gray-700 space-y-2">
              <li>Use the Services for any illegal or unauthorized purpose.</li>
              <li>
                Engage in any activity that is harmful, fraudulent, deceptive,
                threatening, harassing, defamatory, obscene, discriminatory, or
                otherwise objectionable.
              </li>
              <li>
                Violate the privacy or personal rights of others, including
                collecting or sharing information about users without their
                explicit consent.
              </li>
              <li>
                Impersonate any person or entity, or falsely state or otherwise
                misrepresent your affiliation with a person or entity.
              </li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Services or the data contained therein.
              </li>
              <li>
                Attempt to gain unauthorized access to the Services, other user
                accounts, or our computer systems or networks.
              </li>
              <li>
                Upload or transmit viruses, worms, or any other malicious code.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 mb-4">
              All content, features, and functionality on the Services,
              including text, graphics, logos, icons, images, audio clips, video
              clips, data compilations, and software, are the exclusive property
              of Sweekar or its licensors and are protected by Indian and
              international copyright, trademark, patent, trade secret, and
              other intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-700 mb-4">
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to access and use the Services for your
              personal, non-commercial use, subject to these Terms. You may not
              reproduce, distribute, modify, create derivative works of,
              publicly display, publicly perform, republish, download, store, or
              transmit any of the material on our Services without our prior
              written consent.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              6. Confidentiality and Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Your privacy is critically important to us. Our collection and use
              of personal information in connection with the Services are
              described in our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              . By using our Services, you consent to the collection, use, and
              sharing of your information as set forth in our Privacy Policy,
              including the handling of Sensitive Personal Information with your
              explicit consent.
            </p>
            <p className="text-gray-700 mb-4">
              Professionals listed on our platform are also bound by
              confidentiality obligations regarding the information you share
              with them during consultations.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">7. Disclaimers</h2>
            <p className="text-gray-700 mb-4">
              THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF
              DEALING OR USAGE OF TRADE.
            </p>
            <p className="text-gray-700 mb-4">
              SWEEKAR DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED,
              ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL
              COMPONENTS.
            </p>
            <p className="text-gray-700 mb-4">
              SWEEKAR IS A PLATFORM FOR CONNECTING USERS WITH PROFESSIONALS. WE
              DO NOT PROVIDE PROFESSIONAL ADVICE (MEDICAL, LEGAL, THERAPEUTIC,
              ETC.) DIRECTLY. ANY INFORMATION OR CONTENT PROVIDED THROUGH THE
              SERVICES IS FOR INFORMATIONAL PURPOSES ONLY AND SHOULD NOT BE
              CONSIDERED A SUBSTITUTE FOR PROFESSIONAL ADVICE FROM A QUALIFIED
              PROVIDER. YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS AND
              ENGAGEMENTS WITH PROFESSIONALS YOU CONNECT WITH THROUGH OUR
              SERVICES. WE DO NOT ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR THE ACCURACY, RELIABILITY, OR EFFICACY OF ANY ADVICE,
              TREATMENT, OR SERVICES PROVIDED BY THESE PROFESSIONALS.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL SWEEKAR, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES,
              AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES,
              INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS,
              GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR
              RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
            </p>
            <p className="text-gray-700 mb-4">
              IN NO EVENT SHALL SWEEKAR&apos;S TOTAL AGGREGATE LIABILITY TO YOU
              FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION (WHETHER IN
              CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE) EXCEED THE
              AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICES OR
              ONE HUNDRED INDIAN RUPEES (INR 100.00), WHICHEVER IS GREATER.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">9. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to defend, indemnify, and hold harmless Sweekar, its
              affiliates, licensors, and service providers, and its and their
              respective officers, directors, employees, contractors, agents,
              licensors, suppliers, successors, and assigns from and against any
              claims, liabilities, damages, judgments, awards, losses, costs,
              expenses, or fees (including reasonable attorneys&apos; fees)
              arising out of or relating to your violation of these Terms or
              your use of the Services, including, but not limited to, any use
              of the Services&apos; content, services, and products other than
              as expressly authorized in these Terms or your use of any
              information obtained from the Services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              10. Third-Party Links and Services
            </h2>
            <p className="text-gray-700 mb-4">
              The Services may contain links to third-party websites or services
              that are not owned or controlled by Sweekar. We have no control
              over, and assume no responsibility for, the content, privacy
              policies, or practices of any third-party websites or services.
              You further acknowledge and agree that Sweekar shall not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with the
              use of or reliance on any such content, goods, or services
              available on or through any such websites or services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">11. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access to all or part of the
              Services, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach these
              Terms. Upon termination, your right to use the Services will
              immediately cease.
            </p>
            <p className="text-gray-700 mb-4">
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed and construed in accordance with the
              laws of India, without regard to its conflict of law provisions.
              The courts in Vadodara, Gujarat, India, shall have exclusive
              jurisdiction over any disputes arising out of or relating to these
              Terms or the Services.
            </p>
            <p className="text-gray-700 mb-4">
              Any dispute arising out of or in connection with these Terms,
              including any question regarding its existence, validity, or
              termination, shall be referred to and finally resolved by
              arbitration in Vadodara, Gujarat, in accordance with the
              Arbitration and Conciliation Act, 1996, as amended from time to
              time. The arbitration shall be conducted by a sole arbitrator
              appointed by mutual consent. The language of the arbitration shall
              be English.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">13. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will
              provide at least 30 days&apos; notice prior to any new terms
              taking effect. What constitutes a material change will be
              determined at our sole discretion.
            </p>
            <p className="text-gray-700 mb-4">
              By continuing to access or use our Services after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the Services.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-medium mb-2">14. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms and our Privacy Policy constitute the entire agreement
              between you and Sweekar regarding your use of the Services and
              supersede all prior and contemporaneous understandings,
              agreements, representations, and warranties, both written and
              oral, regarding the Services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraTerms;
