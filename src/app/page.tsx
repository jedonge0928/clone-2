export default function Home() {
  const items = [
    { id: 1, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 2, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 3, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
    { id: 4, title: "치아보험", description: "개수제한 없는 충전치료 보장" },
  ];

  const benefit = [
    { id: 1, content: "마케팅 수신동x의하고 맞춤형 혜택 안내받으세요" },
    { id: 2, content: "마케팅 수신동x의하고 맞춤형 혜택 안내받으세요" },
    { id: 3, content: "마케팅 수신동x의하고 맞춤형 혜택 안내받으세요" },
  ];

  const contractInquiry = [
    { id: 1, img: "이미지1", text: "계약조회" },
    { id: 2, img: "이미지2", text: "계약조회" },
    { id: 3, img: "이미지3", text: "계약조회" },
    { id: 4, img: "이미지4", text: "계약조회" },
    { id: 5, img: "이미지5", text: "계약조회" },
    { id: 6, img: "이미지6", text: "계약조회" },
    { id: 7, img: "이미지7", text: "계약조회" },
  ];

  const notice = [
    {
      id: 1,
      img: "이미지",
      content: "금융사기 관련 소비자 유의사항 안내1",
    },
    { id: 2, img: "이미지", content: "금융사기 관련 소비자 유의사항 안내2" },
    { id: 3, img: "이미지", content: "금융사기 관련 소비자 유의사항 안내3" },
    { id: 4, img: "이미지", content: "금융사기 관련 소비자 유의사항 안내4" },
  ];
  const news = [
    {
      id: 1,
      img: "뉴스이미지",
      content: "라이나생명 관련 소비자 유의사항 안내1",
    },
    {
      id: 2,
      img: "뉴스이미지",
      content: "라이나생명 관련 소비자 유의사항 안내2",
    },
    {
      id: 3,
      img: "뉴스이미지",
      content: "라이나생명 관련 소비자 유의사항 안내3",
    },
    {
      id: 4,
      img: "뉴스이미지",
      content: "라이나생명 관련 소비자 유의사항 안내4",
    },
  ];

  const footerList = [
    { id: 1, text: "개인정보처리방침" },
    { id: 2, text: "신용정보활용체제" },
    { id: 3, text: "전자금융거래약관" },
    { id: 4, text: "전자금융서비스약관" },
    { id: 5, text: "본인정보 이용 제공 조회" },
    { id: 6, text: "본인정보 이용 제공 철회" },
    { id: 7, text: "개인신용정보열람 정정 청구" },
    { id: 8, text: "개인정보 삭제 청구" },
    { id: 9, text: "보호금융상품등록부" },
    { id: 10, text: "개인신용정보 전송요구 철회" },
    { id: 11, text: "범금융권고객정보보호캠페인" },
  ];
  return (
    <div>
      <header className="w-[1140px]  m-auto">
        <div className="flex justify-between text-[14px] w-[1140px]  items-center h-[70px]">
          <ul className="flex gap-1 ">
            <li className="relative">회사소개</li>
            <li className="line"></li>
            <li>사회공헌</li>
            <li className="line"></li>
            <li>TMR모집</li>
            <li className="line"></li>
            <li>공시실</li>
            <li className="line"></li>
            <li>소비자포털</li>
            <li className="line"></li>
            <li>다이렉트보험</li>
          </ul>
          <ul className="flex  gap-1">
            <li>로그인</li>
            <li className="line"></li>
            <li>인증센터</li>
            <li className="line"></li>
            <li>
              글자크기
              <select name="font-size" id="font-size">
                <option value="small"></option>
                <option value="medium"></option>
                <option value="large"></option>
              </select>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center h-[80px] text-center  font-black">
          <h1 className="w-[100px] h-full bg-slate-400 flex items-center justify-center">
            logo
          </h1>
          <nav className="flex">
            <ul className="flex justify-between items-center bg-slate-50-300">
              <li className="p-5">치아.암</li>
              <li className="p-5">건강.정기</li>
              <li className="p-5 ">치매.간병</li>
              <li className="line after:mx-5 after:py-3"></li>
              <li className="p-5">사이버청구</li>
              <li className="p-5">보험금청구</li>
              <li className="p-5">고객센터</li>
            </ul>
          </nav>
          <div className="flex justify-around">
            <p className="p-3">검색</p>
            <p className="p-3">햄버거메뉴</p>
          </div>
        </div>
      </header>
      <main className="max-w-[1140px] m-auto">
        <section className="flex  items-center h-[493px]">
          <div className=" flex justify-between  w-full ">
            <div className="w-[753px] y-[394px] p-8 bg-blue-300 rounded-lg shadow-2xl">
              <div className=" flex justify-between ">
                <div className="flex flex-col justify-around gap-5 ">
                  <h2 className="w-full py-3 leading-10">the 건강보험</h2>
                  <h1 className="  leading-10">
                    질병 수술 받을 때마다 매번 보험금 지금
                  </h1>
                  <button className="px-15  rounded-md bg-slate-500 leading-10">
                    보험료 계산/상담
                  </button>
                  <div className="text-xs  leading-10">
                    <p>가입 후 91보장</p>
                    <p>갱신시 보험료 인상 가능</p>
                    <p>준법감시인 확인필 제2024-05-05</p>
                  </div>
                </div>
                <div className="bg-gray-800 w-[260px] h-[330px] text-white">
                  <p>이미지공간입니다.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[367px] h-[394px] p-8 flex flex-col justify-around items-center bg-orange-300 rounded-lg shadow-xl">
                <p>전화상담과 인터넷 가입 모두 가능</p>
                <p>보험이 어려우시다면</p>
                <p>이미지/영상 공간입니다.</p>
                <button>쉬운 보험가입 서비스</button>
              </div>
            </div>
          </div>
          <div></div>
        </section>
        <section className="mb-10">
          <h2 className="font-black text-2xl mb-6">최근 많이 찾는 보험</h2>
          <div className=" w-full flex items-center justify-between ">
            <ul className="flex items-center w-[751px] h-[224px] justify-between">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="w-[171px] h-[224px] flex justify-center items-center p-8 flex-col gap-2 bg-blue-50 shadow-xl"
                >
                  <h1>이미지</h1>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="w-[368px]  h-[224px] flex justify-center items-center p-8 flex-col gap-2 bg-blue-500 shadow-xl">
              <p>보험 가입 문의</p>
              <div>
                <h2>빠르고 간편하게 보험 가입 상담</h2>
                <p>이미지</p>
              </div>
              <p>080-410-8181</p>
            </div>
          </div>
        </section>
      </main>
      <section className="  mt-[40px] pb-[60px] h-[707px] flex flex-col w-full justify-between items-center bg-slate-100 ">
        <div className=" pt-10 py-[60px] max-w-[1140px] w-full  ">
          <h2 className="text-2xl font-bold mb-5">사이버창구 메뉴</h2>
          <div className=" h-[560px] px-8 py-12 bg-white shadow-xl">
            <div className="flex items-center justify-center mb-8 ">
              <p className="w-full h-[64px] rounded-md text-center leading-[70px] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                찾으시는 메뉴를 검색해 주세요.
              </p>
            </div>
            <div>
              <ul className="flex justify-between items-center ">
                {contractInquiry.map((contract, index) => (
                  <li
                    key={index}
                    className="w-[98px] h-[138px] flex flex-col justify-center items-center bg-orange-400 rounded-md"
                  >
                    <p className="bg-slate-400 p-4">{contract.img}</p>
                    <p className="pt-3">{contract.text}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center pt-[32px] mt-[32px]">
                <div className="flex w-[500px] h-[167px] justify-between">
                  <ul className="flex flex-col justify-between items-center">
                    <li className="w-[230px] h-[42px] border-b pt-4">
                      고객상담 접수안내
                    </li>
                    <li className="w-[230px] h-[42px]  border-b pt-4">
                      고객상담 접수안내
                    </li>
                    <li className="w-[230px] h-[42px] border-b pt-4">
                      고객상담 접수안내
                    </li>
                  </ul>
                  <ul className="flex flex-col justify-between items-center">
                    <li className="w-[230px] h-[42px] border-b pt-4">
                      고객상담 접수안내
                    </li>
                    <li className="w-[230px] h-[42px] border-b pt-4">
                      고객상담 접수안내
                    </li>
                    <li className="w-[230px] h-[42px] border-b pt-4">
                      고객상담 접수안내
                    </li>
                  </ul>
                </div>
                <div className="flex w-[500px] h-[167px] justify-between">
                  <div className="w-[240px] h-[160px] p-6 bg-slate-300">
                    <p className="mb-4">사고 보험금 청구</p>
                    <p>바로가기</p>
                  </div>
                  <div className="w-[240px] h-[160px] p-6 bg-slate-300">
                    <p className="mb-4">사고 보험금 청구</p>
                    <p>바로가기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-[1140px] w-full  pt-[60px] flex justify-between items-center m-auto">
          <div className="w-[365px] h-[200px] py-8 pt-[100px] pb-[20px] bg-[#f8f9fb] flex flex-col justify-between shadow-lg">
            <p>혜택</p>
            <h2>마케팅 수신동x의하고 맞춤형 혜택 안내받으세요</h2>
            <button>바로가기</button>
          </div>
          <div className="w-[365px] h-[200px] py-8 pt-[100px] pb-[20px] bg-[#f8f9fb] flex flex-col justify-between items-center shadow-lg">
            <p>혜택</p>
            <h2>마케팅 수신동의하고 맞춤형 혜택 안내받으세요</h2>
            <button>바로가기</button>
          </div>
          <div className="w-[365px] h-[200px] py-8 pt-[100px] pb-[20px] bg-[#f8f9fb] flex flex-col justify-between items-center shadow-lg">
            <p>혜택</p>
            <h2>마케팅 수신동의하고 맞춤형 혜택 안내받으세요</h2>
            <button>바로가기</button>
          </div>
        </div>
      </section>
      <section className="max-w-[1140px] w-full h-[425px] m-auto">
        <div className="flex justify-between pt-[60px]">
          <div className="flex flex-col w-[362px] h-[365px] bg-orange-100 shadow-xl ">
            <div className="p-6">
              <div>
                <p className="text-[14px]">다이렉트 보험</p>
                <p>
                  365dlf 24시간 온라인 청약 가능
                  <br />
                  실속있는 다이렉트 보험료를 확인하세요!
                </p>
              </div>
              <p>준법감시인확인필 제 2025-M900014호 (2025-01-02~2026-01-01)</p>
              <button>다이렉트 보험료 확인하기</button>
            </div>
          </div>

          <div className=" w-[362px] h-[365px]">
            <h3 className="font-bold">공지사항</h3>

            <ul className="flex flex-col gap-4">
              {notice.map((noticeItem, index) => (
                <li
                  key={index}
                  className="flex gap-5 items-center  max-w-[362px] max-h-[48px] text-[16px] "
                >
                  <p className="w-[48px] h-[48px] bg-yellow-400  ">
                    {noticeItem.img}
                  </p>
                  <p
                    className={`text-nowrap pr-4  border-t pt-5  ${
                      index === 0 ? "border-none" : "border-gray-300"
                    }`}
                  >
                    {noticeItem.content}
                  </p>
                </li>
              ))}
            </ul>

            <button className=" w-full p-3 border border-gray-200 mt-5 rounded-lg ">
              <span className="text-base">공지사항 더보기</span>
            </button>
          </div>
          <div className=" w-[362px] h-[365px]">
            <h3 className="font-bold">라이나 뉴스</h3>

            <ul className="flex flex-col gap-4">
              {news.map((newsItem, index) => (
                <li
                  key={index}
                  className="flex gap-5 items-center  max-w-[362px] max-h-[48px] text-[16px] "
                >
                  <p className="w-[48px] h-[48px] bg-blue-400  ">
                    {newsItem.img}
                  </p>
                  <p
                    className={`text-nowrap pr-4  border-t pt-5  ${
                      index === 0 ? "border-none" : "border-gray-200"
                    }`}
                  >
                    {newsItem.content}
                  </p>
                </li>
              ))}
            </ul>

            <button className=" w-full p-3 border border-gray-200 mt-5 rounded-lg ">
              <span className="text-base">라이나 뉴스 더보기</span>
            </button>
          </div>
        </div>
      </section>
      <footer className="max-w-[1140px] w-full m-auto flex justify-between">
        <div className="flex flex-col ">
          <h1>LOGO</h1>
          <button>브랜드/cl</button>
        </div>
        <div className=" w-[70%]">
          <h3>개인정보보호/상품 관련 안내</h3>
          <ul className="flex ">
            {footerList.map((item, index) => (
              <li key={index} className="line">
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>개인정보보호/상품 관련 안내</h1>
        </div>
      </footer>
    </div>
  );
}
