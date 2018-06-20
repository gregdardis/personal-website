import lifterLogImage from
  '../../images/lifter log feature graphic.jpg';
import stockMarketSearchImage from
  '../../images/stock market search example.png';
import facePamphletImage from
  '../../images/facepamphlet.png';
import personalWebsiteImage from
  '../../images/personal website.png';
import rentalPropertyCalculatorImage from
  '../../images/rental property calculator.png';

// Each object needs either a googlePlayLink OR gitHubLink.
// If this needs to change, logic in ProjectInfo.js must change.
const projectsData = [
  {
    name: 'Lifter Log',
    description: 'Lifter Log is an Android app for fitness that allows ' +
    'you to record your workouts and meals, and track your progress in ' +
    'various ways (progress photos, graphing body weight, ' +
    'graphing exercise weights, etc.) over time.',
    technologiesUsed: 'Java, JUnit, Android Studio, SQLite',
    googlePlayLink: 'https://play.google.com/store/apps/details?' +
      'id=com.hgdev.fitnessapps.lifterlog&hl=en',
    image: lifterLogImage
  },
  {
    name: 'Rental Property Calculator',
    description: 'Rental Property Calculator is a web app for ' +
    'real estate investors to use to analyze rental properties. It shows ' +
    'you your property\'s value, cash flow, equity buildup, return on ' +
    'investment, return on equity, and cash on cash return for years ' +
    'during your mortgage and after the property is paid off. It allows ' +
    'users to register and login to save their analyses for later.',
    technologiesUsed: 'React/Redux, Webpack/Babel, Mocha/Chai, HTML5/CSS3, Node/Express, MongoDB/Mongoose, Passport, JWT, VS Code',
    gitHubLink: 'https://github.com/gregdardis/rental-property-calculator',
    image: rentalPropertyCalculatorImage
  },
  {
    name: 'Stock Market Search',
    description: 'Stock Market Search is a web app that allows you to ' +
    'search for stocks (by symbol) in the yahoo finance stock database, and ' +
    'view financial information and metrics related to these stocks. ',
    technologiesUsed: 'React/Redux, Webpack/Babel, Node/Express, ' +
    'Mocha/Chai, HTML5/CSS3, VS Code',
    gitHubLink: 'https://github.com/gregdardis/stock-market-info',
    image: stockMarketSearchImage
  },
  {
    name: 'FacePamphlet',
    description: 'FacePamphlet is a mini social media app that runs locally ' +
    'on your computer. It has features such as creating a profile, looking ' +
    'up a profile, adding a friend, changing your status or picture, and ' +
    'deleting profiles. It utilizes SQLite to save information between uses. ' +
    'Note: this project is an extension of assignment 7, FacePamphlet, from ' +
    'Stanford\'s CS106A class.',
    technologiesUsed: 'Java, Eclipse, SQLite',
    gitHubLink: 'https://github.com/gregdardis/FacePamphlet-CS106A',
    image: facePamphletImage
  },
  {
    name: 'Personal Website',
    description: 'This site, which is used to show both my portfolio and ' +
    'who I am. Bootstrapped using create-react-app. ',
    technologiesUsed: 'React, Webpack/Babel, HTML5/CSS3, ' +
    'VS Code',
    gitHubLink: 'https://github.com/gregdardis/personal-website',
    image: personalWebsiteImage
  }
];

export default projectsData;