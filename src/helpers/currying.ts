export function curringFoo() {
  const curringBar = () => {
    return 'Hello, Bar'
  }

  return curringBar
}
