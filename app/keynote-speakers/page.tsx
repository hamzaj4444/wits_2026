import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getKeynoteSpeakersData } from "@/lib/data"

export default async function KeynoteSpeakersPage() {
  const data = await getKeynoteSpeakersData()

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-gray-300 text-gray-700 bg-gray-100 px-6 py-2 mb-8 font-medium"
          >
            Keynote Speakers
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        <div className="space-y-16">
          {data.speakers.map((speaker: any, index: number) => (
            <Card
              key={index}
              className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-100 mb-20"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-12 p-12">
                  <div className="space-y-6">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                      <Image
                        src={speaker.image || "/placeholder.svg"}
                        alt={speaker.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-8">
                    <div>
                      <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{speaker.name}</h2>
                      <p className="text-xl text-gray-700 font-semibold mb-2">{speaker.title}</p>
                      <p className="text-gray-600 font-medium">{speaker.company}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keynote Topic</h3>
                      <p className="text-xl text-gray-700 italic font-medium">"{speaker.topic}"</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Biography</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{speaker.bio}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
