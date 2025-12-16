export default function WorkItemComponent({
  company,
  role,
  period,
  highlights,
}: {
  company: string
  role: string
  period: string
  highlights: string[]
}) {
  return (
    <div className="border-l-2 border-primary/30 pl-4">
      <div className="mb-2">
        <h3 className="text-lg font-medium">{role}</h3>
        <p className="text-muted-foreground text-sm">{company}</p>
        <p className="text-muted-foreground text-xs mt-1">{period}</p>
      </div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
