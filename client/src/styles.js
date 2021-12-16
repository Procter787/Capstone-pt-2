import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#ff7700',
    borderCollapse: "separate",
    borderRadius: "6"
  },
  image: {
    marginLeft: '15px',
  },
  paragraph: {
    textAlign: 'center',
  
  },
  button: {
    alignItems: 'center',
    textAlign: 'center'
  },
  container: {
    
  }
}));


// {/* <div className="jumbotron" >
//     {/* <h1 className={classes.header}>Fly Utah</h1> */}
//     <p className={classes.paragraph}>Website designed to help you have the best day on the river possible!</p>
//     <Link to="about" className={classes.button}>
//     {/* "btn btn-primary btn-lg" */}
//       Learn more
//     </Link>
//   </div> */}