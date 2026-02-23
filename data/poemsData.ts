interface Poem {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const poemsData: Poem[] = [
  {
    title: 'Whispers of the Night',
    description: `In the silence of the evening, thoughts drift like clouds across the sky.
    A reflection on solitude, beauty, and the quiet moments that define our lives.
    Exploring the emotions that surface when the world falls asleep.`,
    imgSrc: '/static/images/poem-1.jpg',
    href: '/poems/whispers-of-the-night',
  },
  {
    title: 'Journey Within',
    description: `A voyage through the corridors of the mind, seeking truth and understanding.
    This poem speaks to the inner journey we all undertake, the discoveries we make,
    and the growth that comes from looking inward with honest eyes.`,
    imgSrc: '/static/images/poem-2.jpg',
    href: '/poems/journey-within',
  },
]

export default poemsData
