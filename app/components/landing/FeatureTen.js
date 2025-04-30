'use client';

import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });

const faqData = [
  {
    question: "What is TradeGospel?",
    answer: "TradeGospel is a comprehensive platform designed to empower individuals with the knowledge, tools, and community support needed to achieve financial success through education, collaboration, and innovation in trading and finance."
  },
  {
    question: "Who is TradeGospel for?",
    answer: "TradeGospel is for traders of all levels, from beginners to advanced, who are seeking education, collaboration, and community support in finance and trading."
  },
  {
    question: "What features does TradeGospel offer?",
    answer: "TradeGospel offers a range of features including live trading sessions, educational resources, article writing and showcasing, community discussions, personalized portfolios, news and events, achievements and badges, and AI-driven article summarization."
  },
  {
    question: "How can I join TradeGospel events?",
    answer: "To join TradeGospel events, simply visit our Events page and register for the upcoming seminars and events that interest you. Registration is quick and easy, and it's a great way to connect with fellow traders and learn from industry experts."
  },
  {
    question: "Is TradeGospel suitable for beginners?",
    answer: "Yes, TradeGospel is suitable for beginners. We provide comprehensive educational resources and a supportive community to help beginners learn the fundamentals of finance and trading and make informed decisions."
  },
  {
    question: "Can I showcase my trading outcomes on TradeGospel?",
    answer: "Yes, TradeGospel allows traders to showcase their trading outcomes and share their experiences with the community. Whether you're a beginner or an experienced trader, you can write articles, share your successes, and learn from others."
  },
  {
    question: "How can I get support on TradeGospel?",
    answer: "If you have any questions or need support on TradeGospel, you can reach out to our support team through the Contact Us page. We're here to help you with any inquiries or issues you may have."
  },
  {
    question: "Is TradeGospel free to use?",
    answer: "Yes, TradeGospel is free to use for all traders. However, some advanced features or premium content may require a subscription or payment."
  }
];

export default function FeatureTen() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start py-8 sm:py-10 md:py-12">
      <div className="w-full max-w-[80rem] mx-auto px-4">
        <div className="flex flex-col items-start text-left">
          <h2 className={`${openSans.className} text-[1.25rem] sm:text-[1.5rem] md:text-[1.675rem] lg:text-[1.875rem] font-bold leading-[100%] tracking-[0%]`}>
            FAQs
          </h2>
          <p className={`${openSans.className} text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-normal leading-[120%] sm:leading-[100%] tracking-[0%] mt-2 sm:mt-3 md:mt-4 text-[#606060] max-w-[90%] sm:max-w-[80%] md:max-w-[70%]`}>
            Get your questions answered quickly. Browse through our FAQs for instant support on common topics of inquiry.
          </p>

          <div className="w-full mt-6 sm:mt-7 md:mt-8 space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-[#00000033] rounded-lg overflow-hidden"
              >
                <div
                  className="flex justify-between items-center p-3 sm:p-3.5 md:p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`${openSans.className} text-[0.875rem] sm:text-[0.9375rem] md:text-[1rem] font-semibold pr-4`}>
                    {faq.question}
                  </h3>
                  <div>
                    {openIndex === index ? (
                      <Image
                        src="/landing/feature-ten/minus.png"
                        alt="Toggle"
                        width={14}
                        height={1}
                        className="w-3 sm:w-3.5 md:w-4 h-0.5 sm:h-0.75 md:h-1 transition-all duration-300"
                      />
                    ) : (
                      <Image
                        src="/landing/feature-ten/add.png"
                        alt="Toggle"
                        width={14}
                        height={14}
                        className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 transition-all duration-300"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`p-3 sm:p-3.5 md:p-4 ${openIndex === index ? 'transform translate-y-0' : 'transform -translate-y-2'} transition-transform duration-500 ease-in-out`}>
                    <p className={`${openSans.className} text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] text-[#606060] leading-[140%] sm:leading-[130%] md:leading-[120%]`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}