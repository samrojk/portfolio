// import React from "react";
// import { useState } from "react";
// import { VscVscode } from "react-icons/vsc";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { TbBrandReactNative, TbPrompt } from "react-icons/tb";
// import { FaReact, FaNodeJs, FaPython, FaFigma, FaRobot } from "react-icons/fa6";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiExpress,
//   SiDjango,
//   SiPostgresql,
//   SiGit,
//   SiNetlify,
//   SiReactrouter,
//   SiFirebase,
//   SiAppwrite,
//   SiOpenai,
//   SiNotion,
// } from "react-icons/si";

// const skills = () => {
//   const [activeTab, setActiveTab] = useState("tab1");
//   return (
//     <div className="text-primary-dark dark:text-primary mx-[42px] justify-items-center mt-[86px]">
//       {/* Heading */}
//       <div>
//         <h1 className="text-[42px] font-semibold tracking-wide">Skills</h1>
//       </div>

//       {/* Tab Buttons */}
//       <div className="flex gap-[46px] mt-[28px]">
//         <button
//           onClick={() => setActiveTab("tab1")}
//           className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
//             activeTab === "tab1"
//               ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
//               : "text-primary-dark/40 dark:text-primary/40"
//           }`}
//         >
//           Frontend
//         </button>

//         <button
//           onClick={() => setActiveTab("tab2")}
//           className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
//             activeTab === "tab2"
//               ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
//               : "text-primary-dark/40 dark:text-primary/40"
//           }`}
//         >
//           Backend
//         </button>

//         <button
//           onClick={() => setActiveTab("tab3")}
//           className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
//             activeTab === "tab3"
//               ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
//               : "text-primary-dark/40 dark:text-primary/40"
//           }`}
//         >
//           Languages
//         </button>

//         <button
//           onClick={() => setActiveTab("tab4")}
//           className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
//             activeTab === "tab4"
//               ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
//               : "text-primary-dark/40 dark:text-primary/40"
//           }`}
//         >
//           Tools
//         </button>

//         <button
//           onClick={() => setActiveTab("tab5")}
//           className={`flex py-2 px-4.5 text-center font-medium rounded-xl border-2 border-primary-dark/20 dark:border-primary/20 transition-all duration-200 hover:border-primary-dark/40 hover:dark:border-primary/40 ${
//             activeTab === "tab5"
//               ? "bg-primary-dark text-primary border-primary-dark font-medium dark:text-primary-dark dark:bg-primary dark:border-primary"
//               : "text-primary-dark/40 dark:text-primary/40"
//           }`}
//         >
//           Learning
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="mt-[28px] p-4">
//         {/* Tab-1 */}
//         {activeTab === "tab1" && (
//           <div className="grid grid-cols-4 gap-[16px]">
//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <FaReact size={28} />
//               React.js
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <RiTailwindCssFill size={28} />
//               Tailwind CSS
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiJavascript size={28} />
//               JavaScript
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiTypescript size={28} />
//               TypeScript
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiReactrouter size={28} />
//               React Router
//             </span>
//           </div>
//         )}

//         {/* Tab-2 */}
//         {activeTab === "tab2" && (
//           <div className="grid grid-cols-4 gap-[16px]">
//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <FaNodeJs size={28} />
//               Node.js
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiExpress size={28} />
//               Express.js
//             </span>
//           </div>
//         )}

//         {/* Tab-3 */}
//         {activeTab === "tab3" && (
//           <div className="grid grid-cols-4 gap-[16px]">
//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <FaPython size={28} />
//               Python
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiJavascript size={28} />
//               JavaScript
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiTypescript size={28} />
//               TypeScript
//             </span>
//           </div>
//         )}

//         {/* Tab-4 */}
//         {activeTab === "tab4" && (
//           <div className="grid grid-cols-4 gap-[16px]">
//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <FaFigma size={28} />
//               Figma
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiGit size={28} />
//               Git
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiNetlify size={28} />
//               Netlify
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <VscVscode size={28} />
//               VsCode
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <TbPrompt size={28} />
//               Prompt Eng.
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiNotion size={28} />
//               Notion
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiAppwrite size={28} />
//               Appwrite
//             </span>
//           </div>
//         )}

//         {/* Tab-5 */}
//         {activeTab === "tab5" && (
//           <div className="grid grid-cols-4 gap-[16px]">
//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <FaRobot size={28} />
//               AI/ML
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiPostgresql size={28} />
//               PostgreSQL
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiFirebase size={28} />
//               Firebase
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <SiDjango size={28} />
//               Django
//             </span>

//             <span className="flex flex-row items-center gap-[14px] text-[16px] font-medium border-2 border-primary-dark/20 hover:border-green-500/80 dark:border-primary/20 dark:hover:border-red-500/80 shadow-xl shadow-primary-dark/0 dark:hover:shadow-red-500/10 px-4 py-[16px] rounded-xl w-[240px] bg-primary-dark/2 dark:bg-primary/2.5 transition-colors duration-300 dark:hover:text-red-100 text-primary-dark/80 dark:text-primary hover:shadow-green-500/10 hover:text-green-800">
//               <TbBrandReactNative size={28} />
//               React Native
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default skills;
