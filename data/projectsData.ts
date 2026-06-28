interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Swiss-Knife for electrophysiology',
    description: `Built a production-style data pipeline for large-scale time-series analysis — from raw signal ingestion through feature extraction, dimensionality reduction, and unsupervised clustering. Processed 3.6+ billion data points across 1200+ recordings. Implemented with reproducibility-first principles including version control, containerization, and FAIR data standards. Delivered as part of two peer-reviewed publications. `,
    imgSrc: '/static/images/swissknife.png',
    href: 'https://github.com/Nishant-codex/single_cell_analysis',
  },

  {
    title: 'Heterogeneity in Reservoir Systems',
    description: `Collaborated with Ghent University to design and evaluate neural network architectures with heterogeneous temporal dynamics. Benchmarked memory capacity, stability, and dimensionality across standard tasks, showing that architectural diversity improves performance. Built and trained models in TensorFlow 2.x on HPC infrastructure.`,
    imgSrc: '/static/images/reservoir.png',
    href: 'https://github.com/Nishant-codex/DDN-public',
  },

  {
    title: 'Reverse Engineering Recurrent Neural Networks',
    description: `Different neural network architectures solve the same task in fundamentally different ways. I systematically trained 100+ recurrent and spiking neural networks on a memory task and reverse engineered their internal dynamics using fixed-point analysis and dimensionality reduction to understand how design choices shape learned representations. Run on GPU-enabled HPC infrastructure using CUDA and SLURM.`,
    imgSrc: '/static/images/fixed_points.png',
    href: 'https://github.com/Nishant-codex/rnn_flip_flops',
  },

  {
    title: 'GLIF Model Fitting',
    description: `Migrated a neuron model fitting codebase from Python 2 to Python 3 and extended it with a BluePyOpt-based optimization variant, adding evolutionary algorithm support alongside the existing approach. Applied the refactored toolbox to fit biophysical models to experimental electrophysiology data, closing the loop between model development and real data validation.`,
    imgSrc: '/static/images/GLIF.png',
    href: 'https://github.com/Nishant-codex/GIFFittingToolbox',
  },

  {
    title: 'Autonomous Warehousing',
    description: `In this project, we developed an autonomous warehousing system
     that utilizes advanced robotics and AI algorithms to optimize inventory management 
     and streamline the supply chain process. I was responsible for designing the 
     path planning algorithms for the autonomous robots, ensuring efficient path 
     planning and obstacle avoidance.`,
    imgSrc: '/static/images/robotics.jpg',
    href: 'https://github.com/Nishant-codex/CBS_path_planner',
  },

  {
    title: 'Fitting Fritz-Hugh Nagumo Model on fMRI Data',
    description: `In this project, I fitted the Fritz-Hugh Nagumo model to fMRI data. 
    I used a parcellated fMRI dataset and ustilized FHN based network to understand connectivity.`,
    imgSrc: '/static/images/dynamics.png',
    href: 'https://github.com/Nishant-codex/Controllability',
  },
 
  {
    title: 'Siamese Neural Network for extracting neural signatures',
    description: `I implemented a Siamese neural network to extract meaningful signatures of neurons recorded across two different patch clamp protocols.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/Nishant-codex/Siamese_net',
  },

 {
    title: 'Manifold Alignment for Neural Data',
    description: `I utlized UNICOMM algorithm to compare neuronal properties recorded across two input protocols by aligning the high-dimensional mainfolds.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },

  {
    title: 'Brain2 based neuron models',
    description: `This was a side project to implement common neuron models in order to fit them to noisy single cell electrophysiological data`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/Nishant-codex/single_neuron_models',
  },

]

export default projectsData
