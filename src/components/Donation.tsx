
import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Heart } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Donation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [donationAmount, setDonationAmount] = React.useState(50);
  const isMobile = useIsMobile();

  const donationPrograms = [
    {
      id: "emergency",
      title: "Emergency Response",
      description: "Support rapid crisis intervention in conflict zones",
      amounts: [25, 50, 100, 250],
      impact: "Your donation helps us deploy mediators and provide emergency resources to areas experiencing active conflict."
    },
    {
      id: "training",
      title: "Mediator Training",
      description: "Equip local leaders with conflict resolution skills",
      amounts: [30, 60, 120, 300],
      impact: "Each $60 trains one community leader to become a certified mediator in their local area."
    },
    {
      id: "youth",
      title: "Youth Programs",
      description: "Empower the next generation of peacebuilders",
      amounts: [20, 40, 80, 200],
      impact: "Your support helps young people develop leadership skills and implement peace projects in their communities."
    },
  ];

  return (
    <div
      ref={ref}
      className={`py-16 sm:py-24 px-4 sm:px-6 bg-sankofa transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="donate"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block p-3 bg-api-terracotta/20 rounded-full mb-4 sm:mb-6">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-api-terracotta" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-api-cream mb-3 sm:mb-4">
            Support Our Mission
          </h2>
          <p className="text-base sm:text-lg text-api-cream/80 max-w-2xl mx-auto">
            Your contribution directly enables our peace initiatives across East Africa, 
            helping communities build lasting stability and resilience.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-api-sage/30 shadow-xl max-w-3xl mx-auto">
          <Tabs defaultValue="emergency" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6 sm:mb-8 bg-api-darkgreen overflow-hidden rounded-md">
              {donationPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="py-3 px-1 md:px-3 text-[11px] xs:text-xs sm:text-sm text-white text-center font-medium data-[state=active]:bg-api-terracotta data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:items-center sm:justify-center whitespace-normal h-auto min-h-[3rem]"
                >
                  <span className="line-clamp-2">{program.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {donationPrograms.map((program) => (
              <TabsContent key={program.id} value={program.id} className="focus-visible:outline-none">
                <Card className="border-api-sage/20 bg-api-cream/90 backdrop-blur-sm shadow-md">
                  <CardHeader className="pb-2 sm:pb-4">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-api-charcoal">{program.title}</CardTitle>
                    <CardDescription className="text-api-charcoal/80 text-sm sm:text-base">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 py-2 sm:py-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-api-charcoal/90 text-sm font-medium">Amount</span>
                        <span className="text-api-charcoal font-bold">${donationAmount}</span>
                      </div>
                      <Slider
                        value={[donationAmount]}
                        min={10}
                        max={500}
                        step={5}
                        onValueChange={(value) => setDonationAmount(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-api-charcoal/80 text-xs">$10</span>
                        <span className="text-api-charcoal/80 text-xs">$500</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {program.amounts.map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className={`min-w-[65px] sm:min-w-[70px] border-api-sage/60 hover:border-api-terracotta hover:bg-api-terracotta hover:text-white transition-colors duration-200 ${
                            donationAmount === amount ? 'bg-api-terracotta text-white' : 'bg-transparent text-api-charcoal'
                          }`}
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-api-forestgreen/10 border border-api-sage/40">
                      <h4 className="text-api-charcoal mb-1 font-medium text-sm sm:text-base">Your Impact</h4>
                      <p className="text-api-charcoal/90 text-xs sm:text-sm">{program.impact}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full bg-api-terracotta hover:bg-api-clay text-white font-medium py-4 sm:py-5 transition-all duration-300 text-sm sm:text-base shadow-sm hover:shadow">
                      Donate Now <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Donation;
