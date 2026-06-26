import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import publicationsData from '@/data/publicationsData'

export default function Home() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pb-8 pt-6 md:space-y-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-shrink-0">
              <Image
                src="/static/images/nishant_photo.jpg"
                alt="Nishant Joshi"
                width={220}
                height={220}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                About me
              </h1>
              <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
                I’m Nishant, a researcher working at the crossroads of machine learning,
                robotics, and computational neuroscience. My work focuses on building intelligent
                systems that are both theoretically grounded and practically useful.
              </p>
              <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
                I’m currently pursuing my PhD and enjoy exploring how computation can help us
                understand complex behavior, design better tools, and connect abstract ideas with
                real-world applications.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Recent publications
          </h2>
          <div className="space-y-4">
            {publicationsData.map((publication) => (
              <div
                key={publication.title}
                className="rounded-lg border border-gray-200 p-5 shadow-sm dark:border-gray-700"
              >
                <p className="text-base leading-7 text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    {publication.author}
                  </span>
                  {publication.year ? ` (${publication.year}).` : '.'}{' '}
                  <span className="italic">{publication.title}</span>
                  {publication.journal ? `, ${publication.journal}` : ''}
                  {publication.volume ? `, ${publication.volume}` : ''}
                  {publication.pages ? `, ${publication.pages}` : ''}
                  {publication.doi ? `, doi:${publication.doi}` : ''}
                </p>
                {publication.href && (
                  <Link
                    href={publication.href}
                    className="mt-3 inline-block text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    View source &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Connect
          </h2>
          <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
            You can find me on{' '}
            <Link href={siteMetadata.github} className="text-primary-500 hover:text-primary-600">
              GitHub
            </Link>
            ,{' '}
            <Link href={siteMetadata.linkedin} className="text-primary-500 hover:text-primary-600">
              LinkedIn
            </Link>
            , or via{' '}
            <Link href={siteMetadata.scholar} className="text-primary-500 hover:text-primary-600">
              Google Scholar
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
