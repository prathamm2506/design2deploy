import { RocketLaunchIcon, PencilSquareIcon, ArrowPathIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Website Redesign',
    description: `We rebuild your site's layout and flow.
Shorten paths to bookings and sales.
Turn one-time visitors into repeat customers.`,
    icon: PencilSquareIcon,
  },
  {
    name: 'Performance Optimization',
    description: `Compress images. Fix slow loads.
Rank higher on Google. Reduce bounce rates.
Users stay longer, convert more.`,
    icon: RocketLaunchIcon,
  },
  {
    name: 'UI/UX Improvement',
    description: `Simplify navigation. Add trust signals.
Customers find what they need fast.
Boost engagement and inquiries by 40%.`,
    icon: ArrowPathIcon,
  },
  {
    name: 'Responsive Design',
    description: `Flawless on desktop, tablet, phone.
Capture 60% of traffic from mobile.
No lost sales from poor mobile experience.`,
    icon: DevicePhoneMobileIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-24" id='services'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Website Redesign Services</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
            Everything your business needs to convert more visitors
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            Tailored redesigns for cafes, restaurants, real estate, and local shops.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-xl font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-md  text-gray-400 text-justify">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
