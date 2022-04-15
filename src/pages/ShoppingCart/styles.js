import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  heading: {
    color: 'rgba(255,255,255, 1)',
  },
  container: {
    margin: '0 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    borderRadius: 10,
    backgroundColor: {
        color: '#F9FAFB',
    }
  },
  row: {
    margin: ' 0 25px 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  }
  
}));