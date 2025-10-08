"use client" // Add this directive for useState and other client-side hooks

import { Facebook, Instagram, Twitter } from "lucide-react"
import React, { useState } from "react"

// --- SVG Icons for a more thematic feel ---
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

const SocialIcon = ({ path, url }: { path: string; url: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-stone-400 hover:text-amber-400 transition-colors duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d={path} />
    </svg>
  </a>
)

// --- Main Components ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Lore", href: "#lore" },
    { name: "Factions", href: "#factions" },
    { name: "Gallery", href: "#gallery" },
    { name: "Chronicles", href: "#chronicles" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/30 backdrop-blur-sm shadow-lg shadow-black/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-3xl font-cinzel font-bold text-amber-300 tracking-wider"
          style={{ textShadow: "0 0 10px rgba(252, 211, 77, 0.7)" }}
        >
          AETHELGARD
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-300 hover:text-amber-400 font-merriweather text-lg transition-colors duration-300 border-b-2 border-transparent hover:border-amber-400/50 pb-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#preorder"
          className="hidden md:block bg-amber-600/80 text-white font-bold py-2 px-6 rounded-sm border-2 border-amber-500 hover:bg-amber-500 transition-all duration-300 shadow-md hover:shadow-amber-400/20"
        >
          Pre-order
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-300 hover:text-amber-400"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-black/90 backdrop-blur-md`}
      >
        <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-amber-400 font-merriweather text-lg transition-colors duration-300 py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#preorder"
            onClick={() => setIsOpen(false)}
            className="bg-amber-600/80 text-white font-bold mt-4 py-2 px-8 rounded-sm border-2 border-amber-500 hover:bg-amber-500 transition-all duration-300 shadow-md"
          >
            Pre-order Now
          </a>
        </nav>
      </div>
    </header>
  )
}

const HeroSection = () => (
  <section
    className="h-screen w-full relative flex items-center justify-center text-white"
    style={{
      // backgroundImage: `url('https://placehold.co/1920x1080/0a0a0a/eab308?text=Epic+Fantasy+Landscape')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/60 vignette"></div>
    <div className="relative z-10 text-center flex flex-col items-center px-4">
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-extrabold tracking-wider"
        style={{ textShadow: "0 0 20px rgba(0, 0, 0, 0.8)" }}
      >
        Echoes of the Elder Kings
      </h1>
      <p
        className="mt-6 text-lg md:text-xl max-w-2xl text-stone-300 font-merriweather leading-relaxed"
        style={{ textShadow: "0 1px 5px rgba(0, 0, 0, 0.9)" }}
      >
        In a land scarred by ancient wars and sleeping magic, a new shadow
        stirs. The fate of Aethelgard rests upon the shoulders of heroes yet
        unknown. Will you answer the call?
      </p>
      <a
        href="#preorder"
        className="mt-12 text-xl font-bold py-4 px-10 rounded-sm border-4 border-amber-500/50 bg-amber-600/20 hover:bg-amber-500/40 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-400/20 backdrop-blur-sm"
      >
        Forge Your Legacy
      </a>
    </div>
  </section>
)

const LoreSection = () => (
  <section
    id="lore"
    className="py-20 bg-stone-900 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://www.transparenttextures.com/patterns/old-wall.png')`,
    }}
  >
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-cinzel text-amber-300 mb-4">
        The Lore of Aethelgard
      </h2>
      <div className="w-24 h-1 bg-amber-500/50 mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto text-stone-300 font-merriweather text-lg leading-loose space-y-6 bg-black/30 p-8 rounded-lg shadow-2xl border border-stone-700">
        <p>
          Long before the age of Men, the Elder Kings reigned, wielding powers
          that shaped mountains and commanded seas. They forged the Celestial
          Rings, artifacts of immense power that maintained the balance of the
          realms. But their pride was their undoing. In a cataclysmic event
          known as the Sundering, their empire fell to ruin, and the Rings were
          lost to the annals of time.
        </p>
        <p>
          Now, millennia later, the world has forgotten the true history,
          remembering it only as myth. But the artifacts of the Elder Kings are
          stirring from their slumber, and dark forces, ancient and malevolent,
          seek to claim their power. Whispers from forgotten tombs and desolate
          peaks speak of a rising darkness, a threat that will consume all if
          the lost legacy of the Elder Kings is not reclaimed.
        </p>
      </div>
    </div>
  </section>
)

const FactionCard = ({
  name,
  description,
  crest,
}: {
  name: string
  description: string
  crest: string
}) => (
  <div className="bg-stone-800/50 border-2 border-stone-700 rounded-lg p-6 text-center flex flex-col items-center hover:bg-stone-700/50 hover:border-amber-600/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg">
    <img
      src={crest}
      alt={`${name} crest`}
      className="w-24 h-24 mb-4 object-contain"
    />
    <h3 className="text-2xl font-cinzel text-amber-400 mb-2">{name}</h3>
    <p className="text-stone-400 font-merriweather leading-relaxed flex-grow">
      {description}
    </p>
  </div>
)

const FactionsSection = () => (
  <section id="factions" className="py-20 bg-black">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-cinzel text-amber-300 text-center mb-4">
        The Factions
      </h2>
      <div className="w-24 h-1 bg-amber-500/50 mx-auto mb-12"></div>
      <div className="grid md:grid-cols-3 gap-8">
        <FactionCard
          name="Ironclad Wardens"
          description="Descendants of mountain folk, master artisans and unyielding warriors. They guard the ancient holds, seeking to reclaim the lost forges of the Elder Kings."
          crest="https://placehold.co/100x100/331800/eab308?text=Warden+Crest"
        />
        <FactionCard
          name="Sylvan Weavers"
          description="Elusive and wise, they are attuned to the natural magic of the world. They inhabit the ancient forests, protecting the balance of life from encroaching shadows."
          crest="https://placehold.co/100x100/0c2918/eab308?text=Weaver+Crest"
        />
        <FactionCard
          name="Rogue Concord"
          description="A loose alliance of humans from fallen kingdoms. Survivors and pragmatists, they thrive in the ruins of the old world, their skill and adaptability being their greatest assets."
          crest="https://placehold.co/100x100/400a0a/eab308?text=Concord+Crest"
        />
      </div>
    </div>
  </section>
)

const GallerySection = () => (
  <section
    id="gallery"
    className="py-20 bg-stone-900 bg-cover bg-center"
    style={{
      backgroundImage: `url('https://www.transparenttextures.com/patterns/rocky-wall.png')`,
    }}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-cinzel text-amber-300 text-center mb-4">
        Whispers of the World
      </h2>
      <div className="w-24 h-1 bg-amber-500/50 mx-auto mb-12"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border-2 border-stone-700 group"
          >
            <img
              src={`https://placehold.co/600x400/1c1917/eab308?text=Scene+${
                index + 1
              }`}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer id="preorder" className="bg-black py-12">
    <div className="container mx-auto px-6 text-center text-stone-400">
      <h2 className="text-3xl md:text-4xl font-cinzel text-amber-300 mb-6">
        The Saga Awaits
      </h2>
      <p className="font-merriweather mb-8 max-w-2xl mx-auto">
        Pre-order now to receive exclusive in-game items and be among the first
        to walk the lands of Aethelgard.
      </p>
      <a
        href="#"
        className="bg-amber-600 text-white font-bold py-3 px-12 rounded-sm border-2 border-amber-500 hover:bg-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-400/20 text-lg"
      >
        Claim Your Place
      </a>
      <div className="mt-12 flex justify-center space-x-6">
        {/* Placeholder paths for social icons */}
        <a
          href="#"
          className="flex size-10 bg-white justify-center items-center rounded-full text-black"
        >
          <Facebook className="size-4" />
        </a>
        <a
          href="#"
          className="flex size-10 bg-white justify-center items-center rounded-full text-black"
        >
          <Instagram className="size-4" />
        </a>

        <a
          href="#"
          className="flex size-10 bg-white justify-center items-center rounded-full text-black"
        >
          <Twitter className="size-4" />
        </a>
      </div>
      <div className="mt-12 border-t border-stone-700 pt-8">
        <p className="text-sm font-merriweather">
          &copy; {new Date().getFullYear()} Aethelgard Studios. All Rights
          Reserved. The world is fictional. The legend is yours to write.
        </p>
      </div>
    </div>
  </footer>
)

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LoreSection />
        <FactionsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
