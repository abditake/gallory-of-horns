import React from "react";
import HornedBeast from './HornedBeast.js'


class Main extends React.Component{
  render(){
    return(
      <main>
      <HornedBeast 
        title = "SubZero"
        imgUrl = "https://bbts1.azureedge.net/images/p/full/2021/04/c9e26513-0243-4b44-987c-04ffcb6c4077.jpg"
        description = 'SubZero'
      />
      <HornedBeast 
        title = "scorpion"
        imgUrl = "https://static.wikia.nocookie.net/versus-compendium/images/a/a2/Scorpion_2.png/revision/latest?cb=20190120143302"
        description = 'scorpion'
      />
      </main>
      )
  }
}

export default Main;