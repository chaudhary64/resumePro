import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Nav/Nav";
import { Link } from "react-router";

const Terms = () => {
  return (
    <>
      <Nav />
      <div className="min-h-screen px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-24 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-700 mb-8">
            Terms of Service
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              By accessing and using the services provided by our Resume Maker
              web application (the "Service"), you agree to comply with and be
              bound by these Terms of Service ("Terms"). If you do not agree
              with any part of these Terms, you are not permitted to access or
              use the Service. These Terms are subject to change at any time,
              with or without notice. We recommend that you periodically review
              this page for updates. Your continued use of the Service after
              changes have been posted constitutes your acceptance of those
              changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              2. Service Description
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Resume Maker web application allows users to create
              professional resumes using templates and text editors.
              Additionally, users can enhance their resumes through integration
              with the Gemini AI API, which analyzes and scores resumes based on
              Applicant Tracking System (ATS) compatibility. Users are able to
              generate resumes in multiple formats, including PDF, and in
              different languages, allowing them to cater to international job
              markets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              3. Use of Gemini API
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Service uses the Gemini AI API to provide recommendations for
              improving ATS compatibility, optimizing your resume for job
              application systems. The Gemini API processes your resume data and
              provides feedback regarding content structure, keyword
              optimization, and other ATS-related suggestions. Please note that
              while this feedback is intended to enhance your resume, we do not
              guarantee that following the suggestions will result in job
              interviews or job offers. Users are encouraged to review all
              recommendations carefully.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              Furthermore, the Service may update or modify its integration with
              the Gemini API at any time, and we reserve the right to
              discontinue or suspend this feature in whole or in part at our
              discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              4. Multilingual PDF Export
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Resume Maker web application allows users to export their
              resumes in PDF format, and the system supports multiple languages
              for this export functionality. Although we strive for high-quality
              translations, it is important to note that translation accuracy
              may vary depending on the language. We recommend that you manually
              review your resume to ensure its accuracy in the chosen language.
              Additionally, the PDF export feature may not be available in all
              languages or may have limited formatting options based on the
              language's character set.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              5. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base leading-relaxed">
              <li>
                Provide accurate and truthful information when creating your
                resume.
              </li>
              <li>
                Do not use the Service for illegal or offensive purposes,
                including but not limited to the creation of fraudulent resumes
                or the submission of plagiarized content.
              </li>
              <li>
                Ensure that any personal data submitted is truthful, accurate,
                and complete.
              </li>
              <li>
                Maintain the confidentiality of your login credentials,
                including any account and password details.
              </li>
              <li>
                Do not attempt to circumvent or interfere with any security
                measures or features of the Service.
              </li>
              <li>
                Comply with all applicable laws and regulations when using the
                Service, including data protection and privacy laws in your
                jurisdiction.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              6. Changes to Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We reserve the right to modify, update, or revise these Terms at
              any time. Changes to the Terms will be posted on this page with a
              revised effective date. We may also notify users of any
              significant changes through email or notifications within the
              Service. It is your responsibility to review the Terms
              periodically to stay informed about any updates or changes. Your
              continued use of the Service after any changes to the Terms
              signifies your acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              7. Privacy Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We value your privacy and are committed to protecting your
              personal information. By using the Service, you agree to our
              Privacy Policy, which outlines how we collect, use, and protect
              your data. We may collect personal information such as your name,
              email address, and resume data. We will not share your personal
              information with third parties without your consent, except as
              necessary to provide the Service or as required by law. Please
              review our Privacy Policy for more detailed information on how we
              handle your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Service and its entire content, features, and functionality,
              including but not limited to text, graphics, logos, images,
              software, and audio, are owned by us or our licensors and are
              protected by intellectual property laws. You are granted a
              limited, non-transferable, and non-exclusive license to access and
              use the Service for personal, non-commercial purposes. You may not
              reproduce, distribute, modify, or create derivative works based on
              the content of the Service without express written permission from
              the owner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Service is provided "as is" and without warranty of any kind,
              either express or implied, including but not limited to the
              implied warranties of merchantability, fitness for a particular
              purpose, or non-infringement. We do not warrant that the Service
              will be uninterrupted, error-free, or secure. We do not guarantee
              the accuracy or completeness of the resume suggestions or ATS
              compatibility scores provided by the Gemini API. Users rely on the
              feedback and services at their own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              10. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To the fullest extent permitted by applicable law, we shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Service, even if we
              have been advised of the possibility of such damages. Our total
              liability to you for any claim arising out of or related to these
              Terms shall be limited to the amount you paid for using the
              Service in the past 12 months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              11. Indemnification
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              You agree to indemnify, defend, and hold harmless us, our
              affiliates, and our respective officers, directors, employees,
              agents, and representatives from and against any and all claims,
              liabilities, damages, losses, costs, or expenses arising out of or
              related to your use of the Service, your violation of these Terms,
              or your violation of any third-party rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              12. Governing Law
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of the jurisdiction in which we operate, without regard to
              its conflict of law principles. Any legal action or proceeding
              arising under these Terms shall be brought exclusively in the
              courts located in the jurisdiction in which we operate, and you
              consent to the exclusive jurisdiction and venue of such courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              13. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you have any questions or concerns regarding these Terms of
              Service, please{" "}
              <Link
                to="/contact"
                className="text-blue-600 hover:underline underline-offset-1"
              >
                contact us
              </Link>
              . We are here to help you and will respond to your inquiries as
              soon as possible.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
