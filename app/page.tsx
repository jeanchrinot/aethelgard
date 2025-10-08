import type { Metadata } from "next"
import Header from "@/components/header"
import { Facebook, Instagram, Twitter } from "lucide-react"
import React from "react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Aethelgard: Echoes of the Elder Kings",
  description:
    "In a land scarred by ancient wars and sleeping magic, a new shadow stirs. Will you answer the call?",
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

const galleryImages = [
  {
    url: "/images/1.png",
    description: "Ancient temple glowing with magic as the Elder Rings awaken.",
  },
  {
    url: "/images/2.png",
    description: "Medieval fantasy city of Aethelgard bathed in sunset light.",
  },
  {
    url: "/images/3.png",
    description: "Dwarven forge deep underground glowing with molten light.",
  },
  {
    url: "/images/4.png",
    description: "Enchanted forest where elves weave threads of natural magic.",
  },
  {
    url: "/images/5.png",
    description: "Camp of wanderers among ruined stone arches and torchlight.",
  },
  {
    url: "/images/6.png",
    description:
      "Crumbling statues under a crimson sky as magic reshapes the land.",
  },
  {
    url: "/images/7.png",
    description:
      "Traveler explores an ancient tomb lit by a single glowing lantern.",
  },
  {
    url: "/images/8.png",
    description:
      "Ruins and nature reborn as streams of magic return to the world.",
  },
]

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border-2 border-stone-700 group"
          >
            <Image
              src={image.url}
              alt={image.description}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              loading="lazy"
              width={1024}
              height={1024}
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
