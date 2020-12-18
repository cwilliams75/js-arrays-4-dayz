class Craze4Arrays {

    /** 
        @param objectArray    an array of any type of Object
        @param objectToRemove a value to be removed from the `objectArray`
        @return an array with identical content excluding the specified `objectToRemove`
        Given an array of objects, name `objectArray`, and an object `objectToRemove`, return an array of objects with identical contents excluding `objectToRemove`
    */
    removeValue(objectArray, objectToRemove) {

        return objectArray.filter((v) => (v === objectToRemove)).length;
    }
    /**
     * @param objectArray an array of any type of Object
     * @return the most frequently occurring object in the array
     * given an array of objects, named `objectArray` return the most frequently occuring object in the array
     */
    getMostCommon(inputArray) {
        let mf = 1;
        let m = 0;
        let item;

        for (let i = 0, len = inputArray.length; i < len; i++) {
            let num = inputArray[i];
            if (m[num] === undefined) {
                m[num] = 1;
            } else {
                m[num] = m[num] + 1;
            }
                if (counts[num] > compare) {
                    compare = counts[num];
                    mf = inputArray[i];
                }
            }
            return mf;
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
