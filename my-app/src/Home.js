import HeroImage from './HeroImage.jpg';
import Github from './Github.png'
import Discord from './Discord.png'
import Dribbble from './Dribbble.png'
import Reddit from './Reddit.png'

const Home = () => {
  return (
    <div className='HOME-CONT' style={{
    }}>
      <div style={{marginTop: '4.5EM',
    }}>
        <h1 style={{color: '#616BF1', fontSize: '2.5em'}}>Yefim Blokh</h1>
        <h2 style={{fontSize: '1em', fontWeight: '500'}}>
          I'm Yefim, a 13-year-old, web dev who loves to make awesome/useful projects. I have experience in front-end technologies like HTML, CSS, JS, and react. I also rely heavily on frameworks such as react.js and SCSS. I additionally use Figma to produce UI mockups and use react native for my mobile applications. All in all, I like web development because of the thousands of real-world projects you can deploy and use in your everyday life.
        </h2>
        <div  className='contacts' style={{
          marginTop: '2EM',
          backgroundColor: '#FF8578',
          padding: '0.7em',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '300px',
          height: '40px'
        }}>
         <a href='https://github.com/yefim94'>
         <img src={Github} width='40' style={{}} />
         </a>
         <a>
         <img onClick={()=> {alert('my discord tagg is yep#0666')}} src={Discord} width='40' style={{
            transform: `translateY(3px)`
          }} />
         </a>
          <a href='https://dribbble.com/YefimBlokh'>
          <img src={Dribbble} width='40' style={{}} />
          </a>
          <a href='https://www.reddit.com/user/Realistic_Camel3423'>
          <img src={Reddit} width='40' style={{}} />
          </a>
        </div>
      </div>
      <div style={{
      }}>
        <a href='https://www.freepik.com/free-vector/colourful-illustration-programmer-working_5483080.htm#page=1&query=programmer&position=1'>
        <img width='600' style={{
          objectFit: 'cover',
        }} src={HeroImage}></img>
        </a>
      </div>
    </div>
  )
}

export default Home
