import fs from "fs"
import path from "path"

export async function getHomeData() {
  const filePath = path.join(process.cwd(), "data", "home.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getKeynoteSpeakersData() {
  const filePath = path.join(process.cwd(), "data", "keynote-speakers.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getCallForPapersData() {
  const filePath = path.join(process.cwd(), "data", "call-for-papers.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getCommitteesData() {
  const filePath = path.join(process.cwd(), "data", "committees.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getProgramData() {
  const filePath = path.join(process.cwd(), "data", "program.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getVenueData() {
  const filePath = path.join(process.cwd(), "data", "venue.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getRegistrationData() {
  const filePath = path.join(process.cwd(), "data", "registration.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}

export async function getContactData() {
  const filePath = path.join(process.cwd(), "data", "contact.json")
  const fileContents = fs.readFileSync(filePath, "utf8")
  return JSON.parse(fileContents)
}
