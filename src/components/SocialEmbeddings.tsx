"use client";

import React, { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
              {isMounted ? (
                <TikTokEmbed url={tiktokUrl} width={430} />
              ) : (
                <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg" />
              )}
            </div>
          </div>
        </div>

        {/* Newsletter Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[450px] h-[700px] flex items-center justify-center bg-white rounded-2xl border-2 border-gray-300 shadow-sm overflow-hidden">
            <iframe
              src={newsletterUrl}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Berkeley Project Newsletter"
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Instagram Embed */}
        <div className="flex justify-center w-full">
          <div className="w-[450px] h-[700px] flex items-center justify-center bg-white rounded-2xl border-2 border-gray-300 shadow-sm overflow-auto">
            <div className="w-full h-full flex items-center justify-center p-2">
              {isMounted ? (
                <InstagramEmbed url={instagramUrl} width={430} />
              ) : (
                <div className="animate-pulse bg-gray-200 w-full h-full rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialEmbeddings;

