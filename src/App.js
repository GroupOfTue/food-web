import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import ErrorPage500 from './pages/errorScreen/error500';
import ErrorPage404 from './pages/errorScreen/error404';

function App() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          const Page = route.component;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
        {/* Route cho trang lỗi 500 */}
        <Route path="/error500" element={<ErrorPage500 />} />

        {/* Route catch-all cho các lỗi khác */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </div>
  );
}

export default App;
