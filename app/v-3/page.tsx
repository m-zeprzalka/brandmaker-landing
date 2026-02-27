"use client";

import Image from "next/image";
import * as React from "react";
import {
    BookOpen,
    Check,
    FileText,
    LayoutGrid,
    Menu,
    Palette,
    PenTool,
    Sparkles,
    Type,
    Users,
    X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

// ─── Feature card data ────────────────────────────────────────────────────────
// lastInRow: true → no border-r (prevents double-border on the right grid edge)

const features = [
    {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Naming & Slogan",
        description: "4 propozycje nazw z etymologią, slogan reklamowy oraz tagline.",
        span: "md:col-span-2",
        lastInRow: false,
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "Strategia Marki",
        description: "Brand Story, Archetyp marki, Tone of Voice oraz DNA Twojego biznesu.",
        span: "md:col-span-1",
        lastInRow: true,
    },
    {
        icon: <PenTool className="h-5 w-5" />,
        title: "Logo Wektorowe",
        description: "3 warianty w wybranym stylu. Pliki SVG (wersja wektorowa) gotowe do druku.",
        span: "md:col-span-1",
        lastInRow: false,
    },
    {
        icon: <Palette className="h-5 w-5" />,
        title: "System Kolorów",
        description: "Palety Primary/Secondary/Accent, testy WCAG, pełne skale 50–950 i gradienty.",
        span: "md:col-span-2",
        lastInRow: true,
    },
    {
        icon: <Type className="h-5 w-5" />,
        title: "Typografia",
        description: "Dobór fontów (Heading + Body), hierarchia typograficzna, interlinia i specimen.",
        span: "md:col-span-1",
        lastInRow: false,
    },
    {
        icon: <LayoutGrid className="h-5 w-5" />,
        title: "Design Tokens",
        description: "Dla developerów: gotowy kod CSS, konfiguracja Tailwind i JSON dla Figmy.",
        span: "md:col-span-1",
        lastInRow: false,
    },
    {
        icon: <FileText className="h-5 w-5" />,
        title: "Mockupy Biznesowe",
        description: "Wizualizacje wizytówek, papieru firmowego i strony WWW w wersji MVP.",
        span: "md:col-span-1",
        lastInRow: true,
    },
    {
        icon: <Users className="h-5 w-5" />,
        title: "Social Media",
        description: "Prezentacja brandingu w mediach społecznościowych – mockupy profili i postów.",
        span: "md:col-span-2",
        lastInRow: false,
    },
    {
        icon: <BookOpen className="h-5 w-5" />,
        title: "BrandBook (20–30 stron)",
        description: "Kompletna dokumentacja w formacie prezentacji PDF 16:9. Twoja strategia w pigułce.",
        span: "md:col-span-1",
        lastInRow: true,
    },
];

// ─── Steps data ───────────────────────────────────────────────────────────────

const steps = [
    {
        number: "01",
        title: "Opisz wizję",
        description:
            "Podaj branżę i opis firmy – resztą zajmie się nasz system. Wystarczy kilka słów kluczowych.",
    },
    {
        number: "02",
        title: "AI tworzy magię",
        description:
            "Nasz algorytm generuje nazwę, logo, palety kolorów, typografię i strategię marki.",
    },
    {
        number: "03",
        title: "Dostosuj i działaj",
        description:
            "Edytuj detale, pobierz gotowy BrandBook i ruszaj na podbój rynku.",
    },
];

// ─── Pricing data ─────────────────────────────────────────────────────────────

const plans = [
    {
        name: "Starter",
        price: "Free",
        priceNote: "Zawsze bezpłatny",
        description: "Szybka walidacja. Darmowy plan na start.",
        plan: "Plan Indywidualny",
        features: [
            "1 Marka",
            "1 generowanie",
            "Logo PNG/JPG",
            "Podstawowy BrandBook (10 str.)",
            "Kolory + Fonty",
        ],
        cta: "Zacznij za darmo",
        href: "#",
        highlighted: false,
    },
    {
        name: "Professional",
        price: "99 zł",
        priceNote: "zamiast 499 zł",
        description: "Pełna tożsamość firmy.",
        plan: "Plan Indywidualny",
        features: [
            "3 Marki",
            "20 generowań",
            "PDF (Druk)",
            "Pełny BrandBook AI (20+ str.)",
            "Starter + Figma & Tailwind",
        ],
        cta: "Zacznij z Professional",
        href: "#",
        highlighted: true,
        badge: "Bestseller",
    },
    {
        name: "Agency",
        price: "329 zł",
        priceNote: "jednorazowo",
        description: "Dla agencji i seryjnych founderów.",
        plan: "Plan Indywidualny",
        features: [
            "5 Marek",
            "35 generowań",
            "PDF (Druk)",
            "Pełny BrandBook AI (20+ str.)",
            "Starter + Figma & Tailwind",
        ],
        cta: "Zacznij z Agency",
        href: "#",
        highlighted: false,
    },
];

// ─── Nav links ────────────────────────────────────────────────────────────────

const navLinks = [
    { label: "Blog", href: "#" },
    { label: "Dziennik Zmian", href: "#" },
    { label: "Dokumentacja", href: "#" },
    { label: "Cennik", href: "#pricing" },
    { label: "FAQ", href: "#" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* ────────────────────────── HEADER / NAVBAR ──────────────────────── */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border border-border px-4 md:px-6 lg:px-8">
                {/* ─── Top bar ────────────────────────────────────────────────── */}
                <div className="flex items-center justify-between h-14">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-2 font-semibold tracking-tight text-foreground hover:text-muted-foreground transition-colors"
                        aria-label="BrandMaker – strona główna"
                    >
                        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-foreground text-background text-xs font-bold">
                            B
                        </div>
                        <span className="text-sm font-semibold">BrandMaker</span>
                    </a>

                    {/* Desktop nav – centered absolutely so logo+CTA stay at edges */}
                    <nav
                        aria-label="Nawigacja główna"
                        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right side: theme toggle + CTA + hamburger */}
                    <div className="flex items-center gap-2">
                        <ModeToggle />
                        <Button variant="ghost" size="sm" className="hidden lg:inline-flex text-sm">
                            Zaloguj się
                        </Button>
                        <Button size="sm" asChild className="hidden sm:inline-flex text-sm rounded-sm">
                            <a href="#pricing">Rozpocznij →</a>
                        </Button>
                        {/* Hamburger – visible below lg */}
                        <button
                            onClick={() => setMobileOpen((o) => !o)}
                            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-sm border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
                            aria-expanded={mobileOpen}
                        >
                            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                {/* Mobile / tablet drawer */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-border py-3 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-2 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-sm"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="mt-2 pt-2 border-t border-border flex gap-2">
                            <Button variant="ghost" size="sm" className="flex-1 text-sm rounded-sm">
                                Zaloguj się
                            </Button>
                            <Button size="sm" asChild className="flex-1 text-sm rounded-sm">
                                <a href="#pricing">Rozpocznij →</a>
                            </Button>
                        </div>
                    </div>
                )}
            </header>

            {/* ────────────────────────── MAIN ─────────────────────────────────── */}
            <main className="border-x border-border">

                {/* ── HERO (centered, single column) ──────────────────────────── */}
                <section
                    id="hero"
                    aria-labelledby="hero-heading"
                    className="border-b border-border relative overflow-hidden"
                >
                    {/* Hero background: Pink Floyd prism effect */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden>
                        {/* Very subtle grid */}
                        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:40px_40px]" />
                        {/* Prism blobs – vivid, Pink Floyd-style */}
                        <div className="absolute -top-24 -left-16 w-[500px] h-[500px] rounded-full bg-violet-600/40 blur-[130px]" />
                        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-500/35 blur-[110px]" />
                        <div className="absolute top-8 right-0 w-[450px] h-[350px] rounded-full bg-cyan-400/35 blur-[120px]" />
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-400/25 blur-[100px]" />
                        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-rose-500/30 blur-[110px]" />
                        <div className="absolute bottom-10 left-1/4 w-[350px] h-[250px] rounded-full bg-amber-400/25 blur-[90px]" />
                    </div>

                    {/* Text block */}
                    <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 gap-6 max-w-3xl mx-auto">
                        <Badge variant="secondary" className="rounded-sm text-xs font-medium">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Zaoszczędź 5 000–50 000 zł i 3 tygodnie pracy
                        </Badge>

                        <h1
                            id="hero-heading"
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
                        >
                            Branding Twojej firmy<br />
                            <span className="text-muted-foreground">gotowy w kilka minut.</span>
                        </h1>

                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                            BrandMaker to nie tylko generator logo. To Twoja cyfrowa Agencja
                            Brandingowa, która łączy potęgę AI z zasadami profesjonalnego
                            projektowania. Od pomysłu do BrandBooka podczas jednej sesji.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button size="lg" asChild className="rounded-sm">
                                <a href="#pricing">Rozpocznij →</a>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="rounded-sm">
                                <a href="#pricing">Zobacz cennik</a>
                            </Button>
                        </div>

                        {/* Trust signals */}
                        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center border border-border w-full max-w-sm bg-background/60 backdrop-blur-sm">
                            <div className="flex flex-col items-center justify-center text-center py-4">
                                <p className="text-lg font-bold tracking-tight">500+</p>
                                <p className="text-xs text-muted-foreground">Brandingów</p>
                            </div>
                            <Separator orientation="vertical" className="h-8" />
                            <div className="flex flex-col items-center justify-center text-center py-4">
                                <p className="text-lg font-bold tracking-tight">~15 min</p>
                                <p className="text-xs text-muted-foreground">Czas</p>
                            </div>
                            <Separator orientation="vertical" className="h-8" />
                            <div className="flex flex-col items-center justify-center text-center py-4">
                                <p className="text-lg font-bold tracking-tight">99 zł</p>
                                <p className="text-xs text-muted-foreground">Już od</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero image – padded, 16:9, no dividing line */}
                    <div className="relative z-10 px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8">
                        <div className="aspect-video w-full overflow-hidden rounded-sm">
                            <Image
                                src="/hero.png"
                                alt="BrandBook, logo i palety kolorów wygenerowane przez BrandMaker AI"
                                width={1920}
                                height={1080}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* ── FEATURES ─────────────────────────────────────────────────── */}
                <section
                    id="features"
                    aria-labelledby="features-heading"
                    className="border-b border-border"
                >
                    <div className="p-4 md:p-6 lg:p-8 border-b border-border">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">Funkcje</p>
                        <h2
                            id="features-heading"
                            className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-2xl"
                        >
                            Wszystko w jednym miejscu
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
                            Wyobraź sobie wyjątkową historię Twojej firmy. BrandMaker
                            wykorzystuje AI do generowania profesjonalnych BrandBooków, Logo i
                            Design Systemów.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {features.map((feature) => (
                            <article
                                key={feature.title}
                                className={[
                                    feature.span,
                                    "group border-b border-border",
                                    feature.lastInRow ? "md:border-r-0" : "border-r border-border",
                                    "p-4 md:p-6 lg:p-8 flex flex-col gap-4",
                                    "hover:bg-muted/30 transition-colors duration-200",
                                ].join(" ")}
                            >
                                <div className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-foreground transition-colors duration-200">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold tracking-tight mb-1.5">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
                <section
                    id="how-it-works"
                    aria-labelledby="how-heading"
                    className="border-b border-border"
                >
                    <div className="p-4 md:p-6 lg:p-8 border-b border-border">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">Proces</p>
                        <h2 id="how-heading" className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                            Jak to działa?
                        </h2>
                    </div>
                    <ol className="grid grid-cols-1 md:grid-cols-3">
                        {steps.map((step, idx) => (
                            <li
                                key={step.number}
                                className={[
                                    "flex flex-col gap-5 p-4 md:p-6 lg:p-8 border-b border-border",
                                    idx === steps.length - 1 ? "md:border-r-0" : "border-r border-border",
                                    "hover:bg-muted/30 transition-colors duration-200",
                                ].join(" ")}
                            >
                                <span className="text-4xl font-bold tracking-tight text-muted-foreground/40 leading-none select-none">
                                    {step.number}
                                </span>
                                <div>
                                    <h3 className="text-base font-semibold tracking-tight mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ── PRICING ──────────────────────────────────────────────────── */}
                <section
                    id="pricing"
                    aria-labelledby="pricing-heading"
                    className="border-b border-border"
                >
                    <div className="p-4 md:p-6 lg:p-8 border-b border-border">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium mb-3">Cennik</p>
                        <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                            Proste zasady
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
                            Płacisz tylko za to, czego używasz. Przejrzyste ceny dla każdego
                            biznesu. Kup pakiet tokenów i twórz profesjonalne brandingi bez
                            limitu czasowego.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {plans.map((plan, idx) => (
                            <article
                                key={plan.name}
                                className={[
                                    "flex flex-col gap-6 p-4 md:p-6 lg:p-8 border-b border-border",
                                    idx === plans.length - 1 ? "md:border-r-0" : "border-r border-border",
                                    plan.highlighted
                                        ? "bg-foreground text-background"
                                        : "hover:bg-muted/30 transition-colors duration-200",
                                ].join(" ")}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <p className={`text-[10px] uppercase tracking-widest font-medium mb-1 ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                                            {plan.plan}
                                        </p>
                                        <h3 className={`text-base font-semibold tracking-tight ${plan.highlighted ? "text-background" : ""}`}>
                                            {plan.name}
                                        </h3>
                                    </div>
                                    {"badge" in plan && plan.badge && (
                                        <span className="text-[10px] rounded-md uppercase tracking-widest font-semibold border border-background/40 text-background px-2 py-0.5">
                                            {plan.badge}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <p className={`text-4xl font-bold tracking-tight leading-none ${plan.highlighted ? "text-background" : ""}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`text-xs mt-1 ${plan.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                                        {plan.priceNote}
                                    </p>
                                </div>
                                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                                    {plan.description}
                                </p>
                                <ul className="flex flex-col gap-2 flex-1">
                                    {plan.features.map((feat) => (
                                        <li key={feat} className="flex items-start gap-2 text-sm">
                                            <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-background/70" : "text-muted-foreground"}`} />
                                            <span className={plan.highlighted ? "text-background/90" : ""}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    asChild
                                    variant={plan.highlighted ? "secondary" : "outline"}
                                    className={`w-full rounded-sm ${plan.highlighted ? "text-foreground font-medium" : ""}`}
                                >
                                    <a href={plan.href}>{plan.cta}</a>
                                </Button>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ── CTA STRIP ────────────────────────────────────────────────── */}
                <section
                    aria-label="Wywołanie do działania"
                    className="min-h-[30vh] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight max-w-lg">
                            Gotowy, by zbudować markę<br />na miarę swojej wizji?
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            Dołącz do setek przedsiębiorców, którzy wybrali BrandMaker.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                        <Button size="lg" asChild className="rounded-sm">
                            <a href="#pricing">Rozpocznij za darmo →</a>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="rounded-sm">
                            <a href="#pricing">Sprawdź cennik</a>
                        </Button>
                    </div>
                </section>
            </main>

            {/* ────────────────────────── FOOTER ───────────────────────────────── */}
            <footer className="border-t border-x border-border" aria-label="Stopka">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-b border-border">
                    <div className="border-b sm:border-b-0 sm:border-r border-border p-4 md:p-6 lg:p-8 flex flex-col gap-3 sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-7 h-7 rounded-md bg-foreground text-background text-xs font-bold">B</div>
                            <span className="text-sm font-semibold">BrandMaker</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed max-w-48">
                            Twoja cyfrowa Agencja Brandingowa. Od pomysłu do pełnego BrandBooka w kilka minut.
                        </p>
                    </div>
                    <nav aria-label="Nawigacja w stopce – Produkt" className="border-b sm:border-b-0 sm:border-r border-border p-4 md:p-6 lg:p-8">
                        <h3 className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-4">Produkt</h3>
                        <ul className="space-y-2">
                            {[{ label: "O nas", href: "#" }, { label: "Blog", href: "#" }, { label: "Kontakt", href: "#" }, { label: "Dokumentacja", href: "#" }].map((link) => (
                                <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <nav aria-label="Nawigacja w stopce – Prawne" className="border-b sm:border-b-0 sm:border-r border-border p-4 md:p-6 lg:p-8">
                        <h3 className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-4">Prawne</h3>
                        <ul className="space-y-2">
                            {[{ label: "Regulamin", href: "#" }, { label: "Polityka Prywatności", href: "#" }, { label: "Polityka Cookie", href: "#" }].map((link) => (
                                <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </nav>
                    <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-between gap-4">
                        <div>
                            <h3 className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground mb-4">Zacznij teraz</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">Pierwszy branding całkowicie za darmo. Bez karty kredytowej.</p>
                        </div>
                        <Button size="sm" asChild className="rounded-sm w-fit">
                            <a href="#pricing">Rozpocznij</a>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4 md:p-6 lg:p-8">
                    <p className="text-xs text-muted-foreground">© 2026 BrandMaker. Wszelkie prawa zastrzeżone.</p>
                    <p className="text-xs text-muted-foreground">Zbudowany z ♥ w Polsce</p>
                </div>
            </footer>

        </div>
    );
}
