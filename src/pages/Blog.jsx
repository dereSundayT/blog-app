import {Banner, LeftHandSide, RightSideBar} from "../components";



const Blog =  () => {

    return (
        <>
            {/*  Parent Wrapper  border-radius */}
            <div className={'container-fluid bg-white'} style={{background:'white',height:'100vh',borderColor:'yellow' }}>
                {/* Banner Section */}
                <Banner/>


                {/*    Main Body Section*/}
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        {/*left hand side*/}
                        <LeftHandSide/>
                    </div>
                    <div className={'col-md-8'}>
                        {/* right hand side   */}
                        <RightSideBar/>
                    </div>



                </div>

            </div>
        </>
    )
}

export  default Blog