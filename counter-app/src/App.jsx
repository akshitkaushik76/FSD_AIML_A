

import { Route, Routes } from 'react-router-dom'
import Home from './assets/home'
import Counter from './assets/counter'
const App=()=>{
  return(
    <div>
  <Routes>
    <Route path="/" element={<Home/>
    }> </Route>
    <Route path="/counter" element={<Counter/>
    }> </Route>
    <Route path="/stopwatch" element={<h1>Stopwatch page</h1>
    }> </Route>
    <Route path="/nopage" element={<h1>No page available</h1>
    }> </Route>
  </Routes>
    </div>
  )
}
export default App