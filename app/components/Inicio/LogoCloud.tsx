'use client'

export default function LogoCloud() {
  const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Django', 'Flask',
    'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes',
    'Figma', 'Adobe XD', 'Sketch', 'OpenAI', 'TensorFlow', 'PyTorch',
    'GraphQL', 'REST API', 'Tailwind CSS', 'Bootstrap', 'Sass'
  ];

  const techColors: { [key: string]: string } = {
    'React': 'bg-blue-500',
    'Next.js': 'bg-black',
    'Node.js': 'bg-green-500',
    'TypeScript': 'bg-blue-600',
    'Python': 'bg-yellow-400',
    'Django': 'bg-green-600',
    'Flask': 'bg-gray-500',
    'PostgreSQL': 'bg-blue-700',
    'MongoDB': 'bg-green-700',
    'AWS': 'bg-orange-500',
    'Azure': 'bg-blue-800',
    'Docker': 'bg-blue-400',
    'Kubernetes': 'bg-blue-300',
    'Figma': 'bg-purple-500',
    'Adobe XD': 'bg-purple-600',
    'Sketch': 'bg-orange-600',
    'OpenAI': 'bg-green-400',
    'TensorFlow': 'bg-orange-400',
    'PyTorch': 'bg-red-500',
    'GraphQL': 'bg-pink-500',
    'REST API': 'bg-gray-600',
    'Tailwind CSS': 'bg-cyan-500',
    'Bootstrap': 'bg-purple-700',
    'Sass': 'bg-pink-600'
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
          Most Used Technologies in Business Web Development
        </p>
        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {technologies.concat(technologies, technologies, technologies).map((tech, index) => (
              <span key={index} className={`mx-8 px-3 py-1 rounded text-white text-xl font-bold ${techColors[tech] || 'bg-gray-500'}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}