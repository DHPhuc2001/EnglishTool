var ntn = {
  sleep (ms) { 
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },
  bar () { console.log('bar') },
  nat () { console.log('nat') }
}

export default ntn