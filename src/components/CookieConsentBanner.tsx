import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield } from "lucide-react";

const CONSENT_KEY = "softravel_cookie_consent";
const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      const { timestamp } = JSON.parse(stored);
      if (Date.now() - timestamp < SIX_MONTHS_MS) {
        return; // consent still valid
      }
    }
    // Show after a brief delay for better UX
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    if (!agreed) return;
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ accepted: true, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({ accepted: false, timestamp: Date.now() })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-in slide-in-from-bottom-5 duration-500">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-card border border-border rounded-xl shadow-lg p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-primary/10 shrink-0 mt-0.5">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-foreground text-lg">
                We value your privacy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to improve your browsing experience and analyze site traffic. 
                If you contact us via our form, we will use your email or phone number 
                <strong> only</strong> to respond to your request — we will never share it 
                with third parties for marketing purposes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 pl-2">
            <Checkbox
              id="cookie-consent"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-0.5"
            />
            <label
              htmlFor="cookie-consent"
              className="text-sm text-foreground leading-relaxed cursor-pointer select-none"
            >
              I agree that my email or phone number will be used to contact me
              regarding my request, in accordance with the{" "}
              <Link
                to="/privacy-policy"
                className="text-primary underline hover:text-primary/80 font-medium"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <Button
              onClick={handleAccept}
              disabled={!agreed}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Accept All Cookies
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
            >
              Decline Optional Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
