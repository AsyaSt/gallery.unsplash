import './App.css';
import { store} from './store/store';
import createHistory from "history/createBrowserHistory";
import {Provider}   from 'react-redux';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { GalleryAllPic } from './pages/galleryPage';
import { COnePhoto } from './pages/onePhotoPage';



export let history = createHistory();
store.subscribe(() => console.log(store.getState()));

  
function App() {
  return (
    <Router history = {history}>
      <Provider store ={store}>
        <Switch>
          <Route path={'/gallery'} component={GalleryAllPic}/>
          <Route path={'/photo/'} component={COnePhoto}/>
          <Route exact path="/"><Redirect to="/gallery" /></Route>
        </Switch>
        </Provider>
    </Router>
  );
}

export default App;
