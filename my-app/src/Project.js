const Project = ({imageUrl, cardHeading, cardBody, cardColor, cardDesc, href}) => {
  return (
    <div className='card-cont' style={{marginBottom: '2em', overflowY: 'scroll', overflowX: 'scroll'}}>
      <div className='left-card-cont' style={{width: '300px', flex: '0', marginRight: '12em'}}>
        <img src={imageUrl} style={{
          borderRadius: '20px',
         
        }} className='project-img'></img>
      </div>
      <div className='right-card-cont' style={{flex: '1'}}>
        <h3 style={{
          fontSize: '2em'
        }}>{cardHeading}</h3>
        <p style={{fontSize: '1.2EM'}}>{cardBody}</p>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{
          width: '20px',
          height:'20px',
          backgroundColor: `#${cardColor}`,
          borderRadius: '50%'
}}></div>
        <h5 style={{
          fontSize: '1.3em',
          fontWeight: '700',
          marginLeft: '0.5EM'
        }}>{cardDesc}</h5>
        </div>
        <a href={href} style={{
          color: '#616BF1',
          textDecoration: 'NONE',
          fontWeight: '700'
        }}>LINK TO PROJECT</a>
      </div>
    </div>
  )
}

export default Project
