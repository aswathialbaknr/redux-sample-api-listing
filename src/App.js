 
import './App.css';
import Home from '../src/components/Home/Home'
import List from './/components/LIST/List'
import { Route,BrowserRouter,Switch } from  'react-router-dom';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Switch>
            
   
            <Route exact path="/" component={Home}/>
            <Route  path="/List" component={List}/>
          </Switch>
         </BrowserRouter>
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';
// import HRLogin from '../src/Components/Pages/HRLogin/HRLogin'
// import ForgotPassword from'../src/Components/Pages/ForgotPassword/ForgotPassword'
// import HRHeader from'../src/Components/Header/Header'
// import HRHeaderLogin from'../src/Components/HRHeaderLogin/HRHeaderLogin'
// import HRRegister from'./Components/Pages/HRRegister/HRRegister'
// import HRHome from'./Components/Pages/HRHome/HRHome'
// import HRProfileEdit from'./Components/Pages/HRProfileEdit/HRProfileEdit'
// import HRSalary from'../src/Components/Pages/HRSalary/HRSalary'
// import HRUpdateAttendence from'../src/Components/Pages/HRUpdateAttendence/HRUpdateAttendence'
// import HRUpdateSalary from'../src/Components/Pages/HRUpdateSalary/HRUpdateSalary'
// import HRUpdateSalary2 from'../src/Components/Pages/HRUpdateSalary2/HRUpdateSalary2'
// import HRNotification from'../src/Components/Pages/HRNotification/HRNotification'
// import Fakeapi  from'../src/Fakeapi'
// import { Route,BrowserRouter,Switch } from  'react-router-dom';

// function App() {
//   return (
//     <div >
//      <div>
//          <BrowserRouter>
//           <Switch>
            
   
//             <Route exact path="/" component={HRLogin}/>
//             <Route  path="/ForgotPassword" component={ForgotPassword}/>
//             <Route  path="/HRHeader" component={HRHeader}/>
//             <Route  path="/HRHeaderLogin" component={HRHeaderLogin}/>
//             <Route  path="/HRRegister" component={HRRegister}/>
//             <Route  path="/HRHome" component={HRHome}/>
//             <Route  path="/HRProfileEdit" component={HRProfileEdit}/>
//             <Route  path="/HRSalary" component={HRSalary}/>
//             <Route  path="/HRNotification" component={HRNotification}/>
//             <Route  path="/HRUpdateAttendence" component={HRUpdateAttendence}/>
//             <Route  path="/HRUpdateSalary" component={HRUpdateSalary}/>
//             <Route  path="/HRUpdateSalary2" component={HRUpdateSalary2}/>
//             <Route  path="/Fakeapi" component={Fakeapi}/>
//           </Switch>
//          </BrowserRouter>
//        </div>
//     </div>
//   );
// }

// export default App;

