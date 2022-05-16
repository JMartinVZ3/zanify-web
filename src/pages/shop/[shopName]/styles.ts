import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  sizedBox: {
    [theme.breakpoints.down("xs")]: {
      margin: '100px 0 0 0',
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: '100px 0 0 0',
    },
    "@media (min-width: 1280px)": {
      margin: '175px 0 0 0',
    }
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      margin: '0 20px 0 20px',
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: '0 60px 0 60px',
    },
    "@media (min-width: 1280px)": {
      margin: '0 125px 0 125px',
    }
  },
}));