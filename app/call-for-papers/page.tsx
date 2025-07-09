import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon-mapper";
import { getCallForPapersData } from "@/lib/data";

export default async function CallForPapersPage() {
  const data = await getCallForPapersData();

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Call for Papers
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="FileText" className="w-6 h-6 text-slate-300" />
                </div>
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-slate-300">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Paper Format
                </h3>
                <ul className="space-y-3">
                  {data.submissionGuidelines.paperFormat.map(
                    (item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Review Process
                </h3>
                <ul className="space-y-3">
                  {data.submissionGuidelines.reviewProcess.map(
                    (item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon name="Calendar" className="w-6 h-6 text-slate-300" />
                </div>
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.importantDates.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-slate-800 last:border-b-0"
                >
                  <span className="text-slate-300 font-medium">
                    {item.event}
                  </span>
                  <span className="text-white font-semibold">{item.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm mb-20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="Users" className="w-6 h-6 text-slate-300" />
              </div>
              Research Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
              We welcome submissions on all aspects of information technologies
              and systems, including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.topics.map((topic: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-300">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm mb-20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                <Icon name="Award" className="w-6 h-6 text-slate-300" />
              </div>
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-slate-300">
            {data.awards.map((award: any, index: number) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-3 text-lg">
                  {award.title}
                </h3>
                <p className="leading-relaxed">{award.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
            asChild
          >
            <a
              href="https://easychair.org/conferences/?conf=yourconference"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Your Paper via EasyChair
            </a>
          </Button>
          <p className="text-slate-400 mt-6 text-lg">
            Submission system is now open. Click above to submit your paper.
          </p>
        </div>
      </div>
    </div>
  );
}
