import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon-mapper"
import { getProgramData } from "@/lib/data"

export default async function ProgramPage() {
  const data = await getProgramData()

  const getEventIcon = (type: string) => {
    switch (type) {
      case "keynote":
        return <Icon name="Users" className="w-5 h-5" />
      case "session":
        return <Icon name="Users" className="w-5 h-5" />
      case "break":
        return <Icon name="Coffee" className="w-5 h-5" />
      case "social":
        return <Icon name="Utensils" className="w-5 h-5" />
      default:
        return <Icon name="Clock" className="w-5 h-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "border-l-blue-500 bg-blue-950/20"
      case "session":
        return "border-l-green-500 bg-green-950/20"
      case "break":
        return "border-l-orange-500 bg-orange-950/20"
      case "social":
        return "border-l-purple-500 bg-purple-950/20"
      case "panel":
        return "border-l-cyan-500 bg-cyan-950/20"
      case "industry":
        return "border-l-yellow-500 bg-yellow-950/20"
      case "poster":
        return "border-l-pink-500 bg-pink-950/20"
      case "ceremony":
        return "border-l-red-500 bg-red-950/20"
      default:
        return "border-l-slate-500 bg-slate-950/20"
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Conference Program
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

     

        {/* Schedule */}
        <div className="space-y-16">
          {data.schedule.map((day: any, dayIndex: number) => (
            <Card key={dayIndex} className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-3xl tracking-tight">{day.day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {day.events.map((event: any, eventIndex: number) => (
                  <div key={eventIndex} className={`border-l-4 pl-8 py-6 rounded-r-2xl ${getEventColor(event.type)}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex items-center gap-4 min-w-[140px]">
                        <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                          {getEventIcon(event.type)}
                        </div>
                        <span className="text-slate-300 font-mono font-medium">{event.time}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                        {event.speaker && <p className="text-slate-300 mb-2">Speaker: {event.speaker}</p>}
                        {event.papers && <p className="text-slate-400 mb-2">{event.papers} papers</p>}
                        <div className="flex items-center gap-2 text-slate-400">
                          <Icon name="MapPin" className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Session Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Technical Sessions</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Each session includes 6 paper presentations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>15 minutes per presentation + 5 minutes Q&A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Session chairs will moderate discussions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Parallel sessions allow diverse topic coverage</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Keynote Presentations</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>45-minute presentations by industry leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>15 minutes for audience Q&A</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Simultaneous translation available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Live streaming for remote participants</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Networking Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-slate-300">
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Coffee Breaks</h4>
                <p className="leading-relaxed">
                  Extended 30-minute breaks with refreshments and networking space in the Exhibition Hall.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Social Events</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Welcome Reception at Hotel Sahrai</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Conference Dinner at traditional Riad Fes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Poster session with light refreshments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>Farewell reception in the main lobby</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4 text-lg">Exhibition</h4>
                <p className="leading-relaxed">
                  Industry sponsors will showcase latest technologies and solutions throughout the conference.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
