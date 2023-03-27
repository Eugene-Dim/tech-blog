module.exports = {

  format_time: (date) => {
    return date.ToLocaleTimeString()
  },
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${date.getDate()}/${new Date()
    .getDate()}/${new Date(date).getFullYear()}`;
  }
};
