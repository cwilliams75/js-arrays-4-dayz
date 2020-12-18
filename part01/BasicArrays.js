class BasicArrays {
    /**
     * @param stringArray an array of String objects
     * @return the first element in the array
     */
    getFirstElement(stringArray) {
        console.log(stringArray[0]);
        return stringArray[0];
    }

    /**
     * @param stringArray an array of String objects
     * @return the second element in the array
     */
    getSecondElement(stringArray) {
        console.log(stringArray[1]);
        return stringArray[1];
    }

    /**
     * @param stringArray an array of String objects
     * @return stringArray with the elements in reverse order
     */
    reverse(stringArray) {
        let revstring = stringArray;
        console.log(stringArray);
        let new_revstring = revstring.reverse();
        console.log(new_revstring);
        return new_revstring;
    }

    /**
     * @param stringArray an array of String objects
     * @return String made up of the first character in each element of stringArray
     */
    getFirstLetterOfEachElement(stringArray) {
        let firstChar = stringArray;
        console.log(firstChar);
        let newChar = firstChar.map((firstChar) => firstChar[0]).join('');
        console.log(newChar);
        return newChar;
    }
}

module.exports = BasicArrays;