import Logo from '../logo/Logo'

export default function Footer() {
    const navigation = {
        main: [
            { name: 'Product', href: '#' },
            { name: 'Features', href: '#' },
            { name: 'Company', href: '#' },
        ],
        social: [
            {
                name: 'GitHub',
                href: '#',
                icon: () => (
                    <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                        <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
        ],
    }

    return (
        <footer className="w-full bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="mb-6">
                        <Logo />
                    </div>
                    {/* Description */}
                    <p className="text-center max-w-xl text-sm font-normal leading-relaxed text-gray-400">
                        From design to deployment, websites done right. End-to-end website solutions for startups, new brands, and small businesses.
                    </p>
                    {/* Navigation Links */}
                    {/* <nav className="mt-10" aria-label="Footer">
                        <ul className="flex space-x-8" role="list">
                            {navigation.main.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav> */}
                </div>
            </div>
            {/* Bottom Section */}
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <p className="text-sm text-gray-400">
                            &copy; 2025 Design2Deploy. All rights reserved.
                        </p>
                        {/* <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon />
                                </a>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
