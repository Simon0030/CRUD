import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainArea from './MainArea/MainArea';
import SalesArea from './SalesArea/SalesArea';
import EditTabs from '../UI/Tabs/EditTabs/EditTabs';
import MaintenanceArea  from "./MaintenanceArea/MaintenanceArea";
import StatisticsArea from "./StatisticsArea/StatisticsArea";
import HelpArea from "./HelpArea/HelpArea";
import ProductArea from './ProductArea/ProductArea';

export enum APP_PAGE {
  HOME = '/',
  HELP = '/help',
  MAINTENANCE = '/maintenance',
  STATISTICS = '/statistics',
  SALES = '/sales',
  EDIT = '/edit-tabs',
  PRODUCT = '/product',
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path={APP_PAGE.HOME} component={MainArea} />
        <Route path={APP_PAGE.SALES} component={SalesArea} />
        <Route path={APP_PAGE.EDIT} component={EditTabs} />
        <Route path={APP_PAGE.MAINTENANCE} component={MaintenanceArea} />
        <Route path={APP_PAGE.STATISTICS} component={StatisticsArea} />
        <Route path={APP_PAGE.HELP} component={HelpArea} />
        <Route path={APP_PAGE.PRODUCT} component={ProductArea} />
      </div>
    </Router>
  );
}

export default App;