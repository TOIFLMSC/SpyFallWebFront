import React from "react";
import "./create-lobby.css";
import CreateLobbyComponent from "../../components/create-lobby-component/create-lobby-component";

interface Props {
  history: any;
}

const CreateLobby: React.FC<Props> = ({history}) => {
  console.log('creating')
  return (
    <section className="create_screen">
      <CreateLobbyComponent history={history}/>
    </section>
  );
};

export default CreateLobby;
