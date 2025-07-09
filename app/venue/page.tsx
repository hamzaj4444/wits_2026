import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/icon-mapper"
import Image from "next/image"
import { getVenueData } from "@/lib/data"
import ExplorezFez from "@/components/explorez_fes"

export default async function VenuePage() {
  const data = await getVenueData()

  return (
    <div className="min-h-screen bg-slate-950 pt-0 scroll-smooth">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="relative mb-20 rounded-3xl overflow-hidden border border-slate-800">
          <div className="absolute inset-0">
            <Image
              src="/images/fes1.jpeg"
              alt="Fez, Morocco"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center py-32 px-6 sm:py-56 sm:px-4">
            <div className="mx-auto max-w-md sm:max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Welcome to Fez</h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 font-medium">Morocco's Cultural Capital Awaits You</h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 sm:mb-12">
                Discover the magic of Fez during your conference visit. From ancient medinas to luxury riads, experience the perfect blend of history, culture, and modern comfort.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#attractions" className="w-full sm:w-auto">
                  <button className="w-full bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                    <Icon name="Camera" className="w-5 h-5" />
                    Explore Attractions
                  </button>
                </a>
                <a href="#hotels" className="w-full sm:w-auto">
                  <button className="w-full bg-slate-900/70 text-white border border-slate-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-800/70 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                    <Icon name="MapPin" className="w-5 h-5" />
                    Find Hotels
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Venue and Travel */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-slate-300" />
                </div>
                Conference Venue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">{data.venue.name}</h3>
                <p className="mb-6 leading-relaxed">{data.venue.description}</p>
                <div className="space-y-3">
                  {data.venue.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Plane" className="w-6 h-6 text-slate-300" />
                </div>
                Getting to Fez
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">{data.travel.airport.name}</h3>
                <p className="mb-6 leading-relaxed">{data.travel.airport.description}</p>
                <div className="space-y-3">
                  {data.travel.airport.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accommodation and Practical Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20" id="hotels">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Hotel" className="w-6 h-6 text-slate-300" />
                </div>
                {data.accommodation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <p className="leading-relaxed">{data.accommodation.description}</p>
              <div className="space-y-4">
                {data.accommodation.hotels.map((hotel: any, index: number) => (
                  <div key={index} className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
                    <h4 className="text-white font-semibold text-lg">
                      {hotel.name} ({hotel.stars}★)
                    </h4>
                    <p className="text-slate-400 mb-2">{hotel.description}</p>
                    <p className="text-white font-medium">Special rate: {hotel.rate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-slate-300" />
                </div>
                Practical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300">
              <div className="grid grid-cols-1 gap-6">
                <div><h4 className="text-white font-semibold mb-2">Climate</h4><p>{data.practicalInfo.climate}</p></div>
                <div><h4 className="text-white font-semibold mb-2">Currency</h4><p>{data.practicalInfo.currency}</p></div>
                <div><h4 className="text-white font-semibold mb-2">Language</h4><p>{data.practicalInfo.language}</p></div>
                <div><h4 className="text-white font-semibold mb-2">Visa</h4><p>{data.practicalInfo.visa}</p></div>
                <div><h4 className="text-white font-semibold mb-2">Time Zone</h4><p>{data.practicalInfo.timezone}</p></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ✅ Explore Fez Component */}
        <ExplorezFez attractions={data.attractions} />

        {/* Culinary Experience */}
        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="Utensils" className="w-6 h-6 text-slate-300" />
              </div>
              Culinary Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <p className="mb-8 text-lg leading-relaxed">{data.culinary.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Traditional Dishes</h4>
                <ul className="space-y-3">
                  {data.culinary.dishes.map((dish: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg">Local Experiences</h4>
                <ul className="space-y-3">
                  {data.culinary.experiences.map((experience: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{experience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
