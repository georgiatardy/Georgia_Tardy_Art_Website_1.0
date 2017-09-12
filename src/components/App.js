import React, { Component } from 'react';
import {PageHeader, Jumbotron, Button} from 'react-bootstrap'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <PageHeader>Georgia Tardy Art</PageHeader>
 <div className="container">
 <Jumbotron inverse>

   <p>From a very young age, Georgia Tardy knew she was an artist. With this sense of identity clearly established since childhood, she has dedicated herself to the development of her God-given gifts and calling, continually seeking to understand fully what it means to be an artist.
   <br></br>
   <br></br>
   Born in Kalamazoo, Michigan to a family of artists, Tardy spent much of her young life involved in art programs and summer camps, including those offered by the Kalamazoo Institute of Art, and received continual inspiration from her mother and grandmother.
    <br></br>
    <br></br>
    In 1999, she moved to Grand Rapids, Michigan to attend the distinguished Kendall College of Art and Design where she earned her BFA and made a name for herself with her lifelike sketches, soulful paintings and uncanny ability to capture the essence of a moment in a photo. Tardy’s art came to embody the vision articulated by artist and painter Jeffrey Smart, who stated, “It’s not a matter of painting life, it’s a matter of giving life to painting.”
    <br></br>
    <br></br>
    Soon after her graduation from Kendall, Taylor’s ability and passion captured the attention of world-renowned artist Paul Collins, and she interned with him for over a year. After this internship, Tardy held her first exhibition and after several successful shows the desire to help others discover their creative abilities was unearthed. She has held instructor positions at Kendall College of Art and Design as well as the West Michigan Center for Arts and Technology  and UICA teaching graphic design.
    <br></br>
    <br></br>
    In 2012 Tardy was one of 9 artists selected to participate in the Hope Equals Artist Residency in Israel and Palestine. While there she learned from and created with Israeli and Palestinian artists, exploring culture through the lens of various art forms. In 2016 Tardy participated in her first international exhibition as a participant in the Tokyo International Art Fair. Tardy was also a speaker at TEDx Macatawa 2013 in Holland, Michigan. She has served with the New Leaders Arts Council of Michigan (NLACM), a young leaders advisory council of the Michigan Council for Arts and Cultural Affairs (MCACA) and the board of the Creative Youth Center, a non-profit literary arts program in Grand Rapids, Michigan.
    <br></br>
    <br></br>
    Tardy currently resides in Raleigh, North Carolina with her husband Reggie.</p>

 </Jumbotron>
 </div>
      </div>
    );
  }
}

export default App;
