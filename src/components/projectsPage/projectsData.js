// imageUrl must be relative to project component folder.
// If file structure changes, so must these imageUrl's.
// Each object needs either a googlePlayLink OR gitHubLink.
// If this needs to change, logic in ProjectInfo.js must change.
const projectsData = [
  {
    name: 'Lifter Log',
    description: 'Lifter Log is an amazing app! Would recommend 10/10',
    googlePlayLink: 'This is the google play link. TODO',
    imageUrl: '../../images/lifter log feature graphic.jpg'
  },
  {
    name: 'Stock Market Search',
    description: 'Stock Market Search is an amazing app! Would recommend 10/10',
    gitHubLink: 'https://github.com/gregdardis/stock-market-info',
    imageUrl: '../../images/stock market search example.png'
  }
];

export default projectsData;