interface Publication {
  author: string
  title: string
  journal?: string
  volume?: string
  pages?: string
  year?: string
  doi?: string
  href?: string
}

const publicationsData: Publication[] = [


  {
    author: '<b>Joshi, N.</b>, van Der Burg, S., Celikel, T., & Zeldenrust, F.',
    title: 'Neuronal identity is not static: An input-driven perspective',
    journal: 'PLOS Computational Biology',
    volume: '21',
    pages: 'e1013821',
    year: '2025',
    doi: '10.1371/journal.pcbi.1013821',
    href: 'https://doi.org/10.1371/journal.pcbi.1013821',
  },
  {
    author: '<b>Joshi, N.</b>, Yan, X., ..., Celikel, T., & Zeldenrust, F.',
    title: 'Neuromodulatory Control of Cortical Function: Cell-Type Specific Regulation of Neuronal Information Transfer',
    journal: 'bioRxiv',
    year: '2026',
    doi: '10.1101/2026.03.04.669845v1',
    href: 'https://www.biorxiv.org/content/10.1101/2026.03.04.669845v1',
  },

]

export default publicationsData
