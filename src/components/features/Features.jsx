import { UserIcon, PhotoIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Design',
    description:
      'We create clean, modern designs that communicate clearly and convert visitors into customers.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Deployment',
    description:
      'We build and deploy your website with best practices, fast loading, responsive, secure, and production-ready.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Updates & Management',
    description:
      'We keep your website updated, optimized, and running smoothly as your business evolves.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Content & Graphics',
    description:
      'Clear copy, visuals, and graphics that match your brand.',
    icon: DocumentTextIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id='services'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Portfolio website services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Everything you need to showcase your work online
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            From design to deployment, and ongoing management, we handle it all so you can focus on your craft.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
