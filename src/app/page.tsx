"use client";

import SocialEmbeddings from "@/components/SocialEmbeddings";
import { Countdown } from "@/components/Countdown";
import { Schedule } from "@/components/Schedule";
import { MapPin, Bus, Shirt } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-64 px-4 min-h-[600px]">
        {/* Hero content will go here */}
      </section>
      
      {/* Blue Banner with Countdown */}
      <section className="relative mt-16">
        <div className="w-full h-48 bg-blue-400 rounded-t-[3rem]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-white">
            Berkeley Project Day Countdown!
          </h2>
          <div className="scale-75 md:scale-90">
            <Countdown
              targetDate={new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 29 * 60 * 1000 + 5 * 1000)}
              format="long"
            />
          </div>
        </div>
      </section>
      
      {/* What to Expect on BP Day Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            What to Expect on BP Day
          </h2>
          
          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Meeting Location Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">Meeting Location</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Lower Sproul Plaza at 8:00 AM SHARP. Stay the whole day.
              </p>
            </div>
            
            {/* Transportation Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Bus className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">Transportation</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Travel by foot or AC transit. Bring Cal Student IDs and AC transit cards
              </p>
            </div>
            
            {/* What to Wear Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Shirt className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">What to Wear</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Closed toe shoes and clothes you don&apos;t mind getting dirty. Rain or shine!
              </p>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="w-full mb-16">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              autoScroll={true}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {[
                  "/photos/fa24/fa24_1.jpeg",
                  "/photos/fa24/fa24_2.JPG",
                  "/photos/fa24/fa24_3.jpeg",
                  "/photos/fa24/fa24_4.JPG",
                  "/photos/fa24/fa24_5.JPG",
                  "/photos/fa24/fa24_6.jpeg",
                  "/photos/fa24/fa24_7.JPG",
                  "/photos/fa24/fa24_8.jpeg",
                  "/photos/fa24/fa24_9.JPG",
                  "/photos/fa24/fa24_10.jpeg",
                ].map((image, index) => (
                  <CarouselItem key={index} basis="basis-1/2 md:basis-1/3 lg:basis-1/5">
                    <div className="relative aspect-square rounded-lg overflow-hidden ml-2 md:ml-4">
                      <Image
                        src={image}
                        alt={`Berkeley Project Day ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          
          {/* Event Schedule */}
          <div className="w-full mt-16 mb-8">
            <div className="mx-auto max-w-4xl px-6">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200">
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
          </div>
        </div>
      </section>
      
      <SocialEmbeddings />
    </div>
  );
}
