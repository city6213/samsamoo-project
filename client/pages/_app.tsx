import Head from "next/head";
import { RecoilRoot } from "recoil";
import "../styles/main.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <title>삼삼오오</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  // TODO : 로그인안한 상태에서 프로필 페이지 접근 막기
  return { pageProps };
};

export default App;
