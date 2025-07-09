import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Icon } from "@/components/icon-mapper"
import { getCommitteesData } from "@/lib/data"

export default async function CommitteesPage() {
  const data = await getCommitteesData()

  // Helper function to get appropriate icon for each committee
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

  // Helper function to format committee names for display
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



  // Helper function to determine grid columns based on committee size
  const getGridColumns = (memberCount: number) => {
    if (memberCount <= 3) return "md:grid-cols-2 lg:grid-cols-3"
    if (memberCount <= 6) return "md:grid-cols-2 lg:grid-cols-3"
    return "md:grid-cols-2 lg:grid-cols-4"
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Conference Committees
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">{data.title}</h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">{data.description}</p>
        </div>

        {/* Render all committees dynamically */}
        {Object.entries(data.committees).map(([committeeKey, members]) => {
          // Ensure members is an array
          const membersArray = Array.isArray(members) ? members : [];
          
          return (
            <div key={committeeKey} className="mb-20">
              <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm mb-12">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3 text-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center">
                      <Icon name={getCommitteeIcon(committeeKey)} className="w-6 h-6 text-slate-300" />
                    </div>
                    {formatCommitteeName(committeeKey)}
                  </CardTitle>
                </CardHeader>
                {committeeKey === 'technicalCommittee' && (
                  <CardContent>
                    <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                      Our international technical committee consists of leading experts from around the world who ensure the
                      highest quality of research presentations.
                    </p>
                  </CardContent>
                )}
              </Card>

              {/* Render members with name and affiliation only */}
              <div className={`grid ${getGridColumns(membersArray.length)} gap-6`}>
                {membersArray.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 p-6 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 border border-slate-800"
                  >
                    <h4 className="text-white font-semibold mb-2">{member.name}</h4>
                    <p className="text-slate-400 text-sm">{member.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}

        {/* Call for Volunteers */}
        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Join Our Team</h2>
            <p className="text-slate-400 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              We're always looking for dedicated volunteers to help make WITS 2026 a memorable experience. Join our
              community of researchers and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Badge
                variant="outline"
                className="border-slate-700 text-slate-300 bg-slate-800/50 px-6 py-3 text-base font-medium"
              >
                Student Volunteers Welcome
              </Badge>
              <Badge
                variant="outline"
                className="border-slate-700 text-slate-300 bg-slate-800/50 px-6 py-3 text-base font-medium"
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