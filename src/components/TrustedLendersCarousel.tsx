import logo365Finance from "@/assets/lenders/365-finance.png";
import logoYoulend from "@/assets/lenders/youlend.png";
import logoFundingCircle from "@/assets/lenders/funding-circle.png";
import logoIwoca from "@/assets/lenders/iwoca.png";
import logoCapitalOnTap from "@/assets/lenders/capital-on-tap.png";
import logoTriver from "@/assets/lenders/triver.png";
import logoRecap from "@/assets/lenders/recap.png";
import logoCapify from "@/assets/lenders/capify.png";
import logoSigmaLending from "@/assets/lenders/sigma-lending.png";
import logoSwiftfund from "@/assets/lenders/swiftfund.png";
import logoGotCapital from "@/assets/lenders/got-capital.png";
import logoMarcap from "@/assets/lenders/marcap.png";
import logoBizcap from "@/assets/lenders/bizcap.png";
import logoMclFinance from "@/assets/lenders/mcl-finance.png";
import logoCubeFunder from "@/assets/lenders/cube-funder.png";
import logoMultifi from "@/assets/lenders/multifi.png";
import logoSwishFund from "@/assets/lenders/swish-fund.png";

const lenders = [
  { name: "365 Finance", logo: logo365Finance },
  { name: "YouLend", logo: logoYoulend },
  { name: "Funding Circle", logo: logoFundingCircle },
  { name: "iwoca", logo: logoIwoca },
  { name: "Capital on Tap", logo: logoCapitalOnTap },
  { name: "Triver", logo: logoTriver },
  { name: "Recap", logo: logoRecap },
  { name: "Capify", logo: logoCapify },
  { name: "Sigma Lending", logo: logoSigmaLending },
  { name: "Swiftfund", logo: logoSwiftfund },
  { name: "Got Capital", logo: logoGotCapital },
  { name: "MarCap", logo: logoMarcap },
  { name: "Bizcap", logo: logoBizcap },
  { name: "MCL Finance", logo: logoMclFinance },
  { name: "Cube Funder", logo: logoCubeFunder },
  { name: "Multifi", logo: logoMultifi },
  { name: "Swish Fund", logo: logoSwishFund },
];

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const TrustedLendersCarousel = () => {
  return (
    <section 
      className="py-10 md:py-12"
      style={{ 
        backgroundColor: 'hsl(220, 15%, 92%)',
        boxShadow: 'inset 0 1px 0 hsl(215, 15%, 88%), inset 0 -1px 0 hsl(215, 15%, 88%)'
      }}
    >
      <div className="container-xl">
        <p 
          className="text-sm font-semibold uppercase tracking-wider mb-6 text-center"
          style={{ color: 'hsl(220, 12%, 50%)' }}
        >
          Access to a wide panel of UK lenders
        </p>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {lenders.map((lender, index) => (
              <CarouselItem 
                key={index} 
                className="pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6"
              >
                <div className="flex items-center justify-center p-2">
                  <img 
                    src={lender.logo} 
                    alt={lender.name}
                    className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
