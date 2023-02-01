import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import factory from '../../ethereum/factory'


export default function Home() {

  useEffect(()=>{
    async function callFactory (){
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log(campaigns)

    }
    callFactory();
  });
 
  
  return (
    <>
      <Head>
        <title>Crowdfund | Home</title>
        <meta name="Crowdfund" content="Corwdfund dapp allow you to collect funds for your next big product in total transprency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>TEst</div>
    </>
  )
}
