import { Code2, Database, Rocket, GitBranch, LineChart, FlaskConical } from "lucide-react"

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "SQL", "R", "TypeScript"],
  },
  {
    icon: LineChart,
    title: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Hugging Face"],
  },
  {
    icon: Database,
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "Pandas", "Apache Spark", "dbt"],
  },
  {
    icon: Rocket,
    title: "Deployment",
    skills: ["Docker", "Kubernetes", "AWS", "FastAPI", "REST APIs"],
  },
  {
    icon: GitBranch,
    title: "MLOps",
    skills: ["MLflow", "Airflow", "GitHub Actions", "DVC"],
  },
  {
    icon: FlaskConical,
    title: "Research",
    skills: ["A/B Testing", "Experimentation", "Statistical Analysis"],
  },
]

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
