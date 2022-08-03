import MacTop from "./components/MacTop/MacTop";
import GridContainer from "./components/GridContainer/GridContainer";
import HoverTable from "./components/HoverTable/HoverTable";



function App() {
 
  
  return (
      <div className="container">
        
        <MacTop />  
        <div className="area"> 

          <GridContainer/>
          <HoverTable/>
        </div>
       
      </div>      
   );
}

export default App;
