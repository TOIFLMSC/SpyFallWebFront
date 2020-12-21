import React from "react";
import './connect-screen.css'
import ConnectComponent from "../../components/connect-component/connect-component";

interface Props {
  history: any;
}

const ConnectScreen: React.FC<Props> = ({history}) => {
  return (
    <section className="connect_screen">
      <ConnectComponent history={history} />
    </section>
  );
};

export default ConnectScreen;
