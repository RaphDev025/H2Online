import {UserAuth} from 'Auth'
import { PageLink } from 'Views';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from 'Context/UserContext'

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
      <div className="App w-auto">
        <Routes>
          <Route path='/' element={<UserAuth />} />
          <Route path='/*' element={<PageLink />} />
        </Routes>
      </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
