import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container mx-auto flex flex-col justify-between mt-24 lg:mt-24 lg:px-20 bg-transparent z-50">
      <span className="flex flex-row justify-start items-center bg-transparent mb-0 pb-0">
        <Link
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          to="/"
          className="text-2xl font-bold text-[#A4B1D6] no-underline hover:underline hover:underline-offset-2 z-50 bg-transparent flex flex-row items-center max-w-fit h-1"
        >
          <svg
            className="transition-transform hover:-translate-x-2 font-extrabold"
            style={{
              background: "transparent",
              transform: isHovered ? "translateX(-9px)" : "translateX(0)",
              transition: "transform 0.1s ease",
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              className="bg-transparent"
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5h5.793A.5.5 0 0 1 12 8"
            />
          </svg>
          <p className="flex bg-transparent mt-3">Dev Sadisatsowala</p>
        </Link>
      </span>

      <h1 className="bg-transparent font-bold text-5xl mb-5 z-50">
        All Projects
      </h1>

      <table className="mt-10 z-50 bg-transparent w-full border-collapse ">
        <thead className="bg-transparent">
          <tr
            className="bg-transparent"
            style={{ borderBottom: "1px solid #5c5856" }}
          >
            <th
              className="px-6 py-4 text-left text-[#C0CCE8] bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                // fontSize: "1.2rem",
              }}
            >
              Year
            </th>
            <th
              className="px-6 py-4 text-left text-[#C0CCE8] bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                // fontSize: "1.2rem",
              }}
            >
              Project
            </th>
            <th
              className="px-6 py-4 text-left text-[#C0CCE8] bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                // fontSize: "1.2rem",
              }}
            >
              Built with
            </th>
            <th
              className="px-6 py-4 text-left text-[#C0CCE8] bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                // fontSize: "1.2rem",
              }}
            >
              Link
            </th>
          </tr>
        </thead>
        <tbody className="bg-transparent">
          <tr
            className="bg-transparent"
            style={{ borderBottom: "1px solid #5c5856" }}
          >
            <td
              className="px-6 py-4 text-left text-white bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                fontSize: "1rem",
              }}
            >
              2021
            </td>
            <td
              className="px-6 py-4 text-left text-white bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                fontSize: "1rem",
              }}
            >
              <a
                href=""
                className="text-[#A4B1D6] hover:underline hover:underline-offset-2"
              >
                Project Name
              </a>
            </td>
            <td
              className="px-6 py-4 text-left text-white bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                fontSize: "1rem",
              }}
            >
              Built with
            </td>
            <td
              className="px-6 py-4 text-left text-white bg-transparent"
              style={{
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                fontSize: "1rem",
              }}
            >
              <Link
                to=""
                className="text-[#A4B1D6] hover:underline hover:underline-offset-2 bg-transparent "
              >
                Link
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
