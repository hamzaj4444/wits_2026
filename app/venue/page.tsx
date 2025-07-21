import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/icon-mapper"
import Image from "next/image"
import { getVenueData } from "@/lib/data"
import ExplorezFez from "@/components/explorez_fes"

export default async function VenuePage() {
  const data = await getVenueData()

  return (
    <div className="bg-zellige text-gray-900">
      {/* Full-page Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/fes1.jpeg"
            alt="Fez, Morocco"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Welcome to Fez</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 font-medium">Morocco's Cultural Capital Awaits You</h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto">
              Discover the magic of Fez during your conference visit. From ancient medinas to luxury riads, experience the perfect blend of history, culture, and modern comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#attractions">
                <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Icon name="Camera" className="w-5 h-5" /> Explore Attractions
                </button>
              </a>
              <a href="#hotels">
                <button className="bg-blue-700 text-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2">
                  <Icon name="MapPin" className="w-5 h-5" /> Find Hotels
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="container mx-auto px-4 py-20">
      

        {/* Venue and Travel */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white border hover:bg-gray-100 border-gray-300 hover:border-gray-900 shadow-sm transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-gray-700" />
                </div>
                Conference Venue
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <h3 className="text-gray-900 font-semibold mb-4 text-lg">{data.venue.name}</h3>
              <p className="mb-6 leading-relaxed">{data.venue.description}</p>
              <div className="space-y-3">
                {data.venue.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border hover:bg-gray-100 border-gray-300 hover:border-gray-900 shadow-sm transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="Plane" className="w-6 h-6 text-gray-700" />
                </div>
                Getting to Fez
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <h3 className="text-gray-900 font-semibold mb-4 text-lg">{data.travel.airport.name}</h3>
              <p className="mb-6 leading-relaxed">{data.travel.airport.description}</p>
              <div className="space-y-3">
                {data.travel.airport.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Accommodation and Practical Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20" id="hotels">
          <Card className="bg-white border hover:bg-gray-100 border-gray-300 hover:border-gray-900 shadow-sm transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="Hotel" className="w-6 h-6 text-gray-700" />
                </div>
                {data.accommodation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <p className="leading-relaxed">{data.accommodation.description}</p>
              <div className="space-y-4">
                {data.accommodation.hotels.map((hotel: any, index: number) => (
                  <div key={index} className="bg-gray-100 p-6 rounded-2xl border border-gray-300">
                    <h4 className="text-gray-900 font-semibold text-lg">
                      {hotel.name} ({hotel.stars}★)
                    </h4>
                    <p className="text-gray-600 mb-2">{hotel.description}</p>
                    <p className="text-gray-800 font-medium">Special rate: {hotel.rate}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border hover:bg-gray-100 border-gray-300 hover:border-gray-900 shadow-sm transition-all duration-200">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="Clock" className="w-6 h-6 text-gray-700" />
                </div>
                Practical Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-gray-700">
              <div className="grid grid-cols-1 gap-6">
                <div><h4 className="text-gray-900 font-semibold mb-2">Climate</h4><p>{data.practicalInfo.climate}</p></div>
                <div><h4 className="text-gray-900 font-semibold mb-2">Currency</h4><p>{data.practicalInfo.currency}</p></div>
                <div><h4 className="text-gray-900 font-semibold mb-2">Language</h4><p>{data.practicalInfo.language}</p></div>
                <div><h4 className="text-gray-900 font-semibold mb-2">Visa</h4><p>{data.practicalInfo.visa}</p></div>
                <div><h4 className="text-gray-900 font-semibold mb-2">Time Zone</h4><p>{data.practicalInfo.timezone}</p></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Explore Fez Component */}
        <ExplorezFez attractions={data.attractions} />

        {/* Culinary Experience */}
        <Card className="bg-white border hover:bg-gray-100 border-gray-300 hover:border-gray-900 shadow-sm transition-all duration-200">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                <Icon name="Utensils" className="w-6 h-6 text-gray-700" />
              </div>
              Culinary Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-8 text-lg leading-relaxed">{data.culinary.description}</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-gray-900 font-semibold text-lg">Traditional Dishes</h4>
                <ul className="space-y-3">
                  {data.culinary.dishes.map((dish: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-gray-900 font-semibold text-lg">Local Experiences</h4>
                <ul className="space-y-3">
                  {data.culinary.experiences.map((experience: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
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