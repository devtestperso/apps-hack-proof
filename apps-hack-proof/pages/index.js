import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
	//useState HOOKS
	const [img0, setImg0] = useState(true)
	const [img1, setImg1] = useState(false)
	const [img2, setImg2] = useState(false)
	const [img3, setImg3] = useState(false)
	const [img4, setImg4] = useState(false)

	//main render
	return (
		<div>
			<Head>
				<title>Fortnite</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="https://i.imgur.com/iuk0e18.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<link rel="apple-touch-icon" sizes="76x76" href="https://i.imgur.com/iuk0e18.png"></link>
			</Head>
			{img0 && <div onClick={e => {setImg0(false);setImg1(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/yDHHXkD.jpg")] bg-contain bg-no-repeat ' style={{backgroundSize: '100% 100%'}}></div>}
			{img1 && <div onClick={e => {setImg1(false);setImg2(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/7dV2wwZ.jpg")] bg-cover'></div>}
			{img2 && <div onClick={e => {setImg2(false);setImg3(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/A4SUfFx.jpg")] bg-cover'></div>}
			{img3 && <div onClick={e => {setImg3(false);setImg4(true)}} className='w-full h-screen bg-[url("https://i.imgur.com/ujsz2CE.jpg")] bg-cover'></div>}
			{img4 && <div className='w-full h-screen bg-[url("https://i.imgur.com/oRfr52o.jpg")] bg-cover'></div>}
		</div>
  )
}
