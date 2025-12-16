import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, FileText } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/yourname",
    href: "https://linkedin.com",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@yourusername",
    href: "https://github.com",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "Download PDF",
    href: "#",
    color: "hover:bg-secondary hover:text-secondary-foreground",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <span className="text-3xl">👋</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Let's Connect!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to chat about ML projects, collaboration opportunities, or just talk about interesting
            data problems.
          </p>
        </div>

        <Card className="p-8 shadow-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`flex items-center gap-4 p-6 rounded-2xl bg-muted/50 transition-all duration-200 hover:scale-[1.02] ${link.color} group`}
              >
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-muted-foreground group-hover:text-inherit transition-colors">
                    {link.label}
                  </div>
                  <div className="text-sm font-medium truncate">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Currently open to new opportunities and interesting projects ✨
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
