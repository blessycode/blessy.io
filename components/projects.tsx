export interface Project {
  title: string
  description: string
  tags: string[]
  codeUrl?: string
  demoUrl?: string
}

export const allProjects: Project[] = [
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
  {
    title: "Computer Vision Classifier",
    description: "Image classification system for product categorization with 95% accuracy using transfer learning.",
    tags: ["TensorFlow", "Keras", "OpenCV", "Flask"],
    codeUrl: "https://github.com/yourusername/vision-classifier",
    demoUrl: "https://vision-classifier-demo.vercel.app",
  },
]

// Projects data is exported above for use in page.tsx
