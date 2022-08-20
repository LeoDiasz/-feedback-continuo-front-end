import moment from "moment"
import "moment/locale/pt-br"

const formatDateExtended = (date) => {
  moment.locale("pt-br")
  const newDate = moment(date).format("L")

  return newDate
}


export {formatDateExtended}