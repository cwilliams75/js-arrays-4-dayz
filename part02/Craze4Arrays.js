class Craze4Arrays {
    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */

    removeValue(objectArray, objectToRemove) {
        objectArray = objectArray.filter((v) => (v === objectToRemove)).length;
        return objectArray;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */

    getMostCommon(inputArray, valueToEvaluate) {
        let dataset = inputArray; // [1, 2, 7, 8, 4, 5, 7, 0, 9, 8, 7];
        
        let numMatches = 0;
        for (let i = 0, j = dataset.length; i < j; i += 1) {
            if (dataset[i] === valueToEvaluate) {
                numMatches += 1;
            }
        }
        console.log(numMatches);
        return numMatches;
        // alert(getNumMatches(dataset, 2)); // should alert 3
        // return search;
    }

    /**
     * @param objectArray an array of any type of Object
     * @return the least frequently occurring object in the array
     * given an array of objects, named `objectArray` return the least frequently occuring object in the array
     */

    getLeastCommon(objectArray) {
        return null;
    } 

    /**
     * @param objectArray      an array of any type of Object
     * @param objectArrayToAdd an array of Objects to add to the first argument
     * @return an array containing all elements in `objectArray` and `objectArrayToAdd`
     * given two arrays `objectArray` and `objectArrayToAdd`, return an array containing all elements in `objectArray` and `objectArrayToAdd`
     */

    mergeArrays(objectArray, objectArrayToAdd) {
        return null; 
    } 

}

module.exports = Craze4Arrays;
