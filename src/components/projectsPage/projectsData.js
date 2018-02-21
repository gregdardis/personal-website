import lifterLogImage from
  '../../images/lifter log feature graphic.jpg';
import stockMarketSearchImage from
  '../../images/stock market search example.png';

// Each object needs either a googlePlayLink OR gitHubLink.
// If this needs to change, logic in ProjectInfo.js must change.
const projectsData = [
  {
    name: 'Lifter Log',
    description: 'Lifter Log is an amazing app! Would recommend 10/10',
    googlePlayLink: 'This is the google play link. TODO',
    image: lifterLogImage
  },
  {
    name: 'Stock Market Search',
    description: 'Stock Market Search is an amazing app! Would recommend 10/10',
    gitHubLink: 'https://github.com/gregdardis/stock-market-info',
    image: stockMarketSearchImage
  }
];

export default projectsData;