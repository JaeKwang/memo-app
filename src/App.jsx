import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import MemoList from "./components/MemoList";
import MemoDetail from "./components/MemoDetail";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MemoList />} />
        <Route path="memo/:id" element={<MemoDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;