import { Link } from "react-router-dom";
import { solutionPages } from "@/data/solutionPages";
import { subServicePages } from "@/data/subServicePages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ExternalLink, FileText, Layers, Home } from "lucide-react";

const staticPages = [
  { name: "Homepage", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Thank You", path: "/thank-you" },
];

const AdminDashboard = () => {
  const solutionEntries = Object.entries(solutionPages);
  const totalSubProducts = Object.values(subServicePages).reduce(
    (acc, services) => acc + Object.keys(services).length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Site Structure Overview
          </h1>
          <p className="text-muted-foreground">
            Complete sitemap showing all pages and navigation paths
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {staticPages.length + solutionEntries.length + totalSubProducts}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Static Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {staticPages.length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Solution Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {solutionEntries.length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Sub-Product Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {totalSubProducts}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Static Pages Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Static Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {staticPages.map((page) => (
                <div
                  key={page.path}
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="font-medium">{page.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {page.path}
                    </Badge>
                  </div>
                  <Link
                    to={page.path}
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Solution Pages Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Solution Pages & Sub-Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" className="w-full">
              {solutionEntries.map(([slug, solution]) => {
                const subServices = subServicePages[slug] || {};
                const subServiceEntries = Object.entries(subServices);

                return (
                  <AccordionItem key={slug} value={slug}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="font-medium">{solution.hero.headline}</span>
                        <Badge variant="secondary" className="text-xs">
                          {subServiceEntries.length} sub-products
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          /{slug}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pl-7 space-y-2">
                        {/* Solution Page Link */}
                        <div className="flex items-center justify-between p-3 rounded-lg border bg-accent/5">
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4 text-accent" />
                            <span className="font-medium">Main Page</span>
                            <Badge variant="outline" className="text-xs">
                              /{slug}
                            </Badge>
                          </div>
                          <Link
                            to={`/${slug}`}
                            className="text-accent hover:text-accent/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>

                        {/* Sub-Product Pages */}
                        {subServiceEntries.map(([serviceSlug, service]) => (
                          <div
                            key={serviceSlug}
                            className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{service.name}</span>
                              <Badge variant="outline" className="text-xs">
                                /{slug}/{serviceSlug}
                              </Badge>
                            </div>
                            <Link
                              to={`/${slug}/${serviceSlug}`}
                              className="text-accent hover:text-accent/80 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </div>
                        ))}

                        {subServiceEntries.length === 0 && (
                          <div className="text-muted-foreground text-sm p-3">
                            No sub-products defined for this solution
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </CardContent>
        </Card>

        {/* Back to Homepage */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-accent hover:text-accent/80 transition-colors underline"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
