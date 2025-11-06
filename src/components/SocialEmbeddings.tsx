"use client";

import React from "react";
import { TikTokEmbed, InstagramEmbed } from "react-social-media-embed";

/**
 * Displays BP's latest TikTok video, Instagram post, and newsletter.
 */

// need to hardcode these for now
const TOK_URL = "https://www.tiktok.com/@theberkeleyproject/video/7567922093875072270";
const INSTAGRAM_URL = "https://www.instagram.com/p/DQiVyGCkRQ8/";
const NEWSLETTER_IMAGE_URL = "/logo.png";

type Props = {
  tiktokUrl?: string;
  instagramUrl?: string;
  newsletterImageUrl?: string;
};

const SocialEmbeddings: React.FC<Props> = ({
  tiktokUrl = TOK_URL,
  instagramUrl = INSTAGRAM_URL,
  newsletterImageUrl = NEWSLETTER_IMAGE_URL,
}) => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Check Out Our Socials!
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          See the impact we&apos;re making in the Berkeley community through our social media
        </p>
      </div>

      {/* Embeds Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-items-center">
        {/* TikTok Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[450px] h-[700px] flex items-center justify-center bg-white rounded-2xl border-2 border-gray-300 shadow-sm overflow-auto">
            <div className="w-full h-full flex items-center justify-center p-2">
              <TikTokEmbed url={tiktokUrl} width={430} />
            </div>
          </div>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[450px] h-[700px] flex items-center justify-center bg-white rounded-2xl border-2 border-gray-300 shadow-sm overflow-auto">
            <div className="w-full h-full flex items-center justify-center p-2">
              <InstagramEmbed url={instagramUrl} width={430} />
            </div>
          </div>
        </div>

        {/* Newsletter Placeholder */}
        <div className="flex justify-center w-full">
          <div 
            className="w-[450px] h-[700px] bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl shadow-sm border-2 border-gray-300 flex flex-col items-center justify-center p-6"
          >
            <div className="text-center">
              <img
                src={newsletterImageUrl}
                alt="Newsletter coming soon"
                className="w-24 h-24 mx-auto mb-4 object-contain opacity-50"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Newsletter Coming Soon
              </h3>
              <p className="text-gray-500 text-sm">
                Stay tuned for updates from our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEmbeddings;

