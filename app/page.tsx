import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon-mapper";
import Image from "next/image";
import Link from "next/link";
import { getHomeData } from "@/lib/data";
import { ConferenceHighlightsSlider } from "@/components/ConferenceHighlightsSlider";

export default async function HomePage() {
  const data = await getHomeData();

  return (
<div className="min-h-screen bg-white text-gray-900">
  {/* Hero Section */}
  <section className="relative overflow-hidden min-h-screen bg-gray-100">
    <div className="absolute inset-0 z-0">
      <img
        src="/fes.jpg"
        alt="Event Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="absolute inset-0 z-0 bg-black/30" />

    <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 h-full flex items-center">
      <div className="text-center w-full max-w-6xl mx-auto">
        <div className="inline-block p-8 md:p-12 space-y-8 animate-fade-in">
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-medium">
              {data.hero.subtitle}
            </p>
          </div>

          {/* Add margin here to move the buttons further down */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-24 pt-6">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-blue-700 text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Link href="/call-for-papers">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
     {/* About us */}
      <section className="py-32 bg-zellige relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              About WITS 2026
            </h2>
            <Card className="bg-white border hover:bg-gray-100 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-100 mb-20">
  <CardContent className="p-8 space-y-6 text-gray-800 text-left text-lg leading-relaxed">
    <p>
       <strong>The 9th Annual Workshop on Information Technologies and Systems (WITS 2026) will take place in August 20-22 2026, co-located with ICIS. Building on the success of the last editions :</strong> 
      <a href="https://wits2014.science-conf.net/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2014</a>,{" "}
      <a href="https://wits2015.science-conf.net/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2015</a>,{" "}
      <a href="https://wits2016.science-conf.net/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2016</a>,{" "}
      <a href="https://wits2017.science-conf.net/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2017</a>,{" "}
      <a href="https://wits2019.science-conf.net/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2019</a>,{" "}
      <a href="https://wits2020.science-conf.net/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2020</a>,{" "}
      <a href="https://wits2022.science-conf.net/home#/committees" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2022</a> as well as{" "}
      <a href="https://www.wits2023.science-conf.net/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">WITS 2023</a> , the 2026 edition aims to address emerging challenges at the intersection of technology, systems, and society.
    </p>
    <p>
      Join scholars and professionals in sharing new theories, methods, and applications. Sessions will include full papers, posters, demos, dissertation proposals, and an industry forum.
    </p>
    <p>
      WITS 2026 continues the tradition of excellence, dialogue, and community fostered by past events—don’t miss the opportunity to contribute to shaping the future of information systems.
    </p>
  </CardContent>
</Card>

          </div>

        </div>
      </section>
      {/* Important Dates */}
      <section className="py-16 bg-zellige relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Important Dates
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Mark your calendar for these key milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.importantDates.map((item: any, index: number) => (
              <Card
                key={index}
                className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-100 mb-20"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                    <Icon name={item.icon} className="w-8 h-8 text-gray-200" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-zellige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Conference Information
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Everything you need to know about WITS 2026
            </p>
          </div>

          {/* Organized by USMBA in Card */}
          <div className="max-w-md mx-auto mb-16 relative">
            <div
              className="absolute inset-0 bg-[url('/1.png')] bg-cover bg-center opacity-20 rounded-xl"
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <Card className="bg-white border hover:bg-gray-400 border-gray-900 shadow-sm transition-all duration-100 mb-20">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4 w-full flex justify-center">
                  <Image
                    src="/logo_usmba.png"
                    alt="USMBA Logo"
                    width={1300}
                    height={1100}
                    className="h-auto w-full max-w-[180px] md:max-w-[1220px]"
                    priority
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <span className="text-gray-700 font-medium text-center text-lg">
                  Organized by USMBA
                </span>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.quickLinks.map((item: any, index: number) => (
              <Link key={index} href={item.href}>
                <Card className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-100 mb-20">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                      <Icon
                        name={item.icon}
                        className="w-8 h-8 text-gray-200"
                      />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-zellige relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Sponsors
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Proudly supported by leading organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data.sponsors.map((sponsor: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-400 rounded-2xl p-8 hover:bg-gray-300 hover:border-gray-900 transition-all duration-300 shadow-sm group flex items-center justify-center"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="w-full h-16 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview with Slide Effect */}
      <section className="py-16 bg-zellige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Conference Highlights
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Moments from previous WITS conferences
            </p>
          </div>

          <ConferenceHighlightsSlider highlights={data.conferenceHighlights} />
        </div>
      </section>
    </div>
  );
}
