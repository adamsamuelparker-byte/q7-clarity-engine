import { Logo } from "@/components/Logo";

const LogoDownload = () => {
  const sizes = [
    { name: "Small", scale: 0.5, width: "w-32" },
    { name: "Medium", scale: 0.75, width: "w-48" },
    { name: "Large", scale: 1, width: "w-64" },
    { name: "Extra Large", scale: 1.5, width: "w-96" },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Q7 Logo Download</h1>
        <p className="text-muted-foreground text-center mb-8">
          Right-click on any logo and select "Save image as..." to download
        </p>

        {/* Dark Logo on White Background */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Dark Logo (for light backgrounds)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sizes.map((size) => (
              <div key={`dark-${size.name}`} className="flex flex-col items-center">
                <div 
                  className="bg-white p-8 rounded-lg border border-border flex items-center justify-center"
                  style={{ transform: `scale(${size.scale})`, transformOrigin: 'center' }}
                >
                  <Logo variant="dark" />
                </div>
                <span className="text-sm text-muted-foreground mt-2">{size.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Light Logo on Dark Background */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6">Light Logo (for dark backgrounds)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sizes.map((size) => (
              <div key={`light-${size.name}`} className="flex flex-col items-center">
                <div 
                  className="bg-primary p-8 rounded-lg flex items-center justify-center"
                  style={{ transform: `scale(${size.scale})`, transformOrigin: 'center' }}
                >
                  <Logo variant="light" />
                </div>
                <span className="text-sm text-muted-foreground mt-2">{size.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">How to Download</h3>
          <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
            <li>Right-click on the logo size you need</li>
            <li>Select "Save image as..." or take a screenshot</li>
            <li>Save to your desired location</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default LogoDownload;
