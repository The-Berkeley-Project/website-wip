"use client";

import React from "react";
import { Calendar } from "lucide-react";

export interface ScheduleEvent {
  time: string;
  description: string;
}

export interface ScheduleProps {
  title?: string;
  events: ScheduleEvent[];
  showIcon?: boolean;
  className?: string;
}

export function Schedule({
  title = "Event Schedule",
  events,
  showIcon = true,
  className = "",
}: ScheduleProps) {
  return (
    <div className={`schedule ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-10">
        {showIcon && (
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-gray-700" />
          </div>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-2">
        {/* Vertical line */}
        <div className="absolute left-[110px] md:left-[130px] top-0 bottom-0 w-px bg-gray-200"></div>

        {/* Events */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="relative flex gap-6 md:gap-10">
              {/* Time column */}
              <div className="w-[110px] md:w-[130px] flex-shrink-0">
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] md:-left-[25px] top-0.5 w-4 h-4 bg-white border-2 border-gray-400 rounded-full shadow-sm"></div>
                  <p className="text-sm md:text-base font-semibold text-gray-900 tracking-tight">
                    {event.time}
                  </p>
                </div>
              </div>

              {/* Description column */}
              <div className="flex-1 pt-0.5">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

