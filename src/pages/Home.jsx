import React from 'react'
import Landingimg from '../assets/LandingPage.jpg'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { Card,Button } from 'react-bootstrap'
function Home() {
  return (
    <>
    <div className="w-100 d-flex justify-content-center align-items-center rounded container ">
   <div className='container'>
   <div className='row mt-5  '>
        <div className="col-lg-6 mt-5">
          <h1 style={{textAlign:'justify',fontSize:'80px'}}> <i className='fa-brands fa-docker'></i>Project Fair</h1>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex incidunt earum magnam perspiciatis. Fugit in porro modi repellendus hic, quos sit recusandae, aliquam ab eveniet laborum, adipisci nostrum obcaecati atque.</p>
          <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
        </div>
        <div className="col-lg-6">
      <img style={{width:'80%',height:'500px'}} src={Landingimg} alt="" />
        </div>
      </div>
   </div>
    </div>
    <hr />
    <div className='mt-5'>
  <h1 className='text-center mb-5'>EXPLORE OUR PROJECTS</h1>
  <marquee>
    <div className='d-flex'>
<div className='me-5'>
<ProjectCard />
</div>

    </div>
  </marquee>
</div>
{/* <div style={{minHeight:'100vh'}}></div>
<div className='mt-5'>

</div> */}
{/* testimony */}
    <div className='d-flex justify-content-center align-items-center mb-5'>
    <h1>OUR TESTIMONIALSs</h1>

    </div>
    <div className='d-flex justify-content-evenly align-items-center'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Img variant="top" style={{width:'60px',height:'60px'}} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?rs=1&pid=ImgDetMain" />
        <span>Alexia</span>
        </Card.Title>
        
        <Card.Text>
         <div className='d-flex justify-content-center'>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>

         </div>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis ipsum molestiae! Dicta laboriosam odio cumque, tenetur deleniti consequatur ipsum quos quibusdam dolores, debitis, placeat assumenda totam. Cumque, dolores facilis?</p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Img variant="top" style={{width:'60px',height:'60px'}} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/R.c7b4c87887367be0b398072112492d86?rik=P0euwBnwSE2%2bwQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-5FrCTYU_NWY%2fTrLEnj7aIxI%2fAAAAAAAACYM%2fjh923b7GONI%2fw1200-h630-p-k-no-nu%2fbusiness_user.png&ehk=UZ7MGRZOVSUPBKCGsEYKHuufzfuhlYMz1d6NVxTHlBY%3d&risl=&pid=ImgRaw&r=0" />
        <span>Luke Damian</span>
        </Card.Title>
        
        <Card.Text>
         <div className='d-flex justify-content-center'>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>

         </div>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis ipsum molestiae! Dicta laboriosam odio cumque, tenetur deleniti consequatur ipsum quos quibusdam dolores, debitis, placeat assumenda totam. Cumque, dolores facilis?</p>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Img variant="top" style={{width:'60px',height:'60px'}} className='rounded-circle img-fluid' src="https://volkandmcelroy.com/wp-content/uploads/2016/09/avatar_18.jpg" />
        <span>Max Miller</span>
        </Card.Title>
        
        <Card.Text>
         <div className='d-flex justify-content-center'>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>

         </div>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed facilis ipsum molestiae! Dicta laboriosam odio cumque, tenetur deleniti consequatur ipsum quos quibusdam dolores, debitis, placeat assumenda totam. Cumque, dolores facilis?</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default Home