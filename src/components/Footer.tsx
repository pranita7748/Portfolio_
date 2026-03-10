import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            whileHover={{ scale: 1.05 }}
          >
            &lt;dev /&gt;
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            Pranita Patil
          </p>
        </div>
      </div>
    </footer>
  );
};
