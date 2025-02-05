//Black and white colors


// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// export default function Home() {
//   const [books, setBooks] = useState([]);
//   const [bookName, setBookName] = useState("");
//   const [shelfNo, setShelfNo] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:5000/books") // Backend endpoint
//       .then((res) => res.json())
//       .then((data) => setBooks(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const addBook = async () => {
//     await fetch("http://localhost:5000/add-book", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ bookName, shelfNo }),
//     });
//     setBooks([...books, { bookName, shelfNo }]);
//     setBookName("");
//     setShelfNo("");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-4 md:p-10">
//       {/* Main Heading */}
//       <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Bookstore System</h1>

//       {/* Main Container for Form and Table */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
//         {/* Form (1 column) */}
//         <div className="col-span-1">
//           <Card className="bg-white text-black shadow-lg">
//             <CardHeader>
//               <CardTitle>Add a Book</CardTitle>
//               <CardDescription className="text-black">
//                 Fill the form to add a new book to the system.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={(e) => { e.preventDefault(); addBook(); }}>
//                 <div className="grid w-full items-center gap-4">
//                   {/* Book Name Field */}
//                   <div className="flex flex-col space-y-1.5">
//                     <Label htmlFor="bookName">Book Name</Label>
//                     <Input
//                       id="bookName"
//                       type="text"
//                       placeholder="Book Name"
//                       value={bookName}
//                       onChange={(e) => setBookName(e.target.value)}
//                       className="bg-white"
//                       required
//                     />
//                   </div>

//                   {/* Shelf No Field */}
//                   <div className="flex flex-col space-y-1.5">
//                     <Label htmlFor="shelfNo">Shelf No</Label>
//                     <Input
//                       id="shelfNo"
//                       type="text"
//                       placeholder="Shelf No"
//                       value={shelfNo}
//                       onChange={(e) => setShelfNo(e.target.value)}
//                       className="bg-white"
//                       required
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     className="bg-white  text-black border-2 border-black hover:bg-black hover:text-white"
//                   >
//                     Add Book
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Table (2 columns) */}
//         <div className="col-span-2">
//           <Card className="bg-white text-black shadow-lg">
//             <CardContent>
//               <h2 className="text-xl md:text-2xl font-semibold mb-4">Books</h2>
//               <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
//                 <Table>
//                   <TableHeader>
//                     <TableRow>
//                       <TableHead>ID</TableHead>
//                       <TableHead>Book Name</TableHead>
//                       <TableHead>Shelf No</TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {books.map((book, index) => (
//                       <TableRow key={index}>
//                         <TableCell>{index + 1}</TableCell>
//                         <TableCell>{book.bookName}</TableCell>
//                         <TableCell>{book.shelfNo}</TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }



//Another Colors


"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "react-hot-toast";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [shelfNo, setShelfNo] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books`) // Backend endpoint
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const addBook = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add-book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookName, shelfNo }), 
    });
    setBooks([...books, { bookName, shelfNo }]);
    setBookName("");
    setShelfNo("");
    toast.success("Book added successfully!");
  };

  return (
    <div className="min-h-screen p-4 md:p-10" style={{ backgroundImage: "linear-gradient(to right, #4C51BF, #38B2AC)" }}>
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-center text-white mb-4 md:mb-8">Bookstore System</h1>

      {/* Main Container for Form and Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {/* Form (1 column) */}
        <div className="col-span-1">
          <Card className="shadow-lg" style={{ backgroundImage: "linear-gradient(to right, #4C51BF, #38B2AC)" }}>
            <CardHeader>
              <CardTitle className = "text-white">Add a Book</CardTitle>
              <CardDescription className = "text-white opacity-60">Fill the form to add a new book to the shelf</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => { e.preventDefault(); addBook(); }}>
                <div className="grid w-full items-center gap-4">
                  {/* Book Name Field */}
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="bookName" className = "text-white">Book Name</Label>
                    <Input
                      id="bookName"
                      type="text"
                      value={bookName}
                      onChange={(e) => setBookName(e.target.value)}
                      className="bg-white"
                      required
                    />
                  </div>

                  {/* Shelf No Field */}
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="shelfNo" className = "text-white">Shelf No</Label>
                    <Input
                      id="shelfNo"
                      type="text"
                      value={shelfNo}
                      onChange={(e) => setShelfNo(e.target.value)}
                      className="bg-white"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="bg-primary py-2 px-4 rounded border border-white 
                    hover:bg-white hover:text-primary"
                  >
                    Add Book
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Table (2 columns) */}
        <div className="col-span-2">
          <Card className="bg-white shadow-lg">
            <CardContent>
              <h2 className="text-xl md:text-2xl font-semibold my-4">Books</h2>
              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Book Name</TableHead>
                      <TableHead>Shelf No</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {books.map((book, index) => (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{book.bookName}</TableCell>
                        <TableCell>{book.shelfNo}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}