import PolicyLayout from "@/components/PolicyLayout";

const RefundPolicy = () => {
  return (
    <PolicyLayout title="Refund Policy" lastUpdated="February 9, 2026">
      <p>
        At SOF TRAVEL, we understand that travel plans can change. This Refund Policy outlines the conditions under which refunds may be issued for flight bookings made through our services.
      </p>

      <h2>1. Cancellation by the Passenger</h2>

      <h3>Within 24 Hours of Booking</h3>
      <p>
        Bookings cancelled within 24 hours of purchase are eligible for a full refund, provided the departure date is at least 7 days away. This applies to all fare types.
      </p>

      <h3>After 24 Hours</h3>
      <p>Refund eligibility depends on the fare type:</p>
      <ul>
        <li><strong>Refundable Fares:</strong> Eligible for a refund minus airline cancellation fees and SOF TRAVEL service charge (€50 per passenger).</li>
        <li><strong>Non-Refundable Fares:</strong> Not eligible for a cash refund. Airline credit may be available subject to airline policies.</li>
        <li><strong>Partially Refundable Fares:</strong> Refund amount determined by the airline's specific fare rules.</li>
      </ul>

      <h2>2. Cancellation by the Airline</h2>
      <p>If the airline cancels your flight, you are entitled to:</p>
      <ul>
        <li>A full refund of the ticket price</li>
        <li>Rebooking on an alternative flight at no extra cost</li>
        <li>Additional compensation as per EU Regulation 261/2004 (for flights departing from EU airports)</li>
      </ul>

      <h2>3. Schedule Changes</h2>
      <p>
        If the airline makes a significant schedule change (more than 3 hours), you may request a full refund or accept the new schedule. SOF TRAVEL will notify you of any changes as soon as we are informed.
      </p>

      <h2>4. Refund Processing</h2>
      <ul>
        <li>Refund requests must be submitted via email to softravel786@gmail.com</li>
        <li>Please include your booking reference number and reason for cancellation.</li>
        <li>Refunds are processed within 7-14 business days after approval.</li>
        <li>Refunds will be issued to the original payment method.</li>
        <li>Bank processing times may add an additional 5-10 business days.</li>
      </ul>

      <h2>5. Non-Refundable Items</h2>
      <p>The following are non-refundable under any circumstances:</p>
      <ul>
        <li>SOF TRAVEL service and booking fees</li>
        <li>Travel insurance premiums (once the policy is active)</li>
        <li>Visa processing fees</li>
        <li>No-show charges</li>
      </ul>

      <h2>6. Travel Insurance</h2>
      <p>
        We strongly recommend purchasing travel insurance at the time of booking. Travel insurance may cover cancellations due to medical emergencies, natural disasters, and other unforeseen circumstances not covered by this refund policy.
      </p>

      <h2>7. Disputes</h2>
      <p>
        If you are unsatisfied with a refund decision, you may escalate your case by writing to our customer service manager. We aim to resolve all disputes within 30 days.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For refund requests or inquiries:<br />
        Email: softravel786@gmail.com<br />
        Phone: 0522 434392 | Mobile: +39 334 3532384<br />
        WhatsApp: +39 351 1220012<br />
        Address: Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia
      </p>
    </PolicyLayout>
  );
};

export default RefundPolicy;
