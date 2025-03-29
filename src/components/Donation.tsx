
import React from "react";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Heart } from "lucide-react";

const Donation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [donationAmount, setDonationAmount] = React.useState(50);

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
      className={`py-24 px-4 sm:px-6 bg-sankofa transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      id="donate"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-api-terracotta/20 rounded-full mb-6">
            <Heart className="h-8 w-8 text-api-terracotta" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-api-cream mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-api-cream/80 max-w-2xl mx-auto">
            Your contribution directly enables our peace initiatives across East Africa, 
            helping communities build lasting stability and resilience.
          </p>
        </div>

        <div className="mt-12 bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-api-sage/20 shadow-xl max-w-3xl mx-auto">
          <Tabs defaultValue="emergency" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-api-darkgreen">
              {donationPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="py-3 data-[state=active]:bg-api-terracotta data-[state=active]:text-white text-sm text-white"
                >
                  {program.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {donationPrograms.map((program) => (
              <TabsContent key={program.id} value={program.id}>
                <Card className="border-api-sage/20 bg-api-cream/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-api-charcoal">{program.title}</CardTitle>
                    <CardDescription className="text-api-charcoal/80">
                      {program.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-api-charcoal/90">Amount</span>
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
                        <span className="text-api-charcoal/80">$10</span>
                        <span className="text-api-charcoal/80">$500</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {program.amounts.map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className={`border-api-sage/60 hover:border-api-terracotta hover:bg-api-terracotta hover:text-white ${
                            donationAmount === amount ? 'bg-api-terracotta text-white' : 'bg-transparent text-api-charcoal'
                          }`}
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 rounded-lg bg-api-forestgreen/10 border border-api-sage/40">
                      <h4 className="text-api-charcoal mb-2 font-medium">Your Impact</h4>
                      <p className="text-api-charcoal/90 text-sm">{program.impact}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-api-terracotta hover:bg-api-gold text-white font-medium py-6">
                      Donate Now <ArrowRight className="ml-2" />
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
