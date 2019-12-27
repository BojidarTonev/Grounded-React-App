import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../header/header"
import Main from "./main/main"
import About from "../about/about"
import Index from "../index/index"
import Artists from "../artists/artists"
import Footer from "../footer/footer"
import Events from '../events/events'
import Contact from "../contact/contact"
import Music from "../music/all-music"
import Login from "../users-components/login/login"
import Register from "../users-components/register/register"
import NotFound from "../not-found/not-found"

import "../../shared/styles/site.css"

function render(title, Cmp, description) {
  return function(props) {
    if (!description) {
      description = GetDescription(title);
    }
    return (
      <Main title={title} description={description}>
        <Cmp {...props}></Cmp>
      </Main>
    );
  };
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />
        <Switch>
          <Route path="/" exact render={render("Who are we?", Index)}/>
          <Route path="/about" render={render("about", About)}/>
          <Route path="/artists/all" exact render={render("Artists", Artists)}/>
          <Route path="/events/all" exact render={render("All events", Events)} />
          <Route path="/contact" render={render("Contact us", Contact)} />
          <Route path="/login" render={render("Login", Login)} />
          <Route path="/register" render={render("Register", Register)} />
          <Route path="/music/all" exact render={render("All music", Music)} />

          <Route path="*" render={render("Not found", NotFound)} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

function GetDescription(title) {
  if(title === "Who are we?"){
    return "We are a team of highly motivated young people that have created a web platform in order to popualize the electronic scene in the country. We are big group of popular and not so popular djs and artists in the music production scene all together in one place organizing evenets together and colaborating with each other to have fun with you ? lol"
  } else if (title === "Artists"){
    return "Here you can see all the artist that are part of our association. They all have different participations in events that are being organized by Grounded organization. Scroll down or categorize to see the DJs that are in interest of yours.";
  } else if (title === "All events"){
    return "Here you can browse through all of the events that either we have organized or we have helped organizing. In all of the below events there are DJs and aritst that are part of our team that helped or sponsored any of the below mentioned events. How are we invloved with them you can see in their details. Enjoy!"
  } else if (title === "Contact us"){
    return "In this section you can see where you can find us either online or any of our offices. By typing in the form below you send e-meil to: grounded-org@groiunded-web.de and we will be answering to the e-mail that you told us to contact you back at. Don't try to spam us our we have spam-blockers lol."
  } else if (title === "All music"){
    return "Down below are all the songs that are part of the Grounded community. You can sort them, listen to them and support your favourite artists too. Enjoy your stay!"
  } else if (title === "Login"){
    return "Login in order to gain access to more functionality in our web-app."
  } else if (title === "Register"){
    return "Register in order to gain access to more functionality in our web-app."
  }
  return "Sorry, url may be broken, but page not found ;("
}

export default App;
