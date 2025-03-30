
import React from "react";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SocialLinks = () => {
  // Social media links with correct URLs
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/africa-peace-initiative-api/",
      icon: <Linkedin size={20} />,
      color: "hover:bg-[#0077B5]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/africapeaceinitiative",
      icon: <Instagram size={20} />,
      color: "hover:bg-gradient-to-tr from-[#f79334] via-[#da2e7d] to-[#6b54c6]",
    },
    {
      name: "Twitter",
      url: "https://x.com/peaceful_africa",
      icon: <Twitter size={20} />,
      color: "hover:bg-[#1DA1F2]",
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61574062010797",
      icon: <Facebook size={20} />,
      color: "hover:bg-[#1877F2]",
    },
  ];

  return (
    <div className="flex space-x-3" aria-label="Follow us on social media">
      <TooltipProvider delayDuration={300}>
        {socialLinks.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-white/10 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-api-gold focus:ring-offset-2 focus:ring-offset-api-darkgreen`}
                aria-label={`Visit our ${social.name} page`}
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Follow us on {social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default SocialLinks;
