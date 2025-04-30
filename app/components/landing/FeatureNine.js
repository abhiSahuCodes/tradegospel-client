import { Lexend } from "next/font/google";
import Image from "next/image";

const lexend = Lexend({ subsets: ["latin"] });

export default function FeatureNine() {
  return (
    <div className="flex flex-col items-center gap-16 px-4 md:px-8 xl:px-16 py-12">
      {/* Laptop Screen Container */}
      <div className="w-full max-w-[80rem] aspect-[16/9] relative">
        {/* Laptop Frame */}
        <div className="absolute inset-0 bg-black rounded-t-[1rem] rounded-b-[0.2rem] p-[1.4rem] pb-[3.5rem]">
          {/* Inner Frame */}
          <div className="w-full h-full bg-black rounded-[0.75rem] p-[0.25rem]">
            {/* Screen Content Area */}
            <div className="w-full h-full bg-white rounded-[0.75rem] overflow-hidden relative">
              <div className="absolute inset-[0.5rem]">
                <Image
                  src="/landing/feature-nine/screen-image.png"
                  alt="Feature Nine Screen"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}