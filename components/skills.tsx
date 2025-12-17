import { Code2, Database, Rocket, GitBranch, LineChart, FlaskConical } from "lucide-react"

export const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "SQL", "R", "TypeScript", "JavaScript"],
  },
  {
    icon: LineChart,
    title: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Hugging Face"],
  },
  {
    icon: Database,
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "Pandas","Numpy","Apache Spark", "dbt"],
  },
  {
    icon: Rocket,
    title: "Deployment",
    skills: ["Docker", "Azure", "FastAPI", "REST APIs", "Django", "Flask"],
  },
  {
    icon: GitBranch,
    title: "MLOps",
    skills: ["MLflow", "Airflow"]
  },
  {
    icon: FlaskConical,
    title: "Research",
    skills: ["Latex", "Predictive Analytics", "Statistical Analysis"],
  },
]

// Flat tools list for use in `app/page.tsx` (derived from categories to avoid duplication)
export const toolsList = (() => {
  const seen = new Set<string>()
  const ordered: string[] = []
  for (const category of skillCategories) {
    for (const skill of category.skills) {
      if (seen.has(skill)) continue
      seen.add(skill)
      ordered.push(skill)
    }
  }
  return ordered
})()

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A toolkit for building robust, production-ready ML systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-border/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
