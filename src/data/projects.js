export const projects = [
  {
    id: 'ai-coeff',
    title: 'AI.Coeff',
    subtitle: 'AI Automation Suite for Businesses',
    description:
      'A suite of AI-powered tools that automate core business operations — quote generation, invoice creation, lead generation, and automated email prospecting. Built as a real entrepreneurial initiative, deployed on VPS with real clients.',
    what_it_shows:
      'End-to-end product ownership: architecture, AI integration, PDF generation, API design, and VPS deployment.',
    stack: ['Python', 'Flask', 'MySQL', 'OpenRouter', 'PDF Generation', 'Hostinger VPS'],
    type: 'Entrepreneurial Project',
    github: null,
    demo: null,
    highlight: true,
  },
  {
    id: 'msi-malware',
    title: 'MSI Malware Detection System',
    subtitle: 'Static Malware Analysis — ML / Security',
    description:
      'A static malware detection system for MSI installers using machine learning. Implemented feature extraction from PE structures, a distributed processing architecture with Redis, and LightGBM model inference served via FastAPI.',
    what_it_shows:
      'Applying ML to cybersecurity problems: feature engineering on binary files, distributed pipeline design, and production-ready API serving.',
    stack: ['Python', 'LightGBM', 'FastAPI', 'Docker', 'Redis', 'Machine Learning'],
    type: 'ML / Cybersecurity',
    github: 'https://github.com/coeffic-raphael/msi_analysis',
    demo: null,
    highlight: false,
  },
  {
    id: 'whatsapp-platform',
    title: 'WhatsApp Automation Platform',
    subtitle: 'Multi-tenant SaaS — Twains (Contract)',
    description:
      'Production-grade multi-tenant WhatsApp automation platform. Worked on authentication, organization isolation, security hardening, frontend architecture with Zustand and React Query, and backend refactoring with MongoDB workflow persistence.',
    what_it_shows:
      'Working on a real production codebase with real clients, constraints, and accountability. Security, multi-tenancy, and maintainability at scale.',
    stack: ['React', 'Python', 'Flask', 'MongoDB Atlas', 'Zustand', 'React Query', 'Clerk'],
    type: 'Private Client Project',
    github: null,
    demo: null,
    private: true,
    highlight: false,
  },
  {
    id: 'baby-hungry',
    title: 'Is Baby Hungry?',
    subtitle: 'Audio ML — Baby Cry Classification',
    description:
      'A baby cry classifier using CNN14 audio embeddings (AudioSet pretrained) combined with XGBoost and PyTorch. Includes EDA, feature leakage prevention, and systematic model comparison between classical ML and fine-tuning approaches.',
    what_it_shows:
      'Real ML methodology: not just plugging a model, but doing proper validation, feature analysis, and comparing approaches rigorously.',
    stack: ['Python', 'PyTorch', 'XGBoost', 'CNN14', 'Librosa', 'Hugging Face'],
    type: 'ML / Audio',
    github: 'https://github.com/coeffic-raphael/Is_Baby_Hungry',
    demo: null,
    highlight: false,
  },
  {
    id: 'workconnect',
    title: 'WorkConnect',
    subtitle: 'Professional Networking Android App',
    description:
      'Android professional networking application built with Java and Firebase. Implemented Firebase Authentication, Firestore real-time data, chat modules, and workflow management features.',
    what_it_shows:
      'Mobile development with Java, real-time databases, and authentication — beyond web, demonstrating breadth across platforms.',
    stack: ['Java', 'Android Studio', 'Firebase', 'Firestore'],
    type: 'Mobile — Academic',
    github: 'https://github.com/coeffic-raphael/WorkConnect',
    demo: null,
    highlight: false,
  },
  {
    id: 'os-final',
    title: 'Multithreaded Graph Server',
    subtitle: 'C++ Systems Programming — OS Final Project',
    description:
      'A production-grade TCP server written in C++ from scratch. Clients maintain isolated graph state and trigger MST computations (Prim & Kruskal). The server implements three real concurrency patterns: Pipeline (staged message processing), Leader-Follower thread pool (minimizing contention), and Active Object (decoupling task submission from execution). Memory validated with Valgrind, coverage with gcov.',
    what_it_shows:
      'Deep understanding of OS internals: raw sockets, POSIX threads, mutex/synchronization, memory management, and advanced concurrency architecture — not just using threads, but designing around them.',
    stack: ['C++', 'POSIX Threads', 'TCP Sockets', 'Valgrind', 'Makefile', 'Linux'],
    type: 'Systems / C++ — Academic',
    github: 'https://github.com/coeffic-raphael/OS_Final',
    demo: null,
    highlight: false,
  },
  {
    id: 'lead-gen-agent',
    title: 'Lead Generation AI Agent',
    subtitle: 'Business Automation Tool',
    description:
      'Automation tool for business lead extraction and enrichment using Google Places API. Generates prospect databases and automates email workflows via a Streamlit interface.',
    what_it_shows:
      'Building practical AI agents that do real business work — not demos, but tools people actually use to generate leads and send emails.',
    stack: ['Python', 'Streamlit', 'Google Places API', 'Pandas', 'Automation'],
    type: 'AI / Automation',
    github: null,
    demo: null,
    private: true,
    highlight: false,
  },
]
