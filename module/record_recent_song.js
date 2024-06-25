const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  }
  return request(
    'POST',
    `/api/play-record/song/list`,
    data,
    createOption(query, 'weapi'),
  )
}
