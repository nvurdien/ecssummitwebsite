//NOTE: PLEASE MAKE SURE IMAGES ARE IN img FOLDER!

/**
* Card Generator
*
* @param image
* @param name
* @param title
* @param description
* @param email
* @param null github
* @param null linkedin
*
*/
const Card = ({image, name, title, description, email, github = null, linkedin = null}) => {
    const imageStyle = {
        height: 350,
        width: 300,
        backgroundImage: "url('img/" + image+ "')",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const iconColor = {
        color: "white",
    }
    return(
        
        <div>
          <figure className="imghvr-blur" style={imageStyle}>
            <figcaption className="uk-text-center">
              <h3>{name}
                <h4>{title}</h4>        
              </h3>
              <p>
                  <a style={iconColor} href={"mailto:" + email} aria-label={name + "'s mail link"}><i className="fas fa-envelope fa-lg"></i></a>
                  {github ? (<a style={iconColor} href={github} target="_blank" aria-label={name + "'s github link"} className="uk-margin-left"><i className="fab fa-github-square fa-lg"></i></a>) : null}
                  {linkedin ? (<a style={iconColor} href={linkedin} target="_blank" aria-label={name + "'s linkedin link"} className="uk-margin-left"><i className="fab fa-linkedin fa-lg"></i></a>) : null}
              </p>
            </figcaption>
            
          </figure>
        </div>
    );
};

/*
<div className="uk-overlay uk-padding-remove-bottom uk-position-bottom uk-overlay-primary clearfix">
    <div className="uk-float-left"><p style={iconColor}>{name}</p></div> <div className="uk-float-right"><p><a style={iconColor} href={"mailto:" + email} aria-label={name + "'s mail link"}><i className="fas fa-envelope fa-lg"></i></a></p></div>
</div>
*/

/**
* CardList Generator
*
* @param members * an array must include [id, image, name, title, description, email]
*
*/
const CardList = ({members}) => {
  return (
    <div className="uk-flex uk-flex-center uk-margin-auto uk-margin-vertical uk-grid-small" uk-scrollspy="cls: uk-animation-fade; target: > div > figure; repeat: true" uk-sortable="handle: div" uk-grid="">
          {
              members.map((user, i) => {
              return (
                  <Card
                      key={members[i].id}
                      image={members[i].image}
                      name={members[i].name}
                      title={members[i].title}
                      description={members[i].description}
                      email={members[i].email}
                      github={members[i].github}
                      linkedin={members[i].linkedin}  />
              );
              })
          }
      </div>
  )
};

/**
* Shows the Spring Board Members (hide this if it's not spring yet!)
*/

ReactDOM.render(<div>

<CardList members={Committee} />

</div>, document.getElementById("committee-members"));
                
                
ReactDOM.render(<div>

<CardList members={AdvisorsList} />

</div>, document.getElementById("supervisors"));
