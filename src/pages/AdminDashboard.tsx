import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { solutionPages } from "@/data/solutionPages";
import { subServicePages } from "@/data/subServicePages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle, ExternalLink, FileText, Layers, Home, LogOut,
  Eye, Users, Monitor, Smartphone, Tablet, BarChart3,
} from "lucide-react";
import type { Session } from "@supabase/supabase-js";

// ── Types ──

interface Lead {
  id: string;
  created_at: string;
  contact_name: string | null;
  company_name: string;
  email: string;
  phone: string;
  turnover: string;
  categories: string[] | null;
  sub_products: string[] | null;
  page_url: string | null;
  notes: string | null;
}

interface PageView {
  id: string;
  page_url: string;
  visited_at: string;
  device_type: string | null;
  screen_width: number | null;
  user_agent: string | null;
  referrer: string | null;
}

// ── Login Form ──

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Invalid credentials");
      setLoading(false);
    } else {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-sm p-8">
        <h1 className="text-2xl font-bold text-foreground mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

// ── Site Structure Tab ──

const staticPages = [
  { name: "Homepage", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Thank You", path: "/thank-you" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
  { name: "Logo Download", path: "/logo" },
  { name: "Quick Landing", path: "/quick" },
  { name: "E-Moped / E-Bike", path: "/e-moped-e-bike" },
];

const SiteStructureTab = () => {
  const solutionEntries = Object.entries(solutionPages);
  const totalSubProducts = Object.values(subServicePages).reduce(
    (acc, services) => acc + Object.keys(services).length,
    0
  );

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {staticPages.length + solutionEntries.length + totalSubProducts}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Static Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{staticPages.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Solution Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{solutionEntries.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Sub-Product Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalSubProducts}</div>
          </CardContent>
        </Card>
      </div>

      {/* Static Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" /> Static Pages
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {staticPages.map((page) => (
              <div key={page.path} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{page.name}</span>
                  <Badge variant="outline" className="text-xs">{page.path}</Badge>
                </div>
                <Link to={page.path} className="text-accent hover:text-accent/80 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Solution Pages & Sub-Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers className="h-5 w-5" /> Solution Pages & Sub-Products
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
                      <Badge variant="secondary" className="text-xs">{subServiceEntries.length} sub-products</Badge>
                      <Badge variant="outline" className="text-xs">/{slug}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-7 space-y-2">
                      <div className="flex items-center justify-between p-3 rounded-lg border bg-accent/5">
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-accent" />
                          <span className="font-medium">Main Page</span>
                          <Badge variant="outline" className="text-xs">/{slug}</Badge>
                        </div>
                        <Link to={`/${slug}`} className="text-accent hover:text-accent/80 transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                      {subServiceEntries.map(([serviceSlug, service]) => (
                        <div key={serviceSlug} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/5 transition-colors">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{service.name}</span>
                            <Badge variant="outline" className="text-xs">/{slug}/{serviceSlug}</Badge>
                          </div>
                          <Link to={`/${slug}/${serviceSlug}`} className="text-accent hover:text-accent/80 transition-colors">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </div>
                      ))}
                      {subServiceEntries.length === 0 && (
                        <div className="text-muted-foreground text-sm p-3">No sub-products defined for this solution</div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

// ── Leads Tab ──

const LeadsTab = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
      if (!error && data) setLeads(data);
      setLoading(false);
    };
    fetchLeads();
  }, []);

  if (loading) return <p className="text-muted-foreground p-4">Loading leads...</p>;

  return (
    <div className="overflow-x-auto">
      <p className="text-sm text-muted-foreground mb-4">{leads.length} total leads</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Turnover</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Sub-products</TableHead>
            <TableHead>Page</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="whitespace-nowrap">
                {new Date(lead.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
              </TableCell>
              <TableCell>{lead.contact_name || "—"}</TableCell>
              <TableCell>{lead.company_name}</TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phone}</TableCell>
              <TableCell>{lead.turnover}</TableCell>
              <TableCell className="max-w-[200px] truncate">{lead.categories?.join(", ") || "—"}</TableCell>
              <TableCell className="max-w-[200px] truncate">{lead.sub_products?.join(", ") || "—"}</TableCell>
              <TableCell className="max-w-[150px] truncate">{lead.page_url || "—"}</TableCell>
            </TableRow>
          ))}
          {leads.length === 0 && (
            <TableRow>
              <TableCell colSpan={9} className="text-center text-muted-foreground py-8">No leads yet</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

// ── Analytics Tab ──

const AnalyticsTab = () => {
  const [views, setViews] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchViews = async () => {
      const { data, error } = await supabase.from("page_views").select("*").order("visited_at", { ascending: false }).limit(500);
      if (!error && data) setViews(data as PageView[]);
      setLoading(false);
    };
    fetchViews();
  }, []);

  if (loading) return <p className="text-muted-foreground p-4">Loading analytics...</p>;

  const today = new Date().toDateString();
  const todayViews = views.filter((v) => new Date(v.visited_at).toDateString() === today).length;
  const uniquePages = new Set(views.map((v) => v.page_url)).size;
  const deviceCounts = views.reduce<Record<string, number>>((acc, v) => {
    const d = v.device_type || "unknown";
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});

  const DeviceIcon = ({ type }: { type: string }) => {
    if (type === "mobile") return <Smartphone className="h-4 w-4" />;
    if (type === "tablet") return <Tablet className="h-4 w-4" />;
    return <Monitor className="h-4 w-4" />;
  };

  const pageCounts = views.reduce<Record<string, number>>((acc, v) => {
    acc[v.page_url] = (acc[v.page_url] || 0) + 1;
    return acc;
  }, {});
  const topPages = Object.entries(pageCounts).sort(([, a], [, b]) => b - a).slice(0, 10);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2"><Eye className="h-4 w-4" /> Total Views</CardTitle>
          </CardHeader>
          <CardContent><p className="text-3xl font-bold">{views.length}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2"><BarChart3 className="h-4 w-4" /> Today</CardTitle>
          </CardHeader>
          <CardContent><p className="text-3xl font-bold">{todayViews}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2"><Users className="h-4 w-4" /> Unique Pages</CardTitle>
          </CardHeader>
          <CardContent><p className="text-3xl font-bold">{uniquePages}</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Devices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {Object.entries(deviceCounts).map(([type, count]) => (
              <div key={type} className="flex items-center gap-2 text-sm">
                <DeviceIcon type={type} />
                <span className="capitalize">{type}</span>
                <span className="text-muted-foreground ml-auto">{count}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Top Pages</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topPages.map(([page, count]) => (
              <TableRow key={page}>
                <TableCell>{page}</TableCell>
                <TableCell className="text-right">{count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Recent Page Views</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date/Time</TableHead>
              <TableHead>Page</TableHead>
              <TableHead>Device</TableHead>
              <TableHead>Width</TableHead>
              <TableHead>Referrer</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {views.slice(0, 50).map((view) => (
              <TableRow key={view.id}>
                <TableCell className="whitespace-nowrap">
                  {new Date(view.visited_at).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                </TableCell>
                <TableCell>{view.page_url}</TableCell>
                <TableCell className="capitalize">{view.device_type || "—"}</TableCell>
                <TableCell>{view.screen_width || "—"}</TableCell>
                <TableCell className="max-w-[200px] truncate">{view.referrer || "—"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

// ── Main Dashboard ──

const AdminDashboard = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setChecking(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setChecking(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (checking) return null;

  if (!session) {
    return <LoginForm onLogin={() => {}} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Q7 Admin Dashboard</h1>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="leads">
          <TabsList>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="site-structure">Site Structure</TabsTrigger>
          </TabsList>
          <TabsContent value="leads">
            <LeadsTab />
          </TabsContent>
          <TabsContent value="analytics">
            <AnalyticsTab />
          </TabsContent>
          <TabsContent value="site-structure">
            <SiteStructureTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
