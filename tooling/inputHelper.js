import fetch from 'node-fetch';

const multilineStringToArray = (multiLineString) => {
    const input = multiLineString.split('\n')
    input.pop()
    return input;
}
const splitBySpaces = (singleLineString) => {
    const line = singleLineString.split(' ');
    return line;
}

var requestOptions = {
  method: 'GET',
  headers: {
    "cookie": process.env.AdventCookie
  },
  redirect: 'follow'
};
const getInput = (day) => (
    fetch(`https://adventofcode.com/2021/day/${day}/input`, requestOptions)
    .then(response => response.text())
    .then(result => (result))
    .catch(error => console.log('error', error))
)
const runner = async () => {
    const input = await getInput(11);
    const result = multilineStringToArray(input);
    console.log({result})
}
runner()

