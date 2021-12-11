## Advent of code-js-toolbox
```bash
git clone https://github.com/MichaelDimmitt/advent-of-code-js-toolbox.git;
yarn install;
export AdventCookie="<yourtoken>";
node tooling/inputHelper.js;
```

## FAQ:
1) How do I get my token?<br/>
Navigate here: https://adventofcode.com/2021/day/11<br/>
Sign in.<br/>
Click get your puzzle input.<br/>
In chrome go to network tab and copy as curl https://adventofcode.com/2021/day/11/input .<br/>
Paste into your terminal and copy the section after `-H 'cookie: ` and before `'   --compressed`


## Get advent of code input using javascript and transform it to an array of strings
1) This project was built using node --version 17.2.0


## Future items:
1) use node-localstorage, do not make the same request twice<br/>since the input does not change.
2) export as an npm package and a github registry package. (in the meantime you could clone this project and add all of your projects into the repo locally on your own fork.
