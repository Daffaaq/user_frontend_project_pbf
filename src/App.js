import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import Posts from './components/posts/Posts'
import SinglePost from './components/post/SinglePost'
import Navigation from './navbar/Navigation';
import Home from './screen/Home';
import ListWisata from './screen/ListWisata';
import Footer from './footer/Footer';
import DescriptionPageWisata from './screen/DescriptionPageWisata';
import DetailWisata from './screen/DetailWisata';
import ListKuliner from './screen/ListKuliner';
import DescriptionPageKuliner from './screen/DescriptionPageKuliner';
import ListPenginapan from './screen/ListPenginapan';
import DescriptionPagePenginapan from './screen/DescriptionPagePenginapan';


export default function App() {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/wisatas" component={ListWisata} />
        <Route path="/kuliners" component={ListKuliner} />
        <Route path="/penginapans" component={ListPenginapan} />
        <Route path="/description/:id" component={DescriptionPagePenginapan} />
        <Route path="/wisata/:id" component={DescriptionPageWisata} />
        <Route path="/kuliner/:id" component={DescriptionPageKuliner} />
        <Route path="/:slug" component={DetailWisata} />
      </Switch>
      <Footer/>
    </Router>
  )
}