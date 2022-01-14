import { Layout, ConfigProvider } from "antd";
import Header from "../Header";
import Footer from "../Footer";
import faIR from "antd/lib/locale-provider/fa_IR";

const { Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <ConfigProvider direction="ltr" locale={faIR}>
      <Layout hasSider={false} style={{ minHeight: "100vh" }}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default PublicLayout;
