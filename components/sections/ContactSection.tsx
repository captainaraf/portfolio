"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Facebook,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "shaidozzamanaraf21@gmail.com",
    href: "mailto:shaidozzamanaraf21@gmail.com",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Nope you are not getting this",
    href: null,
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Somewhere in Bangladesh",
    href: null,
    color: "from-blue-500 to-blue-600",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/captainaraf",
    color: "hover:bg-slate-800 dark:hover:bg-slate-200",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://web.facebook.com/shaidozzamanaraf/",
    color: "hover:bg-blue-600",
  },
  {
    icon: () => <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />,
    label: "X",
    href: "https://x.com/captainaraf",
    color: "hover:bg-black",
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-jetbrains text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I know I am a very interesting person. If you think the same, then
            here is how to find me.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactDetails.map((contact, index) => {
              const Icon = contact.icon;
              const delay = index * 150;

              return (
                <Card
                  key={index}
                  className={`cursor-pointer group hover:shadow-xl transition-all duration-500 border-2 hover:border-blue-400 dark:hover:border-blue-600 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  <CardContent className="pt-6">
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="flex flex-col items-center text-center gap-4 group-hover:scale-105 transition-transform duration-300"
                      >
                        <div
                          className={`p-4 rounded-full bg-gradient-to-br ${contact.color} text-white shadow-lg`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-jetbrains font-semibold text-slate-900 dark:text-slate-100 mb-1">
                            {contact.label}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center text-center gap-4">
                        <div
                          className={`p-4 rounded-full bg-gradient-to-br ${contact.color} text-white shadow-lg`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-jetbrains font-semibold text-slate-900 dark:text-slate-100 mb-1">
                            {contact.label}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="text-center space-y-6">
                  <h3 className="font-jetbrains text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Find Me Online
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color}`}
                          aria-label={social.label}
                        >
                          {typeof Icon === "function" ? (
                            <Icon />
                          ) : (
                            // @ts-ignore
                            <Icon className="w-5 h-5" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-slate-600 dark:text-slate-400 font-jetbrains">
            "I choose to run towards my problems, and not away from them.
            Because that's what heroes do."
          </p>
          <p className="text-slate-600 dark:text-slate-400 font-jetbrains">
            - Thor
          </p>
        </div>
      </div>
    </section>
  );
}
