import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  box: {
      borderRadius: 10,
      display: 'flex',
  },
  row: {
    padding: '10px',
    margin: ' 0 0 10px 0',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  rowQuantity: {
    margin: '0 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }

}));