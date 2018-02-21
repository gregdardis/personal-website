import lifterLogImage from
  '../../images/lifter log feature graphic.jpg';
import stockMarketSearchImage from
  '../../images/stock market search example.png';

// Each object needs either a googlePlayLink OR gitHubLink.
// If this needs to change, logic in ProjectInfo.js must change.
const projectsData = [
  {
    name: 'Lifter Log',
    description: 'Lifter Log is an Android app for fitness that allows the ' +
    'user to record their workouts and meals, and track their progress in ' +
    'various ways (progress photos, graphing body weight, ' +
    'graphing exercise weights, etc) over time.',
    technologiesUsed: 'Java, JUnit, Android Studio',
    googlePlayLink: 'This is the google play link. TODO',
    image: lifterLogImage
  },
  {
    name: 'Stock Market Search',
    description: 'Stock Market Search is a web app that allows the user to ' +
    'search for stocks (by symbol) in the yahoo finance stock database, and ' +
    'view financial information and metrics related to these stocks. ',
    technologiesUsed: 'React/Redux, Webpack/Babel, Node/Express, ' +
    'Mocha/Chai, HTML5/CSS3',
    gitHubLink: 'https://github.com/gregdardis/stock-market-info',
    image: stockMarketSearchImage
  }
];

export default projectsData;