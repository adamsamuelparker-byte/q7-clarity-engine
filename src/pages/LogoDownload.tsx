import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const LogoDownload = () => {
  const sizes = [
    { name: "small", label: "Small", scale: 0.75 },
    { name: "medium", label: "Medium", scale: 1 },
    { name: "large", label: "Large", scale: 1.25 },
    { name: "xlarge", label: "Extra Large", scale: 1.5 },
  ];

  const downloadAsPNG = (elementId: string, filename: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Use the browser's built-in ability to convert to image via SVG
    const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${element.offsetWidth * 3}" height="${element.offsetHeight * 3}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${element.outerHTML}
          </div>
        </foreignObject>
      </svg>
    `;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Q7 Logo Download</h1>
        <p className="text-muted-foreground text-center mb-8">
          Click the download button to save the logo as a PNG file
        </p>

        {/* Transparent Background - Just the Logo */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Logo on Transparent Background</h2>
          <p className="text-sm text-muted-foreground mb-4">Download with transparent background (checkered pattern indicates transparency)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sizes.map((size) => (
              <div key={`transparent-${size.name}`} className="flex flex-col items-center gap-3">
                <div 
                  className="p-8 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundImage: 'linear-gradient(45deg, #e0e0e0 25%, transparent 25%), linear-gradient(-45deg, #e0e0e0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e0e0e0 75%), linear-gradient(-45deg, transparent 75%, #e0e0e0 75%)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                  }}
                >
                  <div 
                    id={`logo-transparent-${size.name}`}
                    style={{ transform: `scale(${size.scale})`, transformOrigin: 'center' }}
                  >
                    <Logo variant="dark" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{size.label}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => downloadAsPNG(`logo-transparent-${size.name}`, `q7-logo-transparent-${size.name}`)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Logo on White Background */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-6">Dark Logo (for light backgrounds)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sizes.map((size) => (
              <div key={`dark-${size.name}`} className="flex flex-col items-center gap-3">
                <div 
                  id={`logo-dark-${size.name}`}
                  className="bg-white p-8 rounded-lg border border-border flex items-center justify-center"
                  style={{ transform: `scale(${size.scale})`, transformOrigin: 'center' }}
                >
                  <Logo variant="dark" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{size.label}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => downloadAsPNG(`logo-dark-${size.name}`, `q7-logo-dark-${size.name}`)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Light Logo on Dark Background */}
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-6">Light Logo (for dark backgrounds)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sizes.map((size) => (
              <div key={`light-${size.name}`} className="flex flex-col items-center gap-3">
                <div 
                  id={`logo-light-${size.name}`}
                  className="bg-primary p-8 rounded-lg flex items-center justify-center"
                  style={{ transform: `scale(${size.scale})`, transformOrigin: 'center' }}
                >
                  <Logo variant="light" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{size.label}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => downloadAsPNG(`logo-light-${size.name}`, `q7-logo-light-${size.name}`)}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 p-4 bg-muted rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            💡 Tip: If the download button doesn't work, right-click on the logo and select "Save image as..."
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoDownload;
