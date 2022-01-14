import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import PublicLayout from "../components/PublicLayout/PublicLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PublicLayout>
      <Component {...pageProps} />
    </PublicLayout>
  );
}

export default MyApp;
