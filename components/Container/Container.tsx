import { Col, Row } from "antd";
import style from "./Container.module.scss";

interface IProps {
  children: React.ReactNode;
  fluid?: boolean;
}

const responsiveOptions = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 23,
  xl: 19,
  xxl: 17,
};

const Container = ({ children, fluid, ...props }: IProps) => {
  const colProps = () => {
    if (fluid) return { span: 24 };

    return responsiveOptions;
  };

  return (
    <div className={fluid ? style.containerFluid : style.container}>
      <Row justify="center" {...props}>
        <Col {...colProps()}>{children}</Col>
      </Row>
    </div>
  );
};

export default Container;
