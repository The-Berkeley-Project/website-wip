"use client";

import React from "react";
import { TikTokEmbed, InstagramEmbed } from "react-social-media-embed";

/**
 * Displays BP's latest TikTok video, Instagram post, and newsletter.
 */

// need to hardcode these for now
const TOK_URL = "https://www.tiktok.com/@theberkeleyproject/video/7567922093875072270";
const INSTAGRAM_URL = "https://www.instagram.com/p/DQiVyGCkRQ8/";
const NEWSLETTER_URL = "https://mailchi.mp/1bba304049d5/wvsb2orl0s-14191777?e=d52d57f621";

type Props = {
  tiktokUrl?: string;
  instagramUrl?: string;
  newsletterUrl?: string;
};

const SocialEmbeddings: React.FC<Props> = ({
  tiktokUrl = TOK_URL,
  instagramUrl = INSTAGRAM_URL,
  newsletterUrl = NEWSLETTER_URL,
}) => {
  return (
    <section className="w-full py-3 px-4 bg-white">
      {/* Header Section */}
      <div className="text-center mb-3">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          Check Out Our Socials!
        </h2>
        <p className="text-xs text-gray-600 max-w-2xl mx-auto">
          See the impact we&apos;re making in the Berkeley community through our social media
        </p>
      </div>

      {/* Embeds Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 items-start justify-items-center">
        {/* TikTok Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[330px] h-[400px] flex items-center justify-center bg-white rounded-lg border border-gray-300 shadow-sm overflow-auto">
            <div className="w-full h-full flex items-center justify-center scale-75 origin-center">
              <TikTokEmbed url={tiktokUrl} width={325} />
            </div>
          </div>
        </div>

        {/* Newsletter Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[280px] h-[400px] flex items-center justify-center bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
            <iframe
              src={newsletterUrl}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Berkeley Project Newsletter"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[330px] h-[400px] flex items-center justify-center bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
            <div className="w-full h-full flex items-center justify-center scale-75 origin-center">
              <InstagramEmbed url={instagramUrl} width={330} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEmbeddings;

