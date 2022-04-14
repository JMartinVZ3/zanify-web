import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(20,121,255,1)'
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