// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'yodiyo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/yodiyo/yodiyo.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/yodiyo/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['yodiyo/my-project1', 'yodiyo/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['yodiyo/gitprofile', 'yodiyo/pandora'], // List of repository names to display. example: ['yodiyo/my-project1', 'yodiyo/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Yorick Brown', description: '', imageURL: '' },
  social: {
    linkedin: 'theyoricktouch',
    x: 'kciroy',
    mastodon: 'yodiyo@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'yodiyo',
    dev: 'yodiyo',
    stackoverflow: '2879440/yorick', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.theyoricktouch.com',
    phone: '',
    email: 'info@theyoricktouch.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'MySQL',
    'Git',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'YB Digital',
      position: 'Lead Developer',
      from: '2007',
      to: 'Present',
      companyLink: 'https://whybedigital.com',
    },
    {
      company: 'Angry Creative',
      position: 'Senior Developer',
      from: 'March 2022',
      to: 'May 2024',
      companyLink: 'https://angrycreative.com',
    },
  ],
  certifications: [
    {
      name: 'BSc Politics & International Relations',
      body: 'University of Southampton',
      year: '1989-1992',
      link: 'https://www.southampton.ac.uk/study/subjects/politics-international-relations',
    },
  ],
  educations: [
    {
      institution: 'University of Southampton',
      degree: 'Degree',
      from: '1989',
      to: '1992',
    },
  ],
  publications: [
    {
      title: 'The Best Book of Urban Myths Ever',
      conferenceName: '',
      journalName: '',
      authors: 'Yorick Brown',
      link: 'https://example.com',
      description:
        '500 urban myths and legends you might have heard from a friend of a friend.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
      class="text-primary" href="https://github.com/yodiyo/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
