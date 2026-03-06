import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const PolicyLayout = ({ title, lastUpdated, children }: PolicyLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-4xl pt-24">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          {title}
        </h1>
        <p className="text-muted-foreground text-sm mb-8">
          Last updated: {lastUpdated}
        </p>
        <div className="prose prose-slate max-w-none space-y-6 text-foreground/80 [&_h2]:text-foreground [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_p]:leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyLayout;
