const callouts = [
  {
    name: 'Photographer Portfolio',
    description: 'Stunning visual showcase for professional photographers',
    imageSrc: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=500&fit=crop',
    imageAlt: 'Photography portfolio website displaying various photo galleries.',
    href: '#',
  },
  {
    name: 'Designer Portfolio',
    description: 'Creative showcase for graphic and UI/UX designers',
    imageSrc: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
    imageAlt: 'Design portfolio featuring various creative projects and case studies.',
    href: '#',
  },
  {
    name: 'Business Portfolio',
    description: 'Professional website for consultants and service providers',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=500&fit=crop',
    imageAlt: 'Business portfolio showcasing services, testimonials, and project highlights.',
    href: '#',
  },
]

export default function Portfolio() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Our Work</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            What We've Built
          </p>
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-14">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-400">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-white">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
