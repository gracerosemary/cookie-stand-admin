import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [location, setLocation] = useState('location')
  const [min, setMin] = useState('min')
  const [max, setMax] = useState('max')
  const [average, setAverage] = useState('average')

  function standHandler(event){
    event.preventDefault()
    // alert(event.target.create.value)
    setLocation(event.target.location.value)
    setMin(event.target.min.value)
    setMax(event.target.max.value)
    setAverage(event.target.average.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="flex items-center justify-center flex-1">

      <div className="flex">
        <form onSubmit={standHandler} className="bg-green-300 rounded-lg">
            <div className="grid place-items-center p-2">
              <p className="text-2xl text-center p-4">Create Cookie Stand</p>
            </div>

            <div className="flex p-2">
              <label className="text-left p-2">
                Location  
                <input name="location" className="flex-1 px-96 ml-2" placeholder="Barcelona"></input>
              </label>
            </div>

          <div className="p-4 flex space-x-4">

            <div className="p-1 flex-1 text-center">
              <label className="">
                Minimum Customers per Hour
                <br />
                <input name="min" className="px-4"></input>
              </label>
            </div>

            <div className="p-1 flex-1 text-center">
              <label>
                Maximum Customers per Hour
                <br />
                <input name="max" className="px-4"></input>
              </label>
            </div>

            <div className="p-1 flex-1 text-center">
              <label>
                Average Cookies per Sale
                <br />
                <input name="average" className="px-4"></input>
              </label>
            </div>

            <div className="p-1 flex-1 text-center">
              <button className="px-12 py-4 bg-green-500">Create</button>
            </div>

          </div>
        </form>
      </div>

      </main>

        <div className="text-center">
          <div className="p-4">
            <p className="text-gray-600">Report Table Coming Soon...</p>
          </div>

          <div className="p-4 mb-4">
            <p className="text-gray-600 text-lg">{"{"}"location" : "{location}", "minCustomers" : {min}, "maxCustomers" : {max}, "avgCookies" : {average}{"}"}</p>
          </div>
        </div>

      <footer className="p-4 flex items-center w-full h-14 border-t bg-green-500 mb-6">
          ©2021
      </footer>

    </div>
  )
function Header(props){
  return(
    <header className="p-4 text-4xl w-full bg-green-500">
        <h1>{props.title}</h1>
    </header>
  )
}


}



