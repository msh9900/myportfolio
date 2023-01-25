import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
          안녕하세요 MOS 입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          주니어 프론트엔드 개발자로서 열심히 노력하고 있습니다. React,NextJS등
          페이지 제작을 하고 MUI,BootStrap 라이브러리를 사용하여 반응형 웹을
          구현하고 있습니다. 현재는 농구장 대여 및 게스트 모집 홈페이지를 만드는
          중입니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="btn-project">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
