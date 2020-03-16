import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/header';
import Navigation from './Components/navigation';
import Profile from './Components/profile';
import UserGenerator from "./Components/content_components/Users_Profile_components/User_Profile";
import style from './App.module.css';
import MainMessagesBlock from './Components/content_components/Messages_components/mainMessagesBlock'
import './Components/CSS/basic.css';
import ConversationChat from "./Components/content_components/Messages_components/conversationChatBlock";
import GroupsBlock from "./Components/content_components/Groups_components/groupsBlock";
import UserProfile from './Components/content_components/Users_Profile_components/User_Profile'
import messagesData from './DATA_BLL/messagesData';
const App = () => {
  return (
      <BrowserRouter>
          <div className={style.app_wrapper}>
              <Header/>
              <main>
                  <Navigation/>
                  <Route path='/profile' component={Profile}/>
                  <Route path='/groups' component={GroupsBlock}/>
                  <Route exact path='/im' render={ () => <MainMessagesBlock data={messagesData}/>}/>
                  <Route exact path='/1' component={Profile}/>
                  <Route exact path ='/0' component={UserGenerator}/>
                  <Switch>
                      <Route exact path='/id/:id' component={Profile}/>
                      <Route exact path='/im/:id' render={ () => <ConversationChat data={messagesData} />}/>
                      <Route exact path='/id:id' component={UserProfile}/>
                  </Switch>

                  {/*<MainMessagesBlock/>*/}
                  {/*<Profile/>*/}
                  {/*<ConversationChat/>*/}
              </main>
          </div>
      </BrowserRouter>
  );
};



export default App;

