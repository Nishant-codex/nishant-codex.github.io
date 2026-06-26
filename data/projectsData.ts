interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Autonomous Warehousing',
    description: `In this project, we developed an autonomous warehousing system
     that utilizes advanced robotics and AI algorithms to optimize inventory management 
     and streamline the supply chain process. I was responsible for designing the 
     path planning algorithms for the autonomous robots, ensuring efficient path 
     planning and obstacle avoidance.`,
    imgSrc: '/static/images/robotics.jpg',
    href: 'https://www.google.com',
  },


  {
    title: 'GLIF Model Fitting',
    description: `In this project, I refurbished the approach for 
    fitting the GLIF model to experimental single cell electrophysiology data collected. 
    This involved implementing efficient optimization 
    algorithms and validating the model against ground truth data.`,
    imgSrc: '/static/images/GLIF.png',
    href: 'https://www.google.com',
  },

  {
    title: 'Fitting Fritz-Hugh Nagumo Model on fMRI Data',
    description: `In this project, I fitted the Fritz-Hugh Nagumo model to fMRI data. 
    I used a parcellated fMRI dataset and ustilized FHN based network to understand connectivity.`,
    imgSrc: '/static/images/dynamics.png',
    href: 'https://www.google.com',
  },

  {
    title: 'Brain2 based neuron models',
    description: `This was a side project to implement common neuron models in order to fit them to noisy single cell electrophysiological data`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },


  {
    title: 'Manifold Alignment for Neural Data',
    description: `I utlized UNICOMM algorithm to compare neuronal properties recorded across two input protocols by aligning the high-dimensional mainfolds.`,
    imgSrc: '/static/images/robotics.jpg',
    href: 'https://www.google.com',
  },

  {
    title: 'Siamese Neural Network for extracting neural signatures',
    description: `I implemented a Siamese neural network to extract meaningful signatures of neurons recorded across two different patch clamp protocols.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },


  {
    title: 'Reverse Engineering Recurrent Neural Networks',
    description: `I reverse engineered RNNs and SNNs by extracting their dynamical structure and internal representaion, in order to understand how they learn a memory task with different design choices.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },

]

export default projectsData
