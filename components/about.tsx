import { Card } from "@/components/ui/card"
import { Heart, Lightbulb, Wrench } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">A Bit About Me</h2>
          <p className="text-lg text-muted-foreground">Beyond the models and metrics</p>
        </div>

        <Card className="p-8 md:p-12 shadow-xl">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                I'm someone who gets genuinely excited about finding patterns in messy data and building things that
                actually work. What started as curiosity about "how Netflix knows what I want to watch" turned into a
                career solving real problems with machine learning.
              </p>

              <p className="text-lg leading-relaxed text-foreground">
                I don't just train models — I build complete systems: from data pipelines and feature engineering to
                deployment and monitoring. My favorite projects are the ones where I can work closely with teams to
                understand their pain points and create solutions that make their lives easier.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Curious</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Always learning new techniques and exploring creative approaches to problems
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto">
                  <Wrench className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Practical</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Focused on building robust systems that solve real problems, not just experiments
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-accent/50 flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-lg">Collaborative</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Love working with cross-functional teams to understand needs and deliver value
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
