import { ShieldCheckIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Builds instant credibility',
    description:
      'A professional website tells them you’re legit, trustworthy, and serious.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Converts visitors into leads',
    description: 'A website captures leads, explains your offer clearly, and drives action.',
    icon: ChartBarIcon,
  },
  {
    name: 'Works 24/7 for your business',
    description: 'Your website answers questions, shows your services, and sells your value even when you’re offline.',
    icon: GlobeAltIcon,
  },
]

export default function Why() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Why get a Website?</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Your Digital Foundation
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                For startups and small businesses, your website is often the first interaction people have with your brand.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}<br/>
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
