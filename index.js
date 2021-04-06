const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, someFn) {
        console.log(arr, someFn)

        let newArr; 
        if(arr instanceof Array){ //Array.isArray(arr)
            newArr = [...arr] //or newArr = arr.slice()
        }
        else {
          newArr = Object.values(arr)
        }
       
        for (let i = 0; i < newArr.length; i++) {
          someFn(newArr[i]);
          }

          return arr
    },


    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    }, 


  }
})()

fi.libraryMethod()
