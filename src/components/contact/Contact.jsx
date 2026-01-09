export default function Contact() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
            <form className="flex flex-col items-center text-sm">
                 <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-400">Contact</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Let's talk about your project
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 mb-16">
        Feel free to reach out if you'd like to brainstorm ideas, discuss a project, or work on something impactful together. 
      </p>
                
                <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                    <div className="w-full">
                        <label className="text-gray-300" htmlFor="name">Your Name</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-700 bg-gray-800 rounded outline-none focus:border-indigo-500 text-white" type="text" required />
                    </div>
                    <div className="w-full">
                        <label className="text-gray-300" htmlFor="name">Your Email</label>
                        <input className="h-12 p-2 mt-2 w-full border border-gray-700 bg-gray-800 rounded outline-none focus:border-indigo-500 text-white" type="email" required />
                    </div>
                </div>
            
                <div className="mt-6 w-[350px] md:w-[700px]">
                    <label className="text-gray-300" htmlFor="name">Message</label>
                    <textarea className="w-full mt-2 p-2 h-40 border border-gray-700 bg-gray-800 rounded resize-none outline-none focus:border-indigo-500 text-white" required></textarea>
                </div>
            
                <button type="submit" className="mt-5 bg-indigo-500 text-white h-12 w-56 px-4 rounded active:scale-95 transition hover:bg-indigo-400">Send Message</button>
            </form>
        </div>
    );
};
