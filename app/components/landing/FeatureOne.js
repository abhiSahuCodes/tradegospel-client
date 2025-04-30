import Image from 'next/image'

export default function FeatureOne() {
  const features = [
    { 
      title: 'Watch Live', 
      description: 'Access real-time trading data and make informed decisions to maximize your profit.',
      icon: '/landing/feature-one/icon-watchlive.png'
    },
    { 
      title: 'Community', 
      description: 'Join our vibrant community of traders to share insights and learn from each other.',
      icon: '/landing/feature-one/icon-community.png'
    },
    { 
      title: 'Financial Education', 
      description: 'Access educational resources designed to equip you with knowledge needed to navigate the financial markets effectively.',
      icon: '/landing/feature-one/icon-financialedu.png'
    }
  ]

  return (
    <div className="flex flex-col items-center px-4 md:px-8 xl:px-16 py-12 my-24 max-w-[80rem] mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <h2 className="text-[1.875rem] sm:text-[2.5rem] font-bold mb-4">
          Unlock Your <span className="text-blue-600">Financial Potential</span> with TradeGospel
        </h2>
        <p className="text-gray-600 text-[1.125rem] max-w-[50rem] mx-auto">
          Join our vibrant community on Trade Gospel, where you can watch and participate in live trading sessions. Get real-time insights, expert strategies, and make informed trades with confidence.
        </p>
      </div>

      {/* Features Grid */}
      <div className="flex flex-col xl:flex-row justify-between gap-[1.875rem] w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full xl:w-[22.208rem] min-h-[14.25rem] mb-8 xl:mb-0">
            {/* Icon Container */}
            <div className="w-[6.125rem] h-[6.125rem] rounded-[4.375rem] p-[0.75rem] bg-gray-50 mb-6">
              {/* Inner Icon Container */}
              <div className="w-[4.625rem] h-[4.625rem] rounded-[3.125rem] border border-gray-200 p-[1.25rem] flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={34}
                  height={34}
                  className="w-[2.125rem] h-[2.125rem]"
                />
              </div>
            </div>
            <h3 className="text-[1.5rem] font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 max-w-[80%] md:max-w-[70%] xl:max-w-none mx-auto text-[1rem]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}