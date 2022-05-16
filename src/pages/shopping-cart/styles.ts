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
      margin: '140px 0 0 0',
    }
  },
  heading: {
    color: 'rgba(255,255,255, 1)',
  },
  grid: {
    [theme.breakpoints.down("xs")]: {
      padding: '0 20px 0 20px',
    },
    [theme.breakpoints.between("sm", "md")]: {
      padding: '0 20px 0 20px',
    },
    "@media (min-width: 1280px)": {
      padding: '0 50px 0 50px',
    }
  },
  container: {
    backgroundColor: "#E5E7EB",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      margin: '0 0 0 0',
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: '0 0 0 0',
    },
    "@media (min-width: 1280px)": {
      margin: '0 0 0 0',
    }
  },
  box: {
    padding: '20px',
    borderRadius: 10,
    alignItems:'center',
    backgroundColor: "#F9FAFB"
  },
  row: {
    margin: ' 0 25px 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  }
  
}));