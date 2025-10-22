export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              ApexFlow Technologies
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            Practical IT Solutions for SMEs
          </p>
          <div className="text-sm text-muted-foreground">
            © {currentYear} ApexFlow Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
