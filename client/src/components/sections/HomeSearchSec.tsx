// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// const HomeSearchSec = () => {
//   const router = useRouter();
//   const [search, setSearch] = useState("");
//   const [type, setType] = useState("");
//   const [category, setCategory] = useState("");

//   const handleSearch = () => {
//     const params = new URLSearchParams();
//     if (search) params.append("city", search);
//     if (type) params.append("type", type);
//     if (category) params.append("category", category);
//     router.push(`/properties?${params.toString()}`);
//   };
//   return (
//     <section className="max-w-7xl mx-auto  relative z-10 -mt-7.5">
//       <div
//         className="bg-white rounded-2xl p-6 flex gap-3 flex-wrap items-center"
//         style={{ boxShadow: "0 4px 40px rgba(0,0,0,0.1)" }}
//       >
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search by city, area or property name..."
//           className="flex-1 min-w-48 rounded-lg px-4 py-3 text-sm outline-none text-(--text-dark) border-[1.5px] border-(--border)"
//         />
//         <select
//           value={type}
//           onChange={(e) => setType(e.target.value)}
//           className="rounded-lg px-4 py-3 text-sm outline-none bg-white text-(--text-dark) border-[1.5px] border-(--border) min-w-32.5 "
//         >
//           <option>For Sale</option>
//           <option>For Rent</option>
//         </select>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="rounded-lg px-4 py-3 text-sm outline-none bg-white text-(--text-dark) border-[1.5px] border-(--border)  min-w-32.5"
//         >
//           <option>All Types</option>
//           <option>House</option>
//           <option>Apartment</option>
//           <option>Plot</option>
//           <option>Commercial</option>
//         </select>
//         <button
//           onClick={handleSearch}
//           className="text-white font-semibold text-sm px-7 py-3 rounded-lg cursor-pointer hover:opacity-90 transition bg-(--orange) border-0"
//         >
//           Search
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HomeSearchSec;
