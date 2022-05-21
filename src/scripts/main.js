import '../styles/main.scss';
import events from './helpers/eventListeners';
import htmlStructure from './components/DOM';
import header from './components/header';
import startSortingBtn from './components/srtBtn';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
