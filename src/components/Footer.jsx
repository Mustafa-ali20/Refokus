import React from "react";

function Footer() {
  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Twitter (x?)", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];
  const siteMap = [
    { name: "Home" },
    { name: "Work" },
    { name: "Career" },
    { name: "Contact" },
  ];

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-26">
        <div className="basis-1/2 hidden lg:block">
          <h1 className="text-[12rem] text-white tracking-tight leading-none font-semibold">
            refokus.
          </h1>
        </div>

        <div className="basis-full lg:basis-1/2 flex flex-col gap-10">
          <div className="flex gap-10">
            <div className="w-1/2">
              <h4 className="text-zinc-300 mb-4">Socials</h4>
              {socialLinks.map((elem, i) => (
                <a
                  key={i}
                  className="block text-zinc-600 mt-1"
                  href={elem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {elem.name}
                </a>
              ))}
            </div>

            <div className="w-1/2">
              <h4 className="text-zinc-300 mb-4">Sitemap</h4>
              {siteMap.map((elem, i) => (
                <a
                  key={i}
                  className="block text-zinc-400 items-center mt-1"
                  href={elem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {elem.name}
                </a>
              ))}
            </div>

            <div className="lg:basis-1/2 hidden lg:block">
              <p className="text-zinc-100 text-right">
                Refokus is a pioneering digital agency by design and empowered
                by technology.
              </p>
              <img
                className="mt-7"
                src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
