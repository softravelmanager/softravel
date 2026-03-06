import PolicyLayout from "@/components/PolicyLayout";

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="February 9, 2026">
      <p>
        Welcome to SOF TRAVEL. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before making any bookings.
      </p>

      <h2>1. Services</h2>
      <p>
        SOF TRAVEL acts as a travel agency facilitating flight bookings between Italy and destinations including India, Pakistan, Sri Lanka, Bangladesh, Australia, USA, and Canada. We are intermediaries between you and the airlines. IATA: 38287561.
      </p>

      <h2>2. Booking & Reservations</h2>
      <ul>
        <li>All bookings are subject to availability and airline confirmation.</li>
        <li>You are responsible for providing accurate passenger details including names matching travel documents.</li>
        <li>Prices are subject to change until booking is confirmed and payment is completed.</li>
        <li>Booking confirmation will be sent via email within 24-48 hours.</li>
      </ul>

      <h2>3. Pricing & Payment</h2>
      <ul>
        <li>All prices are displayed in Euros (€) unless otherwise stated.</li>
        <li>Prices include applicable taxes and fees unless explicitly mentioned.</li>
        <li>We accept major credit cards, debit cards, and bank transfers.</li>
        <li>Full payment is required at the time of booking unless installment options are offered.</li>
      </ul>

      <h2>4. Travel Documents</h2>
      <p>
        Passengers are solely responsible for ensuring they have valid travel documents including passports, visas, and any health-related documentation required for their destination. SOF TRAVEL is not liable for denied boarding due to insufficient documentation.
      </p>

      <h2>5. Changes & Cancellations</h2>
      <ul>
        <li>Booking changes are subject to airline policies and may incur additional fees.</li>
        <li>Cancellation requests must be submitted in writing via email.</li>
        <li>Refund eligibility depends on the fare type and airline policy (see our Refund Policy).</li>
        <li>SOF TRAVEL service fees are non-refundable.</li>
      </ul>

      <h2>6. Liability</h2>
      <p>
        SOF TRAVEL acts as an agent and is not liable for:
      </p>
      <ul>
        <li>Flight delays, cancellations, or schedule changes by airlines</li>
        <li>Loss of baggage or personal belongings</li>
        <li>Immigration or customs issues</li>
        <li>Force majeure events (natural disasters, pandemics, political unrest)</li>
      </ul>

      <h2>7. Intellectual Property</h2>
      <p>
        All content on our website, including text, graphics, logos, and images, is the property of SOF TRAVEL and protected by Italian and international copyright laws.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Italian Republic. Any disputes shall be resolved in the courts of Reggio Emilia, Italy.
      </p>

      <h2>9. Contact</h2>
      <p>
        For questions regarding these terms, contact us at:<br />
        Email: softravel786@gmail.com<br />
        Phone: 0522 434392 | Mobile: +39 334 3532384<br />
        Address: Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia
      </p>
    </PolicyLayout>
  );
};

export default TermsOfService;
