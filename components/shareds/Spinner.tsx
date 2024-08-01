import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface Props {
  color?: string;
}

const Spinner = ({ color }: Props) => {
  return (
    <div>
      <Spin
        indicator={
          <LoadingOutlined
            style={{ fontSize: 22, fontWeight: 400, color: color ?? "#fff" }}
            spin
          />
        }
      />
    </div>
  );
};

export default Spinner;
