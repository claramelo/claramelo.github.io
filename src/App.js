import React, { Component } from 'react';
import ProfileHeader from './molecules/ProfileHeader';
import GlobalCss from './helpers/globalCss.styled';
import { AppWipContainer } from './App.styled';

import profileImage from  './static/image/profile.jpg'

const generalInfo = {
  name: "Maria Clara Melo de Carvalho",
  image: profileImage,
};

class App extends Component {
  render() {
    return (
      <>
        <GlobalCss />
        <ProfileHeader generalInfo={generalInfo}/>
        <AppWipContainer>
          <img src="https://thumbs.gfycat.com/ScaryMassiveGallowaycow-max-1mb.gif" alt="wip"/>
        </AppWipContainer>
      </>
    );
  }
}

export default App;
