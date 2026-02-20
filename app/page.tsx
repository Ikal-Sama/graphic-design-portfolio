import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin, ExternalLink, Palette, Layers, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  const designs = [
    {
      title: "Visual Identity Design",
      description: "Comprehensive branding and visual system for a modern startup.",
      image: "/images/design1.jpg",
      tag: "Branding",
    },
    {
      title: "Marketing Poster",
      description: "Eye-catching poster design for promotional campaigns.",
      image: "/images/Poster-desing1.png",
      tag: "Print",
    },
    {
      title: "Abstract Design Concept",
      description: "Exploring experimental colors and typography in digital art.",
      image: "/images/design2.jpg",
      tag: "Digital Art",
    },
    {
      title: "Corporate Business Card",
      description: "Minimalist and professional business card layout.",
      image: "/images/businesness-card.png",
      tag: "Stationery",
    },
    {
      title: "Luffytaro Tee Design",
      description: "Custom apparel design featuring anime-inspired illustrations.",
      image: "/images/luffytaroo-tee.jpg",
      tag: "Apparel",
    },
    {
      title: "Makima Tee Design",
      description: "Modern minimalist streetwear design concept.",
      image: "/images/makima-tee.jpg",
      tag: "Apparel",
    },
  ];

  const skills = [
    "Adobe Photoshop", "Adobe Illustrator", "Figma", "Typography",
    "Brand Identity", "Print Media", "Digital Illustration", "UI Design",
    "Color Theory", "Layout Design",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <Link href="#hero" className="text-xl font-bold tracking-tight">
            DJB.
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#designs" className="text-sm font-medium transition-colors hover:text-primary">
              Designs
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button size="sm" className="hidden sm:inline-flex rounded-full" asChild>
              <a href="/Resume-2025.pdf" download="Daniel_Bancale_Portfolio.pdf">
                Portfolio PDF
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col justify-center px-4 py-24 sm:px-8 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="max-w-3xl space-y-8 text-center md:text-left">
              <div className="space-y-4">
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium rounded-full">
                  Available for Freelance
                </Badge>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-8xl">
                  Daniel Jhon <br />
                  <span className="text-muted-foreground italic font-serif">Bancale</span>
                </h1>
                <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
                  Creative Graphic Designer
                </p>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground/80 sm:text-xl">
                I specialize in bridging the gap between functional development and visual storytelling, creating stunning visual identities and digital assets with a strong focus on minimalist aesthetics.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href="#designs">View Portfolio</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="mailto:bancale146@gmail.com">Collaborate</Link>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 pt-8 text-muted-foreground">
                <Link href="tel:09357237298" className="flex items-center space-x-2 transition-colors hover:text-primary">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">09357237298</span>
                </Link>
                <Link href="mailto:bancale146@gmail.com" className="flex items-center space-x-2 transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">bancale146@gmail.com</span>
                </Link>
              </div>
            </div>
            <div className="relative shrink-0 order-first md:order-last">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full border-4 border-muted-foreground/10 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Daniel Jhon Bancale"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse duration-3000"></div>
            </div>
          </div>
        </section>

        {/* Designs Section */}
        <section id="designs" className="bg-muted/30 py-24 md:py-32 border-y border-border/40">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Design Gallery</h2>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                A showcase of recent graphic design work, from branding to custom illustrations.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {designs.map((design, index) => (
                <Dialog key={index}>
                  <Card className="group overflow-hidden border-border/40 bg-background transition-all hover:bg-background shadow-sm">
                    <DialogTrigger asChild>
                      <button className="relative aspect-4/5 w-full overflow-hidden bg-muted cursor-zoom-in">
                        <Image
                          src={design.image}
                          alt={design.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background/90">
                            {design.tag}
                          </Badge>
                        </div>
                      </button>
                    </DialogTrigger>
                    <CardHeader>
                      <CardTitle className="text-xl">{design.title}</CardTitle>
                      <CardDescription className="line-clamp-2 leading-relaxed">{design.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="w-full flex items-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          Enlarge Design <ExternalLink className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                    </CardFooter>
                  </Card>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none focus:outline-none">
                    <div className="sr-only">
                      <DialogTitle>{design.title}</DialogTitle>
                      <DialogDescription>{design.description}</DialogDescription>
                    </div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full aspect-4/5 max-h-[80vh]">
                        <Image
                          src={design.image}
                          alt={design.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-8 text-center md:text-left">
            <div className="flex flex-col gap-12 md:flex-row items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Design Tools & Skills</h2>
                <p className="max-w-md text-lg text-muted-foreground mx-auto md:mx-0">
                  Leveraging industry-standard tools to craft pixel-perfect visuals and compelling brand stories.
                </p>
              </div>
              <div className="flex flex-1 flex-wrap justify-center gap-3 md:justify-start">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-5 py-2 text-sm font-medium rounded-md">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
          <div className="container mx-auto px-4 text-center sm:px-8 relative z-10">
            <div className="mx-auto max-w-3xl space-y-10">
              <h2 className="text-4xl font-bold tracking-tight sm:text-7xl">
                Have a design <br />
                <span className="opacity-50">challenge?</span>
              </h2>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button asChild size="lg" variant="secondary" className="w-full rounded-full sm:w-auto h-16 px-12 text-lg font-bold shadow-2xl">
                  <Link href="mailto:bancale146@gmail.com">Start a Project</Link>
                </Button>
                <Link href="tel:09357237298" className="text-xl font-medium hover:underline underline-offset-8 decoration-2 opacity-80 hover:opacity-100 transition-all">
                  +63 935 723 7298
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <Link href="#hero" className="text-xl font-bold tracking-tight">DJB.</Link>
            <p className="text-xs text-muted-foreground italic">Daniel Jhon Bancale — Graphic Design Portfolio</p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-muted-foreground transition-all hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Visual Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
