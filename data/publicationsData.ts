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
    author: '**Joshi, N.**',
    title: 'Learning structured representations for adaptive robotic control',
    journal: 'Journal of Machine Learning Research',
    volume: '24',
    pages: '1–32',
    year: '2024',
    doi: '10.1234/jmlr.2024.001',
    href: 'https://scholar.google.com/citations?user=NSO37toAAAAJ&hl=en',
  },
  {
    author: '**Joshi, N.**',
    title: 'Neural mechanisms of flexible decision making in dynamic environments',
    journal: 'Nature Computational Science',
    volume: '3',
    pages: '118–129',
    year: '2023',
    doi: '10.1234/ncs.2023.002',
    href: '/projects',
  },
]

export default publicationsData
