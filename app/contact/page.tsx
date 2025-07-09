import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/icon-mapper";
import { getContactData } from "@/lib/data";

export default async function ContactPage() {
  const data = await getContactData();

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <Badge
            variant="outline"
            className="border-slate-700 text-slate-400 bg-slate-900/50 px-6 py-2 mb-8 font-medium backdrop-blur-sm"
          >
            Contact Information
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto font-medium">
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Conference Location */}
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
                <h3 className="text-white font-semibold mb-3 text-lg">
                  {data.venue.name}
                </h3>
                <p className="mb-6 leading-relaxed">{data.venue.address}</p>

                <div className="bg-slate-800/50 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.703607686736!2d-4.99445272438852!3d33.99650417317796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b9a6b9ab9e1%3A0x64ee3e19ad13f28b!2sNational%20School%20of%20Applied%20Sciences!5e1!3m2!1sen!2sma!4v1751740889183!5m2!1sen!2sma"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <div className="space-y-3 mt-6">
                  {data.venue.details.map((detail: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Facts */}
          <div className="space-y-8">
            <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-slate-300">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Conference Dates
                    </h4>
                    <p>{data.quickFacts.dates}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      Expected Attendees
                    </h4>
                    <p>{data.quickFacts.attendees}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Time Zone</h4>
                    <p>{data.quickFacts.timezone}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Language</h4>
                    <p>{data.quickFacts.language}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {data.contacts.map((contact: any, index: number) => (
            <Card
              key={index}
              className="bg-slate-900/30 border-slate-800 hover:border-slate-700 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-slate-800 flex items-center justify-center">
                  <Icon
                    name={contact.icon}
                    className="w-8 h-8 text-slate-300"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {contact.title}
                </h3>
                <p className="text-slate-300 mb-2">{contact.name}</p>
                <p className="text-slate-400 text-sm mb-4">{contact.role}</p>
                <div className="space-y-2">
                  {contact.email && (
                    <a
                      href={`mailto:${contact.email}`}
                      className="block text-white hover:text-slate-300 transition-colors font-medium"
                    >
                      {contact.email}
                    </a>
                  )}
                  {contact.phone && (
                    <p className="text-slate-400 text-sm">{contact.phone}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="bg-slate-900/30 border-slate-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-3xl tracking-tight">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 text-slate-300">
            {data.faq.map((item: any, index: number) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-3 text-lg">
                  {item.question}
                </h3>
                <p className="leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
