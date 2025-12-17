export interface EducationItem {
  institution: string
  degree: string
  period: string
  highlights?: string[]
}

export const educationData: EducationItem[] = [
  {
    institution: "University of Zimbabwe",
    degree: "Bachelor of Science in Data Science and Systems",
    period: "2020 - 2024",
    highlights: [
      "Specialized in Machine Learning and Data Science",
      "Graduated with honors",
      "Relevant coursework: Statistics, Linear Algebra, Data Structures, Deep Learning, Database Systems",
    ],
  },
  
]

export function Education() {
  return (
    <section className="mb-20">
      <h2 className="text-xl font-medium mb-6 text-muted-foreground">Education</h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4">
            <div className="mb-2">
              <h3 className="text-lg font-medium">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.institution}</p>
              <p className="text-muted-foreground text-xs mt-1">{edu.period}</p>
            </div>
            {edu.highlights && (
              <ul className="space-y-2 text-sm text-muted-foreground">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

