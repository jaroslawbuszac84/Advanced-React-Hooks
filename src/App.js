import './App.css';
//import UseRefExample1 from './components/UseRefExample1';
// import UseRefExample2 from './components/UseRefExample2';
// import UseRefExample3 from './components/UseRefExample3';
import UseMemoExample from './components/UseMemoExample';


function App() {
  return (
    <div className='container mt-5'>
    {/* Please uncomment the component below to see how it works(also the imports above)
      <UseRefExample1 />
      <UseRefExample2 />
      <etc...>
    */}
      <UseMemoExample />
    </div>
  )
}

export default App;
