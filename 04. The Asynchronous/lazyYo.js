// この関数は実行に1秒かかります
function syncFunc(callback) {
  setTimeout(function() {
    console.log('Yo')
  }, 1000)
}

console.log('Hey')
syncFunc()
console.log('Check it out!')