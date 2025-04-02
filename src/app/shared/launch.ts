export interface Launch {
  flightNumber: string
  missionName: string
  missionPatch: any
  missionDetails: string
  launchYear: string
  rocketDetails: {
    rocketName: string,
    rocketType: string
  }
  links: {
    article: string,
    wiki: string,
    patch: string
  }
}
