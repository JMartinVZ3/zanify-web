import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(20,121,255,1)',
    [theme.breakpoints.down("xs")]: {
      padding: '0 20px 0 20px',
      height: "75px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: '0 60px 0 60px',
      height: "75px",
    },
    "@media (min-width: 1280px)": {
      padding: '0 125px 0 125px',
      height: "105px",
    }
  },
  containedButton: {
    color: 'rgba(20,121,255, 1)',
    backgroundColor: 'rgba(255,255,255, 1)',
    margin: "0 10px 0 0", 
  },
  outlinedButton: {
    color: 'rgba(255,255,255, 1)',
  }
}));