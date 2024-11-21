export enum Websites {
  instagram,
  linkedIn,
  deviantArt,
}

export function navToExternalWebsite(website: Websites): void {
  let link: string;

  switch (website) {
    case Websites.instagram:
      link = 'https://www.instagram.com/irenei.designs/';
      break;
    case Websites.linkedIn:
      link = 'https://www.linkedin.com/in/irene-indiran/';
      break;
    default:
      break;
  }

  window.open(link, '_blank');
}
