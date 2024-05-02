import { useState } from 'react'; // (importing the useState library from react)
import Sidebar from './Components/sidebar'; // (importing the Sidebar component from the sidebar file)
import './App.css' // (Importing the files from the CSS file)


// Counter Function
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
  )
}


// This is the Nav function that will be used to render the Sidebar component
const Nav = () => {
  return (
    <div>
      <Sidebar />
    </div>
  );
};

// Exporting the Nav and Counter functions for use in other files
export { Nav, Counter};
