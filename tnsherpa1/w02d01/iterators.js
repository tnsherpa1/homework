//where our iterators live
var o_o = {
  var fillMe = [];
  each: function(collection, callback) {
    for (var i=0; i<collection.length; i++){
      callback(collection[i]);
    }
  },
    /*
    	**Iterate through the collection and call the callback with each item.**
   		
   		Expect:
   		```
   		var fillMe = [];
   		o_o.each(["words", "are", "here"], function(item) {
   		  fillMe.push(item);
   		});
   		fillMe //`fillMe` should now be full
   		=> ["words", "are", "here"]
    	```
    */
  map: function(collection, callback){
    var newCollection =[];
    for (var i=0; i<collection.length; i++) {
      newCollection.push(callback(collection[i]));
    }
    return newCollection;
    /*
    	Iterate through the collection, call the callback with each item,
    	push the output of that result into a new collection,
    	and return the new collection.

    	Expect:
    	```
			var plusOne = function(n){ return n + 1; };
			o_o.map([1,2,3], plusOne);
			=> [2,3,4]
    	```
    */
  },
  filter: function(collection, callback) {
    var evenCollection = [];
    for(var i=0; i<collection.length; i++) {
      if (callback(collection[i])) {
      evenCollection.push(collection[i]);
    }
    }
    /*
    	Do the same as `map` but anticipate that the callback only returns
    	true or false. If the callback returns true, push it into a new collection;
    	otherwise, do not. Return the new collection.

    	Expect:
    	```
    	var noOdds = function(n) { return n % 2 === 0; };
    	o_o.filter([2,3,4,5,6,8,7], noOdds);
    	=> [2,4,6,8]
    	```
    */
  }
};
