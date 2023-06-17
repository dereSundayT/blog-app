import {Banner, LeftHandSide, RightSideBar} from "../components";

import {useEffect, useState} from "react";


const Blog =  () => {

    const [number , setNumber] = useState(10)


    const handleClick = (number_) => {
        setNumber(Number(number_)+5)
    }

    useEffect(()=>{
        // setInterval(()=>setNumber(300),100)
        // setNumber(300)
    },[])

    return (
        <>
            {/*  Parent Wrapper  border-radius */}
            <div className={'container-fluid bg-white'} style={{background:'white',height:'100vh',borderColor:'yellow' }}>
                {/* Banner Section */}
                <Banner/>


                <input type={'text'} name={'number'} onChange={(e)=> handleClick(e.target.value)}/>

                <h1 onClick={()=>handleClick()}>{number}</h1>


                {/*    Main Body Section*/}
                <div className={'row'}>
                    <div className={'col-md-4 bg-danger'}>
                        {/*left hand side*/}
                        <LeftHandSide/>
                    </div>
                    <div className={'col-md-8 bg-primary'}>
                        {/* right hand side   */}
                        <RightSideBar/>
                    </div>



                </div>

            </div>
        </>
    )
}

export  default Blog