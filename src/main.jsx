import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    tag: 'Comparative genomics',
    title: 'Camelina Genome Annotation & Orthology',
    text: 'Comparative genome annotation and gene correspondence analysis across Camelina sativa assemblies, with a workflow extending toward Arabidopsis orthology.',
    tech: ['Liftoff', 'BLASTP', 'MCScanX', 'Python', 'Bash', 'SLURM'],
    accent: '01'
  },
  {
    tag: 'Single-cell',
    title: 'Legume scRNA-seq Portal',
    text: 'Interactive exploration of multiple single-cell RNA-seq datasets with UMAP, differential expression, volcano plots and dot plots.',
    tech: ['R', 'Shiny', 'scRNA-seq', 'Visualization'],
    accent: '02'
  },
  {
    tag: 'Multi-omics',
    title: 'Maize × Rhizophagus Integration',
    text: 'Integrative analysis combining transcriptomic, metabolomic and physiological measurements to study plant–microbe interactions.',
    tech: ['R', 'Python', 'RNA-seq', 'Multi-omics'],
    accent: '03'
  },
  {
    tag: 'Transcriptomics',
    title: 'Translatome Analysis',
    text: 'Analysis of total and polysomal RNA-seq, differential expression, and an interactive interface for cell-type translatome exploration.',
    tech: ['RNA-seq', 'R', 'Shiny', 'Differential analysis'],
    accent: '04'
  },
  {
    tag: 'Genomics software',
    title: 'Crossover Detection Tool',
    text: 'Python-based tooling for detecting and characterizing meiotic crossover events from genomic data.',
    tech: ['Python', 'Genomics', 'Data processing'],
    accent: '05'
  },
  {
    tag: 'Workflow engineering',
    title: 'PASTEC Transposable Element Pipeline',
    text: 'Reproducible workflow for transposable element classification, benchmarking and execution on HPC infrastructure.',
    tech: ['Snakemake', 'Singularity', 'SLURM', 'REXdb'],
    accent: '06'
  }
]

const experience = [
  ['2024–2026', 'Sciences des Plantes de Saclay / INRAE Paris-Saclay', 'Bioinformatics Engineer', 'Genomics, transcriptomics, multi-omics, scientific software and HPC workflows across collaborative research teams.'],
  ['2022–2024', 'INCI Strasbourg', 'Bioinformatics apprenticeship & internship', 'Transcriptome, methylome and histone-mark analyses with reproducible computational workflows.'],
  ['2019–2021', 'CEA SHFJ · LPHI · IRD', 'Research internships', 'Early research experience spanning immunology, parasitology and cell biology.']
]

const skills = {
  'Bioinformatics': ['RNA-seq', 'scRNA-seq', 'Genomics', 'Transcriptomics', 'Epigenomics', 'Comparative genomics', 'Multi-omics'],
  'Programming': ['Python', 'R', 'Bash', 'SQL', 'JavaScript'],
  'Workflows & DevOps': ['Snakemake', 'Nextflow', 'Docker', 'Singularity', 'Conda'],
  'Infrastructure': ['Linux', 'SLURM', 'HPC', 'Git', 'GitHub'],
  'Data apps': ['R Shiny', 'Matplotlib', 'ggplot2', 'Plotly']
}

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Homepage">MY<span>.</span></a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="eyebrow">BIOINFORMATICS ENGINEER</p>
            <h1>Turning complex biological data into <span>reproducible analyses and tools.</span></h1>
            <p className="hero-text">
              I work at the intersection of genomics, transcriptomics, scientific software and data engineering — from RNA-seq and single-cell analysis to comparative genomics and HPC workflows.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore projects</a>
              <a className="button secondary" href="#contact">Contact me</a>
            </div>
            <div className="micro-list">
              <span>Python</span><span>R</span><span>RNA-seq</span><span>scRNA-seq</span><span>HPC</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="visual-card card-a">
              <span className="mini-label">GENOMICS</span>
              <div className="dna-lines">
                {Array.from({length: 8}).map((_, i) => <i key={i}></i>)}
              </div>
            </div>
            <div className="visual-card card-b">
              <span className="mini-label">PIPELINES</span>
              <div className="pipeline">
                <b>FASTQ</b><em>→</em><b>QC</b><em>→</em><b>ANALYSIS</b>
              </div>
            </div>
            <div className="stat-card"><strong>9+</strong><span>scRNA-seq datasets</span></div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading">
            <p className="eyebrow">ABOUT</p>
            <h2>Biology first. Computing by design.</h2>
          </div>
          <div className="about-grid">
            <p className="lead">
              My background combines biological research with software development, statistics and reproducible data analysis. I build computational solutions that help research teams explore, compare and interpret large biological datasets.
            </p>
            <div className="about-points">
              <div><strong>Research-driven</strong><span>Methods selected around the biological question.</span></div>
              <div><strong>Reproducible</strong><span>Versioned workflows, containers and HPC-ready pipelines.</span></div>
              <div><strong>Interactive</strong><span>Tools and visualizations designed for scientists, not only programmers.</span></div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">FEATURED WORK</p>
                <h2>Selected projects</h2>
              </div>
              <p>Scientific questions translated into reproducible computational workflows.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-top"><span>{project.tag}</span><b>{project.accent}</b></div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>A path across research and engineering</h2>
          </div>
          <div className="timeline">
            {experience.map(([date, org, role, desc]) => (
              <div className="timeline-row" key={date + org}>
                <div className="time">{date}</div>
                <div className="dot"></div>
                <div className="timeline-content"><p>{org}</p><h3>{role}</h3><span>{desc}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">TOOLKIT</p>
              <h2>Skills I use to build reliable analyses</h2>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items]) => (
                <div className="skill-card" key={group}>
                  <h3>{group}</h3>
                  <div>{items.map(item => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="publications">
          <div className="section-heading">
            <p className="eyebrow">PUBLICATIONS</p>
            <h2>Research output</h2>
          </div>
          <article className="publication-card">
            <div className="pub-year">2026</div>
            <div>
              <p className="journal">Nature Communications</p>
              <h3>Polymorphism can extensively reshape the genome-wide crossover landscape in <em>Arabidopsis thaliana</em></h3>
              <p className="authors">Benoît Madec, Maëla Sémery, Qichao Lian, Mohamad Yassine, Loïse Léonard-Moniot, et al.</p>
              <a href="https://www.nature.com/articles/s41467-026-76213-z" target="_blank" rel="noreferrer">View publication ↗</a>
            </div>
          </article>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">CONTACT</p>
              <h2>Interested in genomics, bioinformatics or scientific software?</h2>
            </div>
            <div className="contact-card">
              <p>I'm open to discussing research collaborations, bioinformatics engineering opportunities and scientific software projects.</p>
              <div className="contact-links">
                <a href="https://github.com/mohamadysn" target="_blank" rel="noreferrer">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/mohamad-ysn/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href="mailto:mohamad.a.ysn@gmail.com">Email ↗</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} Mohamad Yassine</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
