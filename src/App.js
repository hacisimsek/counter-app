import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import GeriSayim from './components/GeriSayim';
import clockImage from './images/clock.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${clockImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container maxWidth="sm">
        <GeriSayim  />
      </Container>
    </div>
  );
};

export default App;
