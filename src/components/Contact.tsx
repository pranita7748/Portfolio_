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

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: ContactFormValues) {
    const res = await postContact(values);
    if (res.success) {
      toast.success("Message sent!", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast.error("Couldn't send message", { description: res.error });
    }
  }

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-2">06. Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I'm actively looking for internship opportunities and would love to
            hear from you. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-6">
              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    your.email@example.com
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
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
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
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
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Your City, India</p>
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
