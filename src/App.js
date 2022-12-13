import{Header,S1FirstScreen,S2About,S3Counter,S4Directions,S5Timeline,S6Appreciate,S7Team,S8Parallax,S9Accordion,S10Prices,S11Comments,S12Discount,S13Contacts,Footer,} from "./container/index.js";
 
import Nav from "./Nav";

function App() {
 
  Nav() //  
  return (
    <main className="main-wrapper">
      <Header/>
     <section className="content">
  <S1FirstScreen/>
 <S2About/>
 <S3Counter/>
 <S4Directions/>
 <S5Timeline/>
 <S6Appreciate/>
 <S7Team/>
 <S8Parallax/>
 <S9Accordion/>
 <S10Prices/>
 <S11Comments/>
 <S12Discount/>
 <S13Contacts/>
<Footer/>
      </section>
   </main>
  );
}

export default App;
