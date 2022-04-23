import Head from 'next/head'
import { useState } from 'react'
import ReactPlayer from 'react-player'


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
				<title>Amanda the adventurer</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="https://i.imgur.com/72Yyin0.png" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000000" />
				<link rel="manifest" href="landscape.json"></link>
				<link rel="apple-touch-icon" sizes="76x76" href="https://i.imgur.com/72Yyin0.png"></link>
			</Head>
		
		<video autoPlay loop muted
		style={{
			position:"absolute",
			width:"100%",
			objectFit:"cover"
		}}
		>
<source src={"/amana.mp4"} type="video/mp4"/>


		</video>



           
		</div>
  )
}
