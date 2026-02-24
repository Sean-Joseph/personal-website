export type Project = {
    id: number;
    title: string;
    description: string;
    image: string[];
    techUsed:string[];
    liveUrl: string;
    githubUrl: string;
    side: string;
  };

  export const projects: Project[] = [
    {
        id: 1,
        title: "Mortagage Calculator App (2026)",
        description: "This website was created to allow a DJ hailing from Philadelphia an opportunity to have a space to share his craft with the digital world.",
        image: [
          '/projects/mortgage-calculator/1.png', 
          '/projects/mortgage-calculator/2.png',
          '/projects/mortgage-calculator/3.png'
        ],
        techUsed: ['React', 'Javascript', 'GSAP'],
        liveUrl: "https://calculatemortgageapp.com/",
        githubUrl: "https://github.com/Sean-Joseph/mortgage-calculator",
        side: 'left'
      },
      {
        id: 2,
        title: "DJ Cousin Mike (2026)",
        description: "This website was created to allow a DJ hailing from Philadelphia an opportunity to have a space to share his craft with the digital world.",
        image: [
          '/projects/dj-mike/1.png',
          '/projects/dj-mike/2.png',
          '/projects/dj-mike/3.png'],
        techUsed:  ['React', 'Javascript', 'GSAP'],
        liveUrl: "https://djcousinmike.com/",
        githubUrl: "",
        side: 'right'
      },
      {
        id: 3,
        title: "Mais Noir (2025)",
        description: "Mais noir is a filter that takes the ostensibly objective SERP (search engine results pages) we, digital citizens, are all too familiar with and reconciles it with an interpretation of anti-blackness that is real, not theoretical.",
        image: [
          '/projects/mais-noir/1.png', 
          '/projects/mais-noir/2.png', 
          '/projects/mais-noir/3.png'],
        techUsed:  ['React', 'GSAP', 'APIs'],
        liveUrl: "https://extraordinary-lokum-ab20a1.netlify.app/",
        githubUrl: "",
        side: 'right'
      },
      {
        id: 4,
        title: "Joseph & Associates (Coming Soon)",
        description: "This website was created to provide an online presence for this litigator in the Philadelphia and surrounding area. He came to me with nothing but a logo design, and I took that design and transformed it into a fully fleshed out website.",
        image: [
          '/projects/joseph-associates/1.png',
          '/projects/joseph-associates/2.png',
          '/projects/joseph-associates/3.png'],
        techUsed:  ['HTML', 'CSS', 'Javascript'],
        liveUrl: "http://xpi.e05.mytemp.website/",
        githubUrl: "",
        side: 'right'
      }
]