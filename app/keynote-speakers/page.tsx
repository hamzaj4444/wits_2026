import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getKeynoteSpeakersData } from "@/lib/data"

export default async function KeynoteSpeakersPage() {
  const data = await getKeynoteSpeakersData()

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Keynote Speakers
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        <div className="space-y-16">
          {data.speakers.map((speaker: any, index: number) => (
            <Card
              key={index}
              className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-3 gap-12 p-12">
                  <div className="space-y-6">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
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
                      <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">{speaker.name}</h2>
                      <p className="text-xl text-slate-300 font-semibold mb-2">{speaker.title}</p>
                      <p className="text-slate-400 font-medium">{speaker.company}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Keynote Topic</h3>
                      <p className="text-xl text-slate-300 italic font-medium">"{speaker.topic}"</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Biography</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">{speaker.bio}</p>
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
