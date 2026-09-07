"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/animated-section";
import {
  MessageCircle,
  Mail,
  AtSign,
  ChevronRight,
  ArrowDown,
  CheckCircle,
  ImageOff,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us instantly",
    action: "https://wa.me/1234567890",
    color: "bg-[#25D366] text-white",
  },
  {
    icon: Mail,
    title: "Email",
    description: "hello@example.com",
    action: "mailto:hello@example.com",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: AtSign,
    title: "Instagram",
    description: "@handmadegifts",
    action: "https://instagram.com/handmadegifts",
    color: "bg-gradient-to-br from-purple-500 to-pink-500 text-white",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      preferredContact: "email",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <div className="flex flex-col items-center gap-3 text-muted-foreground/50">
              <ImageOff className="h-20 w-20" strokeWidth={1} />
              <span className="text-sm font-medium">Contact Hero Image</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/90">
              Have a question or want to place an inquiry? We&apos;d love to hear
              from you. Reach out and we&apos;ll respond within 24 hours.
            </p>
            <a href="#contact-form">
              <Button size="lg" className="bg-white text-foreground hover:bg-white/90">
                Send a Message
                <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <div id="contact-form" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <AnimatedSection direction="left">
            <h2 className="mb-6 text-xl font-bold text-foreground">
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div className="border border-success/20 bg-success/5 p-6 text-center">
                <CheckCircle className="mx-auto mb-4 h-12 w-12 text-success" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <Button
                  variant="secondary"
                  className="mt-4"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    label="Phone (Optional)"
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                  <Select
                    label="Preferred Contact Method"
                    options={[
                      { value: "email", label: "Email" },
                      { value: "whatsapp", label: "WhatsApp" },
                      { value: "phone", label: "Phone" },
                    ]}
                    value={formData.preferredContact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredContact: e.target.value,
                      })
                    }
                  />
                </div>

                <Input
                  label="Subject"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                <Textarea
                  label="Message"
                  placeholder="Tell us about your inquiry, customization requests, or any questions..."
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  loading={isSubmitting}
                >
                  Send Message
                </Button>
              </form>
            )}
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection direction="right" className="space-y-8">
            <div>
              <h2 className="mb-6 text-xl font-bold text-foreground">
                Contact Methods
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.action}
                      target={method.action.startsWith("http") ? "_blank" : undefined}
                      rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 border border-border/50 bg-card p-4 transition-all duration-300 hover:shadow-lg hover:border-border"
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${method.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Business Hours
              </h2>
              <div className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-muted-foreground">Closed</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  * WhatsApp inquiries are responded to within 24 hours
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion className="w-full">
                {faqs.slice(0, 4).map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-sm font-medium text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
