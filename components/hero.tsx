import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-subtle"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Emoji or avatar */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 animate-float">
          <span className="text-5xl">✨</span>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
            Hi, I build data-driven AI systems ✨
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Applied Data Scientist & Machine Learning Engineer who loves turning complex problems into elegant, working
            solutions.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform duration-200 shadow-lg shadow-primary/25"
          >
            <Sparkles className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-card-foreground font-medium hover:scale-105 transition-transform duration-200 shadow-lg border-2 border-border"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
