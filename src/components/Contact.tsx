import { Mail, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { postContact } from "@/lib/api";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(5000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClassName =
  "w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all";
const textareaClassName = `${inputClassName} resize-none min-h-[120px]`;
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || "";
const githubUrl = import.meta.env.VITE_GITHUB_URL || "";
const contactLocation = import.meta.env.VITE_CONTACT_LOCATION || "India";

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ContactFormValues) {
    const payload = contactSchema.parse(values) as Parameters<typeof postContact>[0];
    const res = await postContact(payload);

    if (res.success === false) {
      toast.error("Couldn't send message", { description: res.error });
      return;
    }

    if (res.delivered) {
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } else {
      toast.warning("Message saved, but email alert is off", {
        description: "Set CONTACT_INBOX and SMTP_* on server to receive inbox notifications.",
      });
    }
    form.reset();
  }

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <AnimatedSection className="mb-12 text-center md:mb-16">
          <p className="font-mono text-primary text-sm mb-2">06. Contact</p>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base md:text-lg">
            I'm actively looking for internship opportunities and would love to
            hear from you. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-4 sm:space-y-6">
              <motion.a
                href={contactEmail ? `mailto:${contactEmail}` : "#"}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 sm:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <span className="break-all text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base">
                    {contactEmail || "Add VITE_CONTACT_EMAIL in .env"}
                  </span>
                </div>
              </motion.a>

              <motion.a
                href={linkedinUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 sm:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <span className="text-muted-foreground">
                    Connect with me
                  </span>
                </div>
              </motion.a>

              <motion.a
                href={githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/50 sm:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">GitHub</h4>
                  <span className="text-muted-foreground">
                    Check out my code
                  </span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:gap-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">{contactLocation}</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.3}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className={inputClassName}
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className={inputClassName}
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          rows={5}
                          className={textareaClassName}
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <motion.div
                  whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                  whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
