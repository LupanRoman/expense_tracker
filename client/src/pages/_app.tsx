import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ScriptProps } from 'next/script';

// ! Created the next.d.ts file to add types for nextLayout and the code bellow allows to create per page layout

type Page<P = Record<string, never>> = NextPage<P> & {
  Layout: (page: ScriptProps) => JSX.Element;
};

type Props = AppProps & {
  Component: Page;
};

const Noop = ({ children }: ScriptProps) => <>{children}</>;

function App({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

// import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
// import type { NextComponentType } from 'next';
// import { ReactNode } from 'react';

// const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
//   Component,
//   pageProps,
// }: AppLayoutProps) => {
//   const getLayout = Component.getLayout || ((page: ReactNode) => page);
//   return getLayout(<Component {...pageProps} />);
// };

// export default function App({ Component, pageProps }: AppProps) {
//   const Layout = Component.Layout || EmptyLayout;

//   return;
//   <>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </>;

// const EmptyLayout = ({ children }: DashboardLayout) => <>{children}</>;

// export default App;
