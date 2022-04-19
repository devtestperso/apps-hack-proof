import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
	//useState HOOKS
	const [img0, setImg0] = useState(true)
	const [img1, setImg1] = useState(false)
	const [img2, setImg2] = useState(false)
	const [img3, setImg3] = useState(false)
	const [img4, setImg4] = useState(false)
    const [section1, setSection1] = useState(false)

	//main render
	return (
		<div>
			<Head>
				<title>Death Stranding</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="https://i.imgur.com/zFlpCdm.jpg" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<link rel="apple-touch-icon" sizes="76x76" href="https://i.imgur.com/zFlpCdm.jpg"></link>
			</Head>
			{img0 && <div onClick={e => {setImg0(false);setSection1(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/NlL4JxC.jpg")] bg-contain bg-no-repeat ' style={{backgroundSize: '100% 100%'}}></div>}
			{img1 && <div onClick={e => {setImg1(false)}} className='w-full h-screen bg-[url("https://i.imgur.com/5kRwmZe.jpg")] bg-cover'></div>}
			

            {section1 && 
                <div className='w-full h-screen text-center justify-center py-16'>
                    <h1 className='text-2xl mt-10'>تسجيل الدخول </h1>
                    <h1 className='text-blue-400 mt-10'>إسم المستخدم أو البريد الإلكتروني </h1>
                    <input type="text" className='text-center mx-auto my-5 rounded-md shadow w-5/6 py-2 border-b-2 border-gray-300' placeholder='username/email...' />
                    <button onClick={e => {setSection1(false);setImg1(true)}} className='mx-auto rounded-xl shadow my-10 py-3 px-8 bg-yellow-300 text-white font-bold'>تسجيل الدخول بدون كلمة المرور</button>
                </div>
            }
		</div>
  )
}
