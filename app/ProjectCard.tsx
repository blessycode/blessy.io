import { ExternalLink, Code } from "lucide-react"

export default function ProjectCard({
  title,
  description,
  tags,
  codeUrl,
  demoUrl,
}: {
  title: string
  description: string
  tags: string[]
  codeUrl?: string
  demoUrl?: string
}) {
  return (
    <div className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all glow-card">
      <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm text-pretty">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      {(codeUrl || demoUrl) && (
        <div className="flex gap-3 pt-2 border-t border-border">
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
            >
              <Code className="w-3.5 h-3.5" />
              View Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-muted"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  )
}
