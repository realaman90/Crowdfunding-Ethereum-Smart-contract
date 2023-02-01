import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import factory from '../../ethereum/factory'


function Home({ campaigns }) {
//   const[campaigns, setCampaigns] = useState([])
//   useEffect(()=>{
//     async function callFactory (){
//       const res = await factory.methods.getDeployedCampaigns().call();
//       setCampaigns(res)

//     }
//      callFactory();
     
//   },[]);
//  console.log(campaigns)
  
  return (
    <>
      <Head>
        <title>Crowdfund | Home</title>
        <meta name="Crowdfund" content="Corwdfund dapp allow you to collect funds for your next big product in total transprency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>{campaigns[0]}</div>
    </>
  )
}

//for serverside render
Home.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};


export default Home;
