import { GetServerSideProps } from "next";
import Headerlayout from "../components/grids/header-layout";
import Mainpage from "./mainpage";
import getRoomList from "../common/roomList";

enum Role {
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_MEMBER = "ROLE_MEMBER",
}

interface IRoomList {
  seq: number;
  title: string;
  content: string;
  regisDate: string;
  cnt: number;
  good: number;
  bad: number;
  member: {
    id: string;
    password: string;
    name: string;
    email: string;
    role: Role;
    enabled: boolean;
    regisDate: string;
  };
}

interface IRoomListProps {
  roomLists: IRoomList[];
}

const Index = ({ roomLists }: IRoomListProps) => {
  return (
    <>
      <div id="wrap">
        <Headerlayout />
        <Mainpage roomLists={roomLists} />
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetServerSideProps = async (context) => {
  try {
    const res = await getRoomList(); //전체 글 조회
    if (res) {
      return { props: { roomLists: res } };
    }

    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
