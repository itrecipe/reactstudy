import { EditButton } from "./EditButton";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    backgroundColor: "#e9dbd0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

/* 이전 코드
export const Card = (props) => {
    // props로 관리자 플래그를 받음
    // const { isAdmin } = props;

    return (
        <div style={style}>
            <p>리액트</p>
            <EditButton isAdmin={isAdmin} />
        </div>
    )
}
*/

export const Card = () => {
    return (
      <div style={style}>
        <p>리액트</p>
        <EditButton />
      </div>
    );
  };