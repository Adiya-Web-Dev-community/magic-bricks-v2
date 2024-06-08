import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
// import { PiSpinnerGapBold } from "react-icons/pi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "../helper/axios";
import useWindowDimensions from "../helper/useWindowDimensions";
import { FaWindowClose } from "react-icons/fa";

const Chat = ({ setOpenChat }) => {
  const dummyRef = useRef();
  const { width } = useWindowDimensions();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const [isLoading, setIsLoading] = useState(true);
  // const [messagesLoading, setMessageLoading] = useState(true);
  // const [chatList, setChatList] = useState([]);
  const [message, setMessage] = useState("");
  const [selectUser, setSelectUser] = useState({});
  const [selectAdmin, setSelectAdmin] = useState(false);
  const [userList, setUserList] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [selectChatId, setSelectChatId] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  // get admin details
  const [admin, setAdmin] = useState([]);
  const getAdminData = async () => {
    try {
      const resp = await axios.get("/admin-details");
      console.log("admin detail", resp.data[0]);
      setAdmin(resp.data[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAdminData();
  }, []);

  // fetch users
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data: users } = await axios.get(
        `/search-user?search=${searchUser}`,
        {
          headers: { authorization: token },
        }
      );
      setUserList(users.users);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const fetchAllChats = async () => {
    try {
      const res1 = await axios.post(
        "/access-chat",
        { userId: selectUser._id },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setSelectChatId(res1.data._id);
      const res2 = await axios.get(`/all-chats/${res1.data._id}`);
      setAllMessages(res2.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      const res = await axios.post(
        "/new-message",
        {
          chatId: selectChatId,
          messageContent: message,
        },
        {
          headers: { authorization: token },
        }
      );
      setAllMessages([...allMessages, res.data]);
      fetchAllChats();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchUser]);
  useEffect(() => {
    fetchAllChats();
  }, [selectUser]);
  useEffect(() => {
    dummyRef?.current?.scrollIntoView();
  }, [allMessages]);

  return (
    <main className="h-screen text-slate-700">
      <main className="h-full w-full flex rounded-xl overflow-hidden bg-white shadow">
        <main
          className={`group border-r duration-100 ${
            width < 1024 ? (selectUser?._id ? "w-0" : "w-full") : "w-[25%]"
          }`}
        >
          <section className="h-14 bg-slate-100 border-b flex items-center justify-between px-[18px] space-x-2.5">
            <div className="flex items-center">
              <div className="w-10 h-10 hover:bg-slate-200 rounded-full grid place-items-center cursor-pointer duration-200">
                <HiOutlineMenu className="text-2xl text-slate-400" />
              </div>
              <input
                value={searchUser}
                onChange={(e) => setSearchUser(e.target.value)}
                type="text"
                placeholder="Search user"
                spellCheck="false"
                className="outline-none rounded-md h-8 w-max px-2.5 text-sm"
              />
            </div>
            <FaWindowClose
              onClick={() => setOpenChat(false)}
              className="text-red-500 text-3xl cursor-pointer"
            />
          </section>

          <section className="h-[calc(100%-56px)] overflow-y-scroll scrollbar scrollbar-w-1.5 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
            <div
              onClick={() => {
                setSelectUser(admin);
                setSelectAdmin(true);
              }}
              className={`h-16 flex items-center px-2.5 cursor-pointer ml-1.5 rounded-xl space-x-2 bg-yellow-100`}
            >
              <div className="w-12 h-12 bg-slate-200 rounded-full bg-cover bg-center bg-[url(https://e7.pngegg.com/pngimages/888/510/png-clipart-computer-icons-help-desk-technical-support-symbol-help-desk-icon-miscellaneous-silhouette-thumbnail.png)]"></div>
              <span>Help Desk</span>
            </div>
            {isLoading
              ? Array(10)
                  .fill(0)
                  .map((_, j) => (
                    <div
                      key={j}
                      className="h-16 flex items-center px-2.5 cursor-pointer ml-1 rounded-xl space-x-2"
                    >
                      <div className="w-12 h-12 bg-slate-200 rounded-full bg-cover bg-center animate-pulse"></div>
                      <p className="flex flex-col space-y-2.5">
                        <span className="rounded animate-pulse bg-slate-200 w-20 h-5"></span>
                        <span className="text-xs srounded animate-pulse bg-slate-200 w-32 h-2.5"></span>
                      </p>
                    </div>
                  ))
              : userList.map((user) => (
                  <>
                    <div
                      key={user._id}
                      onClick={() => {
                        setSelectUser(user);
                        setSelectAdmin(false);
                      }}
                      className={`h-16 flex items-center px-2.5 cursor-pointer ml-1.5 rounded-xl space-x-2 ${
                        user._id === selectUser?._id
                          ? "bg-cyan-200"
                          : "hover:bg-slate-100"
                      }`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${user.profileImg})`,
                        }}
                        className="w-12 h-12 bg-slate-200 rounded-full bg-cover bg-center"
                      ></div>
                      <p className="flex flex-col">
                        <span className="capitalize">
                          {user.firstName} {user.lastName}
                        </span>
                        <span className="text-xs lowercase">{user.email}</span>
                      </p>
                    </div>
                  </>
                ))}
          </section>
        </main>
        {/* Chat Section */}
        {selectUser?._id ? (
          <main
            style={{ backgroundSize: "500px auto" }}
            className={`group relative bg-[url(https://web.telegram.org/a/chat-bg-pattern-light.ee148af944f6580293ae.png)] bg-center duration-100 ${
              width < 1024 ? (selectUser?._id ? "w-full" : "w-0") : "w-[75%]"
            }`}
          >
            <main className="w-full h-full bg-white/75">
              <section className="h-14 bg-slate-100 border-b flex items-center px-[18px] space-x-1.5">
                <AiOutlineArrowLeft
                  onClick={() => setSelectUser({})}
                  className="text-2xl text-cyan-500 mr-1.5 cursor-pointer block lg:hidden"
                />
                <div
                  style={{
                    backgroundImage: `url(${
                      selectAdmin
                        ? "https://e7.pngegg.com/pngimages/888/510/png-clipart-computer-icons-help-desk-technical-support-symbol-help-desk-icon-miscellaneous-silhouette-thumbnail.png"
                        : selectUser.profileImg
                    })`,
                  }}
                  className="w-10 h-10 bg-slate-200 rounded-full bg-cover bg-center"
                ></div>
                <span className="capitalize">
                  {selectAdmin
                    ? "Help"
                    : selectUser.firstName || searchUser.name}{" "}
                  {selectAdmin ? "Desk" : selectUser.lastName}
                </span>
              </section>
              {/* chat messages */}
              <section className="text-xs lg:text-sm pt-5 pl-5 lg:pl-12 pr-4 lg:pr-11 space-y-5 h-[calc(100%-56px-56px)] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-transparent group-hover:scrollbar-thumb-slate-300 scrollbar-thumb-rounded-full">
                <div className="space-y-5">
                  {allMessages.map((message) => (
                    <div
                      key={message?._id}
                      className={`relative w-[75%] ${
                        message?.sender?.firstName === userName
                          ? "ml-auto flex justify-end"
                          : "mr-auto"
                      }`}
                    >
                      <p
                        className={`pt-1.5 pb-[7px] px-2.5 rounded-md w-fit ${
                          message?.sender?.firstName === userName
                            ? "bg-cyan-200"
                            : "bg-slate-200"
                        }`}
                      >
                        {message.messageContent}
                      </p>
                      <span
                        className={`absolute top-0 border-b-[20px]  ${
                          message?.sender?.firstName === userName
                            ? "border-b-cyan-200 border-r-[20px] border-r-transparent rotate-90 -right-2.5"
                            : "border-b-slate-200 border-l-[20px] border-l-transparent -rotate-90 -left-2.5"
                        }`}
                      ></span>
                    </div>
                  ))}
                  <div ref={dummyRef}></div>
                </div>
              </section>
              <form
                onSubmit={handleMessage}
                className="absolute bottom-0 h-14 w-full flex items-center px-5"
              >
                <div className="rounded-md overflow-hidden w-full h-10 shadow bg-slate-100 flex items-center px-5">
                  <input
                    value={message}
                    type="text"
                    placeholder="Type a message"
                    className="outline-none border-none w-full h-full bg-transparent"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button type="submit">
                    <IoIosSend className="text-4xl rotate-45 text-cyan-500" />
                  </button>
                </div>
              </form>
            </main>
          </main>
        ) : (
          <main
            style={{ backgroundSize: "500px auto" }}
            className="w-0 lg:w-[75%] bg-[url(https://web.telegram.org/a/chat-bg-pattern-light.ee148af944f6580293ae.png)] bg-center"
          >
            <main className="w-full h-full bg-white/75"></main>
          </main>
        )}
      </main>
    </main>
  );
};

export default Chat;
