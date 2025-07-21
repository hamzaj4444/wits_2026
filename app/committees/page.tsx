import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon-mapper"
import { getCommitteesData } from "@/lib/data"

export default async function CommitteesPage() {
  const data = await getCommitteesData()

  const getCommitteeIcon = (committeeKey: string) => {
    const iconMap: { [key: string]: string } = {
      honoraryCommittee: "Users",
      organizingCommittee: "Users",
      steeringCommittee: "Users",
      specialIssuesCommittee: "Users",
      internationalCommittee: "Users",
      keynoteCommittee: "Users",
      technicalCommittee: "Users",
      financialCommittee: "Users",
      juniorCommittee: "Users",
      webTeam: "Award"
    }
    return iconMap[committeeKey] || "Users"
  }

  const formatCommitteeName = (key: string) => {
    const nameMap: { [key: string]: string } = {
      honoraryCommittee: "Honorary Committee",
      organizingCommittee: "Organizing Committee",
      steeringCommittee: "Steering Committee",
      specialIssuesCommittee: "Special Issues Committee",
      internationalCommittee: "International Committee",
      keynoteCommittee: "Keynote Committee",
      technicalCommittee: "Technical Committee",
      financialCommittee: "Financial Committee",
      juniorCommittee: "Junior Committee",
      webTeam: "Web Team"
    }
    return nameMap[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-gray-300 text-gray-700 bg-gray-100 px-6 py-2 mb-8 font-medium"
          >
            Conference Committees
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        {Object.entries(data.committees).map(([committeeKey, members]) => {
          const membersArray = Array.isArray(members) ? members : []

          return (
            <div key={committeeKey} className="mb-20">
              <Card className="bg-white border border-gray-900 mb-8 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center gap-3 text-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                      <Icon name={getCommitteeIcon(committeeKey)} className="w-6 h-6 text-gray-700" />
                    </div>
                    {formatCommitteeName(committeeKey)}
                  </CardTitle>
                </CardHeader>
    
              </Card>

              {/* Compact 2-column layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12 text-gray-800">
                {membersArray.map((member: any, index: number) => (
                  <div key={index}>
                    <strong className="uppercase">{member.name}</strong>, {member.affiliation}
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        <Card className="bg-white border border-gray-200 shadow-sm mt-20">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Join Our Team</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              We're always looking for dedicated volunteers to help make WITS 2026 a memorable experience. Join our
              community of researchers and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700 bg-gray-100 px-6 py-3 text-base font-medium"
              >
                Student Volunteers Welcome
              </Badge>
              <Badge
                variant="outline"
                className="border-gray-300 text-gray-700 bg-gray-100 px-6 py-3 text-base font-medium"
              >
                Professional Development Opportunities
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
