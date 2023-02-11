export default (raw) => {
  const dataBody = raw.trim().split('\n')//.map(_ => _.split(','))
  const headers = dataBody.shift()

const res = dataBody.map((row, i) => {
  // const record = 
})

  console.log({
    dataBody,
    headers
  });

}