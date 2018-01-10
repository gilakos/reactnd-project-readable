import Moment from 'moment'

//function to get time reference from current time
export const fromNow = (time) => {
  return Moment(time).valueOf() <= Moment().subtract(7, 'days').valueOf() ?
    Moment(time).format('LLL') : Moment(time).utc().fromNow()
}

//function to capitalize first letter
export const capitalizeFirst = (string) => 
{
    return string.charAt(0).toUpperCase() + string.slice(1)
}
