"use client";

import Button from "@/components/button";
import { Countdown } from "@/components/Countdown";
import { Schedule } from "@/components/Schedule";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// CardSection component defined inline to avoid file system issues
type Card = {
  title: string;
  description: string;
  image?: string;
};

function CardSection({ cards }: { cards: Card[] }) {
  return (
    <section className="w-full py-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-black">
          Our Community Impact
        </h2>

        {/* Grid layout for 3 cards always side by side */}
        <div className="grid grid-cols-3 gap-6">
          {cards.slice(0, 3).map((card, index) => (
            <div
              key={index}
              className="rounded-2xl bg-amber-100 shadow-sm p-6 hover:shadow-md transition-shadow h-96 flex flex-col overflow-hidden"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg w-full h-40 object-cover mb-4 flex-shrink-0"
                />
              )}
              <div className="flex flex-col flex-grow min-h-0">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-600">{card.title}</h3>
                <p className="text-black text-sm flex-grow overflow-hidden line-clamp-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CardTestPage() {
  const sampleCards = [
    {
      title: "Community Garden Project",
      description: "Students partnered with local residents to create a sustainable community garden that provides fresh produce to families in need.",
      image: "/snapdragon.jpg"
    },
    {
      title: "School Library Renovation",
      description: "Volunteers transformed an outdated library into a modern learning space with new books, computers, and comfortable reading areas.",
      image: "/cheeseboardlogo.jpeg"
    },
    {
      title: "Park Cleanup Initiative",
      description: "Monthly cleanups at local parks have removed over 500 pounds of litter and created safer spaces for families to enjoy.",
      image: "/goldbeancafelogo.png"
    },
    {
      title: "Food Drive Campaign",
      description: "Organized a successful food drive that collected over 2,000 pounds of non-perishable items for local food banks.",
      image: "/snapdragon.jpg"
    },
    {
      title: "Tutoring Program",
      description: "Established a free tutoring program for elementary school students, helping improve academic performance across the district.",
      image: "/cheeseboardlogo.jpeg"
    },
    {
      title: "Senior Center Support",
      description: "Weekly visits to senior centers providing companionship, technology assistance, and organizing recreational activities.",
      image: "/goldbeancafelogo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Component Test Page</h1>
          <p className="text-lg text-gray-600">Testing CardSection and Button components</p>
        </div>

        {/* Countdown Section */}
        <div className="mx-auto max-w-6xl px-6 mb-12">
          <div className="bg-blue-400 rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-white">
              Berkeley Project Day Countdown!
            </h2>
            <div className="flex justify-center">
              <Countdown
                targetDate={new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 29 * 60 * 1000 + 5 * 1000)} // Example: 29 days, 18 hours, 29 minutes, 5 seconds
                format="long"
                separator=""
                className=""
              />
            </div>
          </div>
        </div>
        
        {/* Schedule Section */}
        <div className="mx-auto max-w-4xl px-6 mb-12">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <Schedule
              title="Event Schedule"
              events={[
                {
                  time: "8:00 AM",
                  description: "Meet Site Leads(s) at Lower Sproul Plaza at your designated location",
                },
                {
                  time: "8:00-8:30 AM",
                  description: "Check in with your Site Leader. Grab a nametag and some food",
                },
                {
                  time: "8:30-9:00 AM",
                  description: "Opening Ceremony with speeches and performances",
                },
                {
                  time: "9:00 AM",
                  description: "Depart for work sites",
                },
                {
                  time: "9:30-10:00 AM",
                  description: "Arrive at site, follow safety/education orientation and icebreakers",
                },
                {
                  time: "10:00 AM",
                  description: "Volunteering begins!",
                },
                {
                  time: "By 4:00 PM",
                  description: "Work ends. Thank you for volunteering!",
                },
              ]}
            />
          </div>
        </div>

        {/* Button Section */}
        <div className="mx-auto max-w-4xl px-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Button Components</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button>Default Button</Button>
              <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
              <Button className="bg-green-600 hover:bg-green-700">Custom Style</Button>
            </div>
          </div>
        </div>
        
        {/* Card Section */}
        <CardSection cards={sampleCards} />
        
        {/* Carousel Section */}
        <div className="mx-auto max-w-6xl px-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center text-black">Carousel Component</h2>
            <div className="flex justify-center">
              <Carousel 
                className="w-full"
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                }}
                autoScroll={true}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {sampleCards.map((card, index) => (
                    <CarouselItem key={index} basis="basis-1/2 md:basis-1/3">
                      <div className="rounded-2xl bg-amber-100 shadow-sm p-6 hover:shadow-md transition-shadow h-96 flex flex-col overflow-hidden ml-2 md:ml-4">
                        {card.image && (
                          <img
                            src={card.image}
                            alt={card.title}
                            className="rounded-lg w-full h-40 object-cover mb-4 flex-shrink-0"
                          />
                        )}
                        <div className="flex flex-col flex-grow min-h-0">
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-600">{card.title}</h3>
                          <p className="text-black text-sm flex-grow overflow-hidden line-clamp-4">{card.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-4xl px-6 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Component Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">CardSection Component</h3>
                <ul className="space-y-1">
                  <li><strong>Props:</strong> cards (array of objects)</li>
                  <li><strong>Layout:</strong> 3 cards in responsive grid</li>
                  <li><strong>Styling:</strong> Amber background with hover effects</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Button Component</h3>
                <ul className="space-y-1">
                  <li><strong>Props:</strong> children, onClick, className</li>
                  <li><strong>Default:</strong> Blue button with hover effect</li>
                  <li><strong>Customizable:</strong> Accepts custom styles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
