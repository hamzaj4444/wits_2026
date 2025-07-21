import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon-mapper";
import { getCallForPapersData } from "@/lib/data";

export default async function CallForPapersPage() {
  const data = await getCallForPapersData();

  return (
    <div className="min-h-screen bg-white pt-20 text-gray-800">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-gray-900 text-gray-700 bg-gray-100 px-6 py-2 mb-8 font-medium"
          >
            Call for Papers
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-300 mb-20">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="FileText" className="w-6 h-6 text-gray-600" />
                </div>
                Submission Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-gray-900 font-semibold mb-4 text-lg">
                  Paper Format
                </h3>
                <ul className="space-y-3">
                  {data.submissionGuidelines.paperFormat.map(
                    (item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold mb-4 text-lg">
                  Review Process
                </h3>
                <ul className="space-y-3">
                  {data.submissionGuidelines.reviewProcess.map(
                    (item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-300 mb-20">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
                <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <Icon name="Calendar" className="w-6 h-6 text-gray-600" />
                </div>
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.importantDates.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <span className="text-gray-700 font-medium">
                    {item.event}
                  </span>
                  <span className="text-gray-900 font-semibold">{item.date}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-300 mb-20">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                <Icon name="Users" className="w-6 h-6 text-gray-600" />
              </div>
              Research Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We welcome submissions on all aspects of information technologies
              and systems, including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.topics.map((topic: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border hover:bg-gray-200 border-gray-400 hover:border-gray-900 shadow-sm transition-all duration-300 mb-20">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-3 text-2xl">
              <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center">
                <Icon name="Award" className="w-6 h-6 text-gray-600" />
              </div>
              Awards & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-gray-700">
            {data.awards.map((award: any, index: number) => (
              <div key={index}>
                <h3 className="text-gray-900 font-semibold mb-3 text-lg">
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
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
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
          <p className="text-gray-600 mt-6 text-lg">
            Submission system is now open. Click above to submit your paper.
          </p>
        </div>
      </div>
    </div>
  );
}
