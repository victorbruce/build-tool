import './scss/style.scss';
import buildToolsData from './data/build-tools.json';
import { renderTools } from './components/BuildTools';
import { setInitialTheme } from './utils/Theme';

setInitialTheme();
renderTools(buildToolsData.buildTools);
