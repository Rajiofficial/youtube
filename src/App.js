import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import Video from './pages/Video/Video';
import Search from './pages/Search/Search';
import { useSelector } from 'react-redux';
import SharedLayout from './pages/SharedLayout';

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <HashRouter>
      <Routes>
        <Route path='/signin' element={currentUser ? <Home /> : <SignIn />} />
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home type='random' />} />
          <Route path='trends' element={<Home type='trend' />} />
          <Route path='subscriptions' element={<Home type='sub' />} />
          <Route path='search' element={<Search />} />
          <Route path='video'>
            <Route path=':id' element={<Video />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
