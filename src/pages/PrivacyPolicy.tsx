import PolicyLayout from "@/components/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="February 10, 2026">
      <h2>1. Who We Are</h2>
      <p>
        SOF TRAVEL is an Italian-based flight booking agency located at Piazza Guglielmo Marconi 3/D, 
        42121 Reggio Emilia, Italia. We help travelers book flights from Italy to destinations worldwide 
        including India, Pakistan, Sri Lanka, Bangladesh, Australia, USA, and Canada.
      </p>
      <p>
        <strong>Data Controller:</strong> SOF TRAVEL — Owner: Ghulam Sarwar<br />
        <strong>IATA:</strong> 38287561<br />
        <strong>Email:</strong> softravel786@gmail.com<br />
        <strong>Phone:</strong> 0522 434392 | Mobile: +39 334 3532384<br />
        <strong>WhatsApp:</strong> +39 351 1220012<br />
        <strong>Address:</strong> Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia
      </p>

      <h2>2. What Data We Collect</h2>
      <h3>Data You Provide Directly</h3>
      <p>When you use our contact form or book a flight, we may collect:</p>
      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number (optional)</li>
        <li>Your message or inquiry details</li>
      </ul>

      <h3>Data for Flight Bookings</h3>
      <ul>
        <li>Date of birth, gender, and nationality</li>
        <li>Passport number</li>
        <li>Billing and payment information</li>
        <li>Travel preferences and booking history</li>
        <li>Mailing address</li>
      </ul>

      <h3>Automatically Collected Data</h3>
      <ul>
        <li>IP address and browser type</li>
        <li>Device information and operating system</li>
        <li>Pages visited and time spent on our website</li>
        <li>Cookies and similar tracking technologies (see our Cookie Policy)</li>
      </ul>

      <h2>3. Why We Collect Your Data</h2>
      <p>We collect and process your personal data for the following purposes:</p>
      <ul>
        <li><strong>To respond to your inquiries:</strong> When you submit our contact form, we use your email or phone number solely to contact you regarding your request.</li>
        <li><strong>To process flight bookings:</strong> To complete and manage your reservations with airlines.</li>
        <li><strong>To communicate with you:</strong> Sending booking confirmations, updates, and itineraries.</li>
        <li><strong>To improve our services:</strong> Analyzing website usage to enhance your experience.</li>
        <li><strong>To comply with the law:</strong> Meeting legal and regulatory obligations.</li>
      </ul>
      <p>
        <strong>Important:</strong> We will never sell your personal data to third parties. Your email and phone number 
        are used exclusively to respond to your request and will not be shared for marketing purposes.
      </p>

      <h2>4. How Your Data Is Transmitted</h2>
      <p>
        When you submit our contact form, your data (name, email, phone number, and message) is sent 
        to our team via email so we can respond to your inquiry. This transmission uses industry-standard 
        SSL/TLS encryption to protect your information in transit.
      </p>

      <h2>5. How Long We Keep Your Data</h2>
      <ul>
        <li><strong>Contact form inquiries:</strong> We retain your data for up to 12 months after your last interaction, then it is permanently deleted.</li>
        <li><strong>Booking data:</strong> Retained for the duration of your booking plus 5 years, as required by Italian and EU law for tax and regulatory compliance.</li>
        <li><strong>Website analytics:</strong> Anonymized data is retained for up to 26 months.</li>
      </ul>

      <h2>6. Your Rights (Under GDPR)</h2>
      <p>As we operate under EU regulations, you have the right to:</p>
      <ul>
        <li><strong>Access</strong> — Request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification</strong> — Ask us to correct inaccurate or incomplete data.</li>
        <li><strong>Erasure (Right to be forgotten)</strong> — Request deletion of your personal data.</li>
        <li><strong>Data portability</strong> — Receive your data in a structured, machine-readable format.</li>
        <li><strong>Withdraw consent</strong> — Revoke consent for marketing communications at any time.</li>
        <li><strong>Lodge a complaint</strong> — Contact the Italian Data Protection Authority (Garante per la protezione dei dati personali).</li>
      </ul>

      <h2>7. How to Request Data Deletion</h2>
      <p>
        You can request the deletion of your personal data at any time by contacting us at:
      </p>
      <ul>
        <li><strong>Email:</strong> softravel786@gmail.com</li>
        <li><strong>Phone:</strong> 0522 434392 | Mobile: +39 334 3532384</li>
        <li><strong>Post:</strong> SOF TRAVEL, Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia</li>
      </ul>
      <p>
        We will process your request within 30 days and confirm the deletion in writing. 
        Please note that some data may need to be retained for legal compliance purposes.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement industry-standard security measures including SSL encryption, secure payment 
        gateways, and access controls to protect your personal information. However, no method of 
        electronic transmission is 100% secure.
      </p>

      <h2>9. Information Sharing</h2>
      <p>We may share your information with:</p>
      <ul>
        <li>Airlines and travel partners to fulfill your bookings</li>
        <li>Payment processors to complete transactions securely</li>
        <li>Government authorities when required by law (e.g., immigration, customs)</li>
        <li>Service providers who assist in operating our website</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>10. Contact Us for Privacy Requests</h2>
      <p>
        For any privacy-related questions, data access requests, or to exercise any of your rights, 
        please contact us:
      </p>
      <p>
        <strong>Email:</strong> softravel786@gmail.com<br />
        <strong>Phone:</strong> 0522 434392 | Mobile: +39 334 3532384<br />
        <strong>WhatsApp:</strong> +39 351 1220012<br />
        <strong>Address:</strong> SOF TRAVEL, Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia
      </p>
      <p>
        We aim to respond to all privacy inquiries within 30 days.
      </p>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
