import { Layout } from "antd";
import Headerlayout from "../components/grids/header-layout";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Error404 = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const router = useRouter();

  const goToBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const goToHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  //404 page 가로스크롤 생김
  return (
    <>
      <div id="wrap">
        <Headerlayout />
        <div className="error-wrap">
          <Content className="error">
            <div className="container">
              <div className="error-con-group">
                <div className="error-icon-group">
                  <FontAwesomeIcon
                    icon={faExclamationCircle}
                    color="#f3807c"
                    className="error-icon"
                  />
                  <h2 className="error-icon-404">404</h2>
                </div>

                <h2 className="error-tit">
                  요청하신 페이지를 찾을 수 없습니다.
                </h2>
                <p className="error-desc">
                  불편을 드려 죄송합니다.<br></br>확인 후 다시 시도해주세요.
                </p>
                <div className="error-btn">
                  <button
                    onClick={goToHome}
                    className="error-home-btn btn-main btn-40"
                  >
                    홈으로 가기
                  </button>
                  <button
                    onClick={goToBack}
                    className="gray-btn-outlined btn-40"
                  >
                    뒤로가기
                  </button>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </div>
    </>
  );
};

export default Error404;
