function c() {
  //setTimeout(() => { console.log('c') }, 1000)
  setTimeout(() => { console.log('c') }, 0)
  // console.log('c')
  return
}

function b() {
  console.log('b')
  return c()
}

function a() {
  b()
  console.log('a')
  return
}
// c b a
// b a c *
// b c a <-
a()