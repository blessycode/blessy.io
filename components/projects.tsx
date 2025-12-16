import { Card } from "@/components/ui/card"
import { Brain, TrendingUp, MessageSquare, ImageIcon } from "lucide-react"

const projects = [
  {
    icon: Brain,
    title: "Customer Churn Predictor",
    problem: "Company losing 20% of customers monthly without understanding why",
    approach: "Built end-to-end ML pipeline with feature engineering and ensemble models",
    tools: ["Python", "Scikit-learn", "FastAPI", "Docker"],
    outcome: "Achieved 87% accuracy, reduced churn by 15% through proactive interventions",
    color: "from-blue-400/20 to-cyan-400/20",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Demand Forecaster",
    problem: "Inventory management issues causing stockouts and overstock",
    approach: "Time series modeling with LSTM networks and automated retraining",
    tools: ["PyTorch", "MLflow", "Kubernetes", "PostgreSQL"],
    outcome: "Reduced inventory costs by 30%, improved forecast accuracy to 92%",
    color: "from-purple-400/20 to-pink-400/20",
  },
  {
    icon: MessageSquare,
    title: "Smart Document Assistant",
    problem: "Teams spending hours searching through technical documentation",
    approach: "RAG system with semantic search and LLM-powered answers",
    tools: ["LangChain", "Pinecone", "OpenAI", "Streamlit"],
    outcome: "Cut search time by 70%, deployed for 500+ users company-wide",
    color: "from-green-400/20 to-emerald-400/20",
  },
  {
    icon: ImageIcon,
    title: "Visual Quality Inspector",
    problem: "Manual inspection missing 15% of product defects",
    approach: "Computer vision model with transfer learning and edge deployment",
    tools: ["TensorFlow", "YOLO", "OpenCV", "AWS"],
    outcome: "99.2% defect detection rate, processing 1000+ images per minute",
    color: "from-orange-400/20 to-yellow-400/20",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Real Projects, Real Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building end-to-end ML systems that solve actual business problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
              >
                <project.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-muted-foreground">Problem:</span>
                  <p className="text-foreground leading-relaxed mt-1">{project.problem}</p>
                </div>

                <div>
                  <span className="font-semibold text-muted-foreground">Approach:</span>
                  <p className="text-foreground leading-relaxed mt-1">{project.approach}</p>
                </div>

                <div>
                  <span className="font-semibold text-muted-foreground">Tools:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="font-semibold text-primary">Outcome:</span>
                  <p className="text-foreground leading-relaxed mt-1">{project.outcome}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
