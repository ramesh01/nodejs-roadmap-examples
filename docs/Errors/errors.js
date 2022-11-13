/**
 * Standard JavaScript errors such as 
 * <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, and <URIError>.
 */

try {
    if (1 !== 2) {
        throw '1 is not to 2';
    }
} catch (error) {
    console.log(error);
}

try {
    if (1 !== 2) {
        throw new Error('1 is not to 2');
    }
} catch (error) {
    console.log(error.message, error.stack);
}
