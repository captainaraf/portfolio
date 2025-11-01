"use client";

import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PippaQuiz from "@/public/assets/venture-icons/pippaquiz.png";
import Jiggasha from "@/public/assets/venture-icons/jiggasha.png";
import N4CM from "@/public/assets/venture-icons/n4cm.png";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { getVentureImages } from "@/lib/loadVentureImages";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Venture = {
  icon?: any;
  role: string;
  key: string;
  organization: string;
  subheading?: string;
  description: string;
  url?: string;
  badge?: string;
  buttonText?: string;
  blocked?: boolean;
  type?: "Website" | "Mobile App" | "SaaS" | "Library" | string;
  notes?: string; // <-- added optional notes field
};

const ventures: Venture[] = [
  {
    icon: PippaQuiz,
    role: "Co-Creator, Lead Developer and UI/UX Designer",
    key: "pippaquiz",
    organization: "PippaQuiz",
    subheading: "Subsidiary of Dead Mans Tech",
    description:
      "An AI powered software service that can instantly generate quizzes from any study material, reducing the time and effort required to create quizzes manually.",
    url: "https://pippaquiz.example", // replace with real URL
    badge: "Not Launched Yet",
    buttonText: "Visit Site",
    blocked: true,
    type: "Website",
    notes:
      "I am treating this as a side business, the development is finished. We are waiting for some external factors to launch.",
  },
  {
    role: "Co-Creator, Lead Developer and UI/UX Designer",
    key: "nyonnlearn",
    organization: "Nyonn Learn",
    subheading: "A companion app for NCTB Students",
    description:
      "An AI powered study companion for NCTB students, that can keep track of syllabus, generate intelligent study plans and provide interactive learning experience.",
    url: "https://pippaquiz.example", // replace with real URL
    badge: "Not Launched Yet",
    buttonText: "Visit Site",
    blocked: true,
    type: "Mobile App",
    notes:
      "The development is finished, we are waiting for Google Playstore verification to launch.",
  },
  {
    icon: Jiggasha,
    role: "Creator and UI/UX Designer",
    key: "jiggasha",
    organization: "Jiggasha",
    subheading: "A study helper for NCTB Students",
    description:
      "You find a very interesting question, and realize you need to practice more similar questions. But there are no more such questions in the question bank. What do you do? You come to Jiggasha, and our AI will generate similar questions for you to practice.",
    url: "https://expo.dev/accounts/shaidozzamanaraf/projects/jiggasha/builds/89849e30-0929-4175-b77b-abe7de5b97e4", // replace with real URL
    badge: "Beta Launched",
    buttonText: "Download Beta Version",
    blocked: false,
    type: "Mobile App",
    notes:
      "This is the beta version of our MVP with bare minimum features, not in Google playstore yet.",
  },
  {
    icon: N4CM,
    role: "Frontend and Backend Engineer, UI/UX Designer",
    key: "n4cm",
    organization: "NutritionCare4Mom",
    subheading: "A Professional Work for a Client",
    description:
      "A website my friend and I developed together for a client. Here mothers can find nutritional help content, schedule appointments with doctors, and most importantly, there is an AI chatbot to help them with their queries. It also has English to Bangla switching, an admin panel, and an amazing blog system.",
    url: "https://nutritioncare4mom.com/",
    badge: "Professional Work",
    buttonText: "Visit Site",
    blocked: false,
    type: "Website",
    notes:
      "Successfully finished the development of the project. The client will launch it soon. I am not entirely sure if it is live right now. The data visible in the images are dummy data.",
  },
  {
    role: "Creator",
    key: "shippingcostpredictor",
    organization: "Shipping Cost Predictor",
    subheading: "A Machine Learning Model for Predicting Shipping Costs",
    description:
      "A machine learning model that can predict the shipping cost required for a package based on relevant information such as distance, delivery style, package volume, etc.",
    url: "https://github.com/captainaraf/Shipping-Cost-Predictor", // replace with real URL
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    notes: "It actually performs pretty decent.",
  },
  {
    role: "Builder",
    key: "sortinghat",
    organization: "The Hogwarts Sorting Hat",
    subheading:
      "A Machine Learning Model for Sorting People into Hogwarts Houses",
    description:
      "A machine learning model that can predict the required cost of shipping a package based on relevant information such as distant, delivery style, package volume, etc.",
    url: "https://github.com/captainaraf/Shipping-Cost-Predictor", // replace with real URL
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    notes: "It actually performs pretty decent.",
  },
  {
    role: "Builder",
    key: "sortinghat",
    organization: "The Hogwarts Sorting Hat",
    subheading:
      "A Machine Learning Model for Sorting People into Hogwarts Houses",
    description:
      "A machine learning model that can sort people into Hogwarts houses based on their personality traits and preferences. It uses a custom algorithm to analyze the input data and predict the most suitable house.",
    url: "https://github.com/captainaraf/the-sorting-hat", // replace with real URL
    buttonText: "View Source Code",
    blocked: false,
    type: "Machine Learning Model",
    notes: "It actually performs pretty decent.",
  },
  {
    role: "Builder",
    key: "ciphersherlock",
    organization: "Cipher Sherlock",
    subheading: "An API that can solve ciphers",
    description:
      "An API that can solve various types of ciphers, including Caesar, Vigenere, Atbash, and more. It can also detect the type of cipher used in a given text. It is built with FastAPI and uses a custom algorithm for solving ciphers.",
    url: "https://github.com/captainaraf/ciphersherlock", // replace with real URL
    buttonText: "View Source Code",
    blocked: false,
    type: "API",
    notes:
      "It can be used as a library as well, for encrypting and decrypting texts.",
  },
];

export function VenturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  // intro animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            ventures.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Get images directly when opening modal
  const currentImages =
    selectedIndex !== null ? getVentureImages(ventures[selectedIndex].key) : [];

  function openModalFor(index: number) {
    setSelectedIndex(index);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    // Reset lightbox state when closing modal
    setLightboxOpen(false);
    setLightboxIndex(0);
  }

  // Replace the gallery section with this updated version
  const gallerySection = (
    <div className="space-y-4">
      {/* Add gallery heading */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Gallery
      </h3>

      {currentImages.length === 0 ? (
        <div className="h-48 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-center text-sm text-slate-500">
          No images found
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[600px] pr-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {currentImages.map((src, idx) => (
              <button
                key={src}
                onClick={() => {
                  setLightboxIndex(idx);
                  setLightboxOpen(true);
                }}
                className="relative w-full h-[300px] rounded-lg overflow-hidden group transform transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <Image
                  src={src}
                  alt={`${
                    ventures[selectedIndex ?? 0].organization
                  } screenshot ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </button>
            ))}
          </div>

          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={currentImages.map((src) => ({ src }))}
            render={{
              buttonPrev: currentImages.length <= 1 ? () => null : undefined,
              buttonNext: currentImages.length <= 1 ? () => null : undefined,
            }}
            styles={{
              container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
              root: { "--yarl__color_backdrop": "rgba(0, 0, 0, 0.9)" },
              button: { cursor: "pointer" }, // Add cursor pointer to all buttons including close
            }}
            animation={{ fade: 300 }}
            controller={{
              closeOnBackdropClick: true,
              closeOnPullDown: true,
            }}
          />
        </>
      )}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-jetbrains text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Ventures
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Projects and startups I've built or helped build. Click on a card to
            view details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => {
            const icon = venture.icon;
            const isVisible = visibleCards.includes(index);

            return (
              // wrapper made relative + overflow-visible so badges positioned outside Card are not clipped
              <button
                key={venture.key}
                onClick={() => openModalFor(index)}
                className="group block text-left relative overflow-visible"
                aria-haspopup="dialog"
              >
                {/* top-right badge (e.g. "Not Launched Yet") placed outside Card to avoid clipping */}
                {venture.badge && (
                  <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-red-600 to-red-400 text-white text-sm px-3 py-1 rounded-full shadow-lg transform rotate-12 font-medium">
                    {venture.badge}
                  </div>
                )}

                <Card
                  className={`relative cursor-pointer transition-all duration-500 border-2 hover:border-blue-400 dark:hover:border-blue-600 overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  {/* NOTE: top arrow removed. Card is now vertical (image + text stacked). */}
                  <CardHeader>
                    <div className="flex flex-col items-center gap-4 text-center px-4 pt-6">
                      {icon ? (
                        <Image
                          src={icon}
                          alt={venture.organization}
                          className="w-32 h-16 object-contain rounded-lg"
                        />
                      ) : (
                        <div className="w-32 h-16 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          <span className="text-sm font-medium">No Icon</span>
                        </div>
                      )}
                      <div>
                        <CardTitle className="font-jetbrains text-xl mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {venture.role}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {venture.organization}
                        </CardDescription>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-jetbrains">
                          {venture.subheading}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 flex flex-col">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {venture.description}
                    </p>

                    {/* bottom area: colorful type tag placed at the bottom-right */}
                    <div className="mt-4 flex items-center justify-end">
                      {venture.type && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-400">
                          {venture.type}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>

        <p className="text-center mt-12 text-slate-600 dark:text-slate-400">
          These are just some shortlisted projects. Feel free to contact me to
          learn about more of my work.
        </p>
      </div>

      {/* Modal (shadcn dialog) */}
      <Dialog
        open={open}
        onOpenChange={(val) => {
          if (!val) closeModal();
          setOpen(val);
        }}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>
              {selectedIndex !== null ? ventures[selectedIndex].role : ""}
            </DialogTitle>
            <DialogDescription>
              {selectedIndex !== null
                ? ventures[selectedIndex].organization
                : ""}
            </DialogDescription>
          </DialogHeader>

          {/* badge in modal top-right */}
          {selectedIndex !== null && ventures[selectedIndex].badge && (
            <div className="absolute top-6 right-12 bg-gradient-to-r from-red-600 to-red-400 text-white text-sm px-3 py-1 rounded-full shadow-lg transform rotate-6 font-medium">
              {ventures[selectedIndex].badge}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-4">
              {/* show icon in modal when available */}
              {selectedIndex !== null && ventures[selectedIndex].icon && (
                <div className="flex items-center justify-center">
                  <Image
                    src={ventures[selectedIndex].icon}
                    alt={ventures[selectedIndex].organization}
                    className="w-36 h-20 object-contain"
                  />
                </div>
              )}

              <p className="text-slate-700 dark:text-slate-300">
                {selectedIndex !== null && ventures[selectedIndex].description}
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 font-bold">
                {selectedIndex !== null && ventures[selectedIndex].subheading}
              </p>

              {/* notes / callout bubble */}
              {selectedIndex !== null && ventures[selectedIndex].notes && (
                <div className="mt-2 bg-slate-50 dark:bg-slate-900 border-l-4 border-blue-500 dark:border-blue-400 p-4 rounded-md shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 dark:text-blue-400 mt-0.5">
                      💬
                    </div>
                    <div>
                      <p className="text-sm text-slate-800 dark:text-slate-200">
                        {ventures[selectedIndex].notes}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 mt-4">
                {selectedIndex !== null && ventures[selectedIndex].blocked ? (
                  <Button disabled>
                    {ventures[selectedIndex].buttonText || "Visit"}
                  </Button>
                ) : (
                  <Button asChild>
                    <a
                      href={
                        selectedIndex !== null
                          ? ventures[selectedIndex].url
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedIndex !== null
                        ? ventures[selectedIndex].buttonText || "Visit"
                        : "Visit"}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Replace the right column with our new gallery section */}
            <div className="md:border-l md:pl-6 dark:border-gray-800">
              {gallerySection}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
