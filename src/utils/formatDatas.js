import moment from "moment"
import "moment/locale/pt-br"

const formatDate = (date) => {
  moment.locale("pt-br")
  const newDate = moment(date).format("L")

  return newDate
}


export {formatDate}