"use client"

import { useState } from "react"
import { Download, Briefcase, FolderGit2 } from "lucide-react"
import ProjectCard from "./ProjectCard"
import ModalComponent from "./Modal"
import WorkItemComponent from "./WorkItem"

export default function Home() {
  const [showWorkExperience, setShowWorkExperience] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  const allProjects = [
    {
      title: "Customer Churn Predictor",
      description: "Built an ML pipeline that reduced churn by 23% using gradient boosting and real-time scoring.",
      tags: ["Python", "XGBoost", "FastAPI"],
      codeUrl: "https://github.com/yourusername/churn-predictor",
      demoUrl: "https://churn-predictor-demo.vercel.app",
    },
    {
      title: "NLP Sentiment Dashboard",
      description: "Real-time sentiment analysis on customer feedback with automated insights and alerts.",
      tags: ["NLP", "Streamlit", "spaCy"],
      codeUrl: "https://github.com/yourusername/sentiment-dashboard",
      demoUrl: "https://sentiment-dashboard-demo.vercel.app",
    },
    {
      title: "Recommendation Engine",
      description: "Collaborative filtering system handling 500k+ users with sub-100ms response times.",
      tags: ["TensorFlow", "Redis", "Docker"],
      codeUrl: "https://github.com/yourusername/recommendation-engine",
      demoUrl: "https://recommendation-demo.vercel.app",
    },
    {
      title: "Time Series Forecaster",
      description: "LSTM-based forecasting model for inventory optimization with 92% accuracy.",
      tags: ["PyTorch", "TimeSeries", "MLflow"],
      codeUrl: "https://github.com/yourusername/timeseries-forecaster",
      demoUrl: "https://forecaster-demo.vercel.app",
    },
    {
      title: "Anomaly Detection System",
      description: "Unsupervised learning system detecting fraud patterns in financial transactions.",
      tags: ["Scikit-learn", "Kafka", "Postgres"],
      codeUrl: "https://github.com/yourusername/anomaly-detection",
      demoUrl: "https://anomaly-detection-demo.vercel.app",
    },
  ]

  const recentProjects = allProjects.slice(0, 3)

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-16 sm:py-24">
      {/* Intro */}
      <section className="mb-20">
        <div className="space-y-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl animate-pulse-subtle" />
              <img
                src="/profile.png"
                alt="Profile"
                className="relative w-24 h-24 rounded-full object-cover border-4 border-border"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-muted-foreground text-2xl">Hi, I'm Blessed Zhou</h3>
              <h1 className="text-3xl sm:text-4xl font-medium leading-tight">
                Data Scientist <span className="inline-block">✨</span>
              </h1>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl text-pretty">
            Data Scientist with experience in applying machine learning and data analytics to drive actionable business insights.
            I have worked on projects involving the extraction and processing of structured and unstructured data, predictive modeling for credit scoring and sales forecasting, anomaly detection, and customer behavior analysis.
            Proficient in Python tools and libraries including scikit-learn, spaCy, pdfplumber, pytesseract, and pandas, with hands-on experience in NLP, clustering, and supervised modeling.
            I am continuously advancing my skills through studies, personal projects, and the creation of technical content.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button
              onClick={() => setShowWorkExperience(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-card-foreground border border-border rounded-full hover:border-primary/50 transition-colors text-sm font-medium"
            >
              <Briefcase className="w-4 h-4" />
              Work Experience
            </button>
            <button
              onClick={() => setShowProjects(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-card-foreground border border-border rounded-full hover:border-primary/50 transition-colors text-sm font-medium"
            >
              <FolderGit2 className="w-4 h-4" />
              Projects
            </button>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-xl font-medium mb-6 text-muted-foreground">Recent work</h2>
        <div className="space-y-4">
          {recentProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              codeUrl={project.codeUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-xl font-medium mb-6 text-muted-foreground">Tools I use</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "ML", "APIs", "Deployment", "MLOps", "SQL", "PyTorch", "Docker", "AWS"].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="mb-20">
        <h2 className="text-xl font-medium mb-6 text-muted-foreground">A bit about me</h2>
        <div className="space-y-4 text-muted-foreground text-pretty max-w-xl">
          <p>
            I love working at the intersection of data science and engineering—where ideas become real systems that
            people actually use.
          </p>
          <p>
            Most of my time is spent training models, building APIs, and making sure things don't break in production. I
            care a lot about clean code and systems that scale gracefully.
          </p>
          <p>
            When I'm not coding, you'll find me reading research papers, tinkering with side projects, or exploring new
            ML frameworks.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-medium mb-6 text-muted-foreground">Let's connect</h2>
        <p className="text-muted-foreground mb-6 text-pretty">
          Always happy to chat about data, ML, or interesting projects.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Send an email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-card text-card-foreground border border-border rounded-full hover:border-primary/50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-card text-card-foreground border border-border rounded-full hover:border-primary/50 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border/30">
        <p className="text-center text-sm text-muted-foreground/60">Building systems that learn and adapt.</p>
      </footer>

      {showWorkExperience && (
        <ModalComponent onClose={() => setShowWorkExperience(false)} title="Work Experience">
          <div className="space-y-6">
            <WorkItemComponent
              company="Tech Startup Inc."
              role="Senior ML Engineer"
              period="2022 - Present"
              highlights={[
                "Led ML infrastructure migration to AWS, reducing costs by 40%",
                "Built real-time recommendation system serving 1M+ users",
                "Mentored team of 3 junior engineers",
              ]}
            />
            <WorkItemComponent
              company="Data Corp"
              role="Data Scientist"
              period="2020 - 2022"
              highlights={[
                "Developed predictive models improving forecast accuracy by 35%",
                "Automated reporting pipelines saving 15hrs/week",
                "Collaborated with product team on A/B testing framework",
              ]}
            />
            <WorkItemComponent
              company="Analytics Firm"
              role="Junior Data Analyst"
              period="2019 - 2020"
              highlights={[
                "Built dashboards for executive reporting",
                "Performed exploratory analysis on customer behavior",
                "Supported data quality initiatives",
              ]}
            />
          </div>
        </ModalComponent>
      )}

      {showProjects && (
        <ModalComponent onClose={() => setShowProjects(false)} title="Projects">
          <div className="space-y-4">
            {allProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                codeUrl={project.codeUrl}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        </ModalComponent>
      )}
    </main>
  )
}
