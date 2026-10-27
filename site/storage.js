'use strict';
window.EchoStorage=(()=>{let memory={},available=true;return {get available(){return available},read(key,fallback){try{const raw=localStorage.getItem(key);return raw===null?fallback:JSON.parse(raw)}catch{available=false;return key in memory?memory[key]:fallback}},write(key,value){memory[key]=value;try{localStorage.setItem(key,JSON.stringify(value))}catch{available=false}}}})();
