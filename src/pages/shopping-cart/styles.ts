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
    alignItems: 'center',
  },
  box: {
    padding: '16px',
    borderRadius: 10,
    backgroundColor: {
        color: '#F9FAFB',
    },
    alignItems:'center',
  },
  row: {
    margin: ' 0 25px 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  }
  
}));