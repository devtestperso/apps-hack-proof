import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
	//useState HOOKS
	const [img0, setImg0] = useState(false)
	const [img1, setImg1] = useState(false)
	const [img2, setImg2] = useState(false)
	const [img3, setImg3] = useState(false)
	const [img4, setImg4] = useState(false)
    const [section1, setSection1] = useState(true)
    const [section2, setSection2] = useState(false)

	//main render
	return (
		<div>
			<Head>
				<title>رموز سنابشات </title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="https://i.imgur.com/Gm9G1iw.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<link rel="apple-touch-icon" sizes="76x76" href="https://i.imgur.com/Gm9G1iw.png"></link>
			</Head>
			{img0 && <div onClick={e => {setImg0(false);setSection1(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/NlL4JxC.jpg")] bg-contain bg-no-repeat ' style={{backgroundSize: '100% 100%'}}></div>}
			{img1 && <div onClick={e => {setImg1(false)}} className='w-full h-screen bg-[url("https://i.imgur.com/5kRwmZe.jpg")] bg-cover'></div>}
			

            {section1 && 
                <div className='w-full h-screen text-center justify-center py-16 bg-yellow-100'>
                    <img src="https://i.imgur.com/Gm9G1iw.png" className='mx-auto rounded-xl shadow-md w-2/5' alt="" />
                    <h1 className='text-2xl mt-10'>رموز سنابشات </h1>
                    <h1 className='text-blue-400 mt-10'>إختر كم تريد من الرموز</h1>
                    <select type="text" className='text-center mx-auto my-5 rounded-md shadow w-5/6 py-2 border-b-2 border-gray-300'>
                        <option value="">100</option>
                        <option value="">500</option>
                        <option value="">1000</option>
                        <option value="">5000</option>
                        <option value="">10,000</option>
                        <option value="">50,000</option>
                        <option value="">99,999</option>
                    </select>
                    <button onClick={e => {setSection1(false);setSection2(true)}} className='mx-auto rounded-xl shadow my-10 py-3 px-8 bg-yellow-300 text-white font-bold'>تهكير </button>
                </div>
            }

            {section2 && 
                <div className='w-full h-screen text-center justify-center py-16 bg-yellow-100'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png" className='mx-auto rounded-xl w-2/5' alt="" />
                    <h1 className='text-2xl mt-10'>مبروك</h1>
                    <h1 className='text-blue-400 mt-10'>تم زيادة الرموز على حسابك بنجاح </h1>
                    
                </div>
            }
		</div>
  )
}
