import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  box: {
      borderRadius: 10,
      display: 'flex',
      height: "130",
      width: "130",
  },
  row: {
    padding: '0',
    margin: ' 0 0 0 0',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    padding: '0',
    paddingLeft: '16px',
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
  },
  rowProductTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

}));