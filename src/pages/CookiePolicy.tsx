import PolicyLayout from "@/components/PolicyLayout";

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="February 9, 2026">
      <p>
        This Cookie Policy explains how SOF TRAVEL uses cookies and similar tracking technologies on our website. By continuing to browse our site, you consent to the use of cookies as described below.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help us recognize your browser, remember preferences, and improve your browsing experience.
      </p>

      <h2>2. Types of Cookies We Use</h2>

      <h3>Essential Cookies</h3>
      <p>
        These are necessary for the website to function properly. They enable core features like security, page navigation, and booking functionality. These cookies cannot be disabled.
      </p>

      <h3>Performance Cookies</h3>
      <p>
        These cookies collect anonymous information about how visitors use our website, such as which pages are most popular. This helps us improve site performance and user experience.
      </p>

      <h3>Functional Cookies</h3>
      <p>
        These cookies remember your preferences (such as language, currency, or departure city) to provide a more personalized experience.
      </p>

      <h3>Marketing Cookies</h3>
      <p>
        These cookies track your browsing activity to deliver relevant advertisements. They may be set by our advertising partners and used to build a profile of your interests.
      </p>

      <h2>3. Third-Party Cookies</h2>
      <p>We may use cookies from the following third-party services:</p>
      <ul>
        <li>Google Analytics — for website usage analysis</li>
        <li>Google Ads — for targeted advertising</li>
        <li>Facebook Pixel — for social media advertising</li>
        <li>Payment processors — for secure transaction handling</li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <p>You can manage cookies through your browser settings:</p>
      <ul>
        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
        <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
        <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
      </ul>
      <p>
        Please note that disabling certain cookies may affect the functionality of our website, particularly booking and payment features.
      </p>

      <h2>5. Cookie Retention</h2>
      <ul>
        <li>Session cookies are deleted when you close your browser.</li>
        <li>Persistent cookies remain for up to 12 months unless manually deleted.</li>
        <li>Third-party cookies follow the retention policies of their respective providers.</li>
      </ul>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For questions about our use of cookies, contact us at:<br />
        Email: softravel786@gmail.com<br />
        Phone: 0522 434392 | Mobile: +39 334 3532384<br />
        Address: Piazza Guglielmo Marconi 3/D, 42121 Reggio Emilia, Italia
      </p>
    </PolicyLayout>
  );
};

export default CookiePolicy;
