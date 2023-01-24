import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentForm from './Form/StudentForm';
import StudentDetails from './StdentDetails/StudentDetails';


function App() {
  return (
    <>
    {/* <StudentForm/> */}
     <BrowserRouter> 
    {/* <StudentForm/>  */}
   
    <Routes>
      <Route path='/StudentDetails'element={<StudentDetails/>}/>
      <Route path='/'element={<StudentForm/>}/>
      <Route path='/StudentForm'element={<StudentForm/>}/>
      <Route path='/StudentForm/:id' element={<StudentForm/>}/>
      
    </Routes> 
    </BrowserRouter>
   
   </>
   
  );
}

export default App;
