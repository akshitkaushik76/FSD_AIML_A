

import { Route, Routes } from 'react-router-dom'
import Home from './assets/home'
import Counter from './assets/counter'
import Stopwatch from './assets/stopwatch'
import RefEx from './component/relex'
const App=()=>{
  return(
    <div>
  <Routes>
    <Route path="/" element={<Home/>
    }> </Route>
    <Route path="/counter" element={<Counter/>
    }> </Route>
    <Route path="/stopwatch" element={<Stopwatch/>} > </Route>
    <Route path="/nopage" element={<h1>No page available</h1>
    }> </Route>
    <Route path="/refEx" element={<RefEx/>}></Route>
  </Routes>
    </div>
  )
}
export default App