import { useState } from 'react'
import { getToken } from '../services/data-fetcher'
import LoginForm from '../components/login-form';
import CookieStandAdmin from '../components/cookie-stand-admin';

// import { hours } from '../data'
// import Link from 'next/link'
import Head from 'next/head'

export default function Home() {

  const [token, setToken] = useState();

  const [username, setUsername] = useState('');

  async function loginHandler(values) {
    const fetchedToken = await getToken(values);

    setToken(fetchedToken);

    setUsername(values.username);
  }

  function logoutHandler() {
    setToken(null);
  }

  if (!token) return <LoginForm onSubmit={loginHandler} />

  return <CookieStandAdmin token={token} onLogout={logoutHandler} username={username} />


  // const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  // const totalSales = hourlySales.reduce((acc, hour) => acc = acc + hour, 0)
  // const totalLength = answeredQuestions.length

  // function onCreate(event){
  //   event.preventDefault()
  //   const answeredQuestion = {
  //     location: event.target.location.value,
  //     min: event.target.min.value,
  //     max: event.target.max.value, 
  //     average: event.target.average.value,
  //   }
  //   setAnsweredQuestions([...answeredQuestions, answeredQuestion])
  // }

  return (
    <div className="bg-green-50 flex flex-col items-center justify-center">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header title="Cookie Stand Admin" answeredQuestionsArray = {answeredQuestions}/>
      <main className="">
        <CookieForm />
        <ReportTable answeredQuestionsArray = {answeredQuestions}/>
      </main>
      <Footer /> */}
    </div>
  )
// function Header(props){
//   return(
//     <header className="p-3 w-full bg-green-500 my-0">
//         <div className="flex items-center justify-between">
//           <h1 className="text-4xl">{props.title}</h1>
//           <div className="bg-gray-50 p-1 rounded-md">
//             <Link href="/overview">
//               <a>Overview</a>
//             </Link>
//           </div>
//         </div>
//     </header>
//   )
// }

// function CookieForm(props){
//   return(
//     <div className="flex justify-center bg-green-50 mt-8 mb-8">
//       <form onSubmit={onCreate} className="bg-green-300 rounded-lg">
//         <div className="">
//           <p className="text-2xl text-center p-4">Create Cookie Stand</p>
//         </div>

//         <div className="flex p-2 text-left">
//           <label className="p-2">
//             Location  
//             <input name="location" className="flex-1 px-96 ml-2"></input>
//           </label>
//         </div>

//       <div className="p-4 flex space-x-4">
//         <div className="p-1 flex-1 text-center bg-green-200 rounded-md">
//           <label className="">
//             Minimum Customers per Hour
//             <br />
//             <input name="min" className="px-4"></input>
//           </label>
//         </div>

//         <div className="p-1 flex-1 text-center bg-green-200 rounded-md">
//           <label>
//             Maximum Customers per Hour
//             <br />
//             <input name="max" className="px-4"></input>
//           </label>
//         </div>

//         <div className="p-1 flex-1 text-center bg-green-200 rounded-md">
//           <label>
//             Average Cookies per Sale
//             <br />
//             <input name="average" className="px-4"></input>
//           </label>
//         </div>

//         <div className="p-1 flex-1 text-center">
//           <button className="px-24 py-4 bg-green-500 rounded-md">Create</button>
//         </div>
//       </div>
//       </form>
//     </div>
//   )
// }

// function ReportTable(props){
//   if (totalLength == 0) {
//     return (<p className="text-center flex justify-center">No Cookie Stands Available</p>)
//   }
//   return(
//     <div className="mb-12 text-center flex justify-center">
//       <table className="table-fixed">
//         <thead className="">
//             <tr className=" bg-green-500">
//               <th className="px-6">Location</th>
//               {hours.map(hour => (<th className="px-3">{hour}</th>))}
//               <th className="px-4">Totals</th>
//             </tr>
//         </thead>
//         <tbody className="bg-green-300 ">
//           {props.answeredQuestionsArray.map(item =>(
//             <tr className="odd:bg-green-400">
//               <td className="border border-gray-500">{item.location}</td>
//               {hourlySales.map(sales => (<td className="border border-gray-500">{sales}</td>))}
//               <td className="border border-gray-500">{totalSales}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot className="bg-green-500">
//           <tr className="font-bold">
//             <td >Totals</td>
//             {hourlySales.map(sales => (<td>{sales * totalLength}</td>))}
//             <td>{totalSales * totalLength}</td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   )
// }

// function Footer(props){
//   return( 
//       <footer className="bg-green-500 w-full border-t text-xl h-screen">
//         <p className="p-3">{totalLength} Locations World Wide </p>
//       </footer>
//   )
// }
}



