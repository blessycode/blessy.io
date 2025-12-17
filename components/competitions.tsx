export interface CompetitionItem {
  name: string
  organizer: string
  date: string
  field: string
  position?: string
  participants?: number
  tools: string[]
  description: string
}

export const competitionsData: CompetitionItem[] = [
  {
    name: "Claxon Data Science Challenge: Loan Default Risk Prediction",
    organizer: "Claxon Actuaries",
    date: "2024",
    field: "Data Science / Machine Learning / AI",
    position: "5th Place in Zimbabwe",
    participants: 140,
    tools: ["Python", "Scikit-learn","XGBoost","FastAPI","Imbalanced-learn", "Pandas"],
    description: "Developed an end-to-end credit risk prediction system using machine learning, including data preprocessing, PD modeling, API deployment with FastAPI, and data drift monitoring.",
  },
]

export function Competitions() {
  return (
    <section className="mb-20">
      <h2 className="text-xl font-medium mb-4 text-muted-foreground">Hackathons & Competitions</h2>
      <p className="text-muted-foreground mb-6 text-pretty max-w-xl">
        Participating in hackathons and competitions has been a great way to push my limits, learn new technologies, and solve real-world problems under time constraints.
      </p>
      <div className="space-y-4">
        {competitionsData.map((competition, index) => (
          <div key={index} className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all glow-card">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{competition.name}</h3>
              <span className="text-sm text-muted-foreground ml-4">{competition.date}</span>
            </div>
            <div className="space-y-1 mb-3 text-sm text-muted-foreground">
              <p>{competition.organizer}</p>
              <p>{competition.field}</p>
              {competition.position && (
                <p className="text-primary font-medium">Position: {competition.position}</p>
              )}
              {competition.participants && (
                <p>Participants: {competition.participants.toLocaleString()}</p>
              )}
            </div>
            <p className="text-muted-foreground mb-4 text-sm text-pretty leading-relaxed">{competition.description}</p>
            <div className="flex flex-wrap gap-2">
              {competition.tools.map((tool) => (
                <span key={tool} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

