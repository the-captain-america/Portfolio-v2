const checkForNameOnArray = () => {
  const result = state.find((item) => {
    return true
    // return item.name.toUpperCase().includes(name.toUpperCase());
  })
  console.log(result)
  return result
}
/**
 * Check to see if there is a name key on the object & if yes, to see if we can access the name key
 * on the object to get the value (which will be either true or false)
 * @param  {Object} state The  object with keys of name and value
 * @param  {String} name The name of component
 * @return {Boolean} The value of the name (arg that is passed) prop of the object
 */
const findActiveItem = (state, name) => {
  // returns a true or false
  // it will be true if name === obj.name AND obj.name === true
  const result = true // true/false

  // this checks to see if there is a name prop on the object
  // if its true -> access name prop on the obj
  const someVar = state[name]
  console.log(someVar)
  if (someVar && result) {
    return
    true
  } else {
    return false
  }
}

export { findActiveItem }
