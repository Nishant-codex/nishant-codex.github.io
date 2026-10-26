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
    author: 'Joshi, N., van Der Burg, S., Celikel, T., & Zeldenrust, F.',
    title: 'Neuronal identity is not static: An input-driven perspective',
    journal: 'PLOS Computational Biology',
    volume: '21',
    pages: 'e1013821',
    year: '2025',
    doi: '10.1371/journal.pcbi.1013821',
    href: 'https://doi.org/10.1371/journal.pcbi.1013821',
  },
  {
    author: 'Joshi, N., Yan, X., ..., Celikel, T., & Zeldenrust, F.',
    title: 'Neuromodulatory Control of Cortical Function: Cell-Type Specific Regulation of Neuronal Information Transfer',
    journal: 'Proc. Natl. Acad. Sci. U.S.A',
    volume: '123 (43)',
    pages: 'e2609893123',
    year: '2026',
    doi: '10.1073/pnas.2609893123',
    href: 'https://doi.org/10.1073/pnas.2609893123',
  },

]

export default publicationsData
