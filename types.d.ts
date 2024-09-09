export interface JobOfferSkill {
  name: string
  yearsOfExperiencie: string
}

export interface JobOffer {
  title: string
  content: string
  salary: string
  skills: JobOfferSkill[]
}
