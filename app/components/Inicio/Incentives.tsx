// src/components/home/Incentives.tsx

const incentives = [
  {
    title: 'Long-Term Partnership',
    imageSrc: '/icons/Partnership.jpg',
    description: 'We move beyond the "provider" role to become your technology partner. Our focus is on building robust, high-quality architectures (Frontend & Backend) that evolve alongside your business goals.',
  },
  {
    title: 'Priority Technical Support',
    imageSrc: '/icons/support.jpg',
    description: 'Your uptime is our priority. As a partner, you get a direct line to our dev team, ensuring rapid response times and expert troubleshooting to keep your operations running 24/7',
  },
  {
    title: 'Performance & Strategic Growthg',
    imageSrc: '/icons/Performance.jpg',
    description: 'Stay ahead of the competition with continuous speed optimization and strategic tech consulting during your first 3 months—completely free. We handle the complexity; you lead the growth.',
  },
]

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Why Partner with Us?
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We don’t just deliver code; we build the engine for your digital growth. By choosing our Full-Stack expertise, you’re securing a scalable solution backed by a team committed to your long-term success.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.title} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">{incentive.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}