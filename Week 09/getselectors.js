function getselectors( selector) {
    if (!selector) {
         return []
    }
    let selectors = []
    let currentselector = ''
    for (let c of selector) {
    if (c === '#' ||  c === '.' ) {
    if (currentselector.length > 0) {
         selectors.push(currentselector)}
         currentselector = c
    } else {
        currentselector += c
    }
    if (currentselector.length > 0) {
        selectors.push( currentselector)}
    }
    return selectors
} 
function matchAll(element, selector) {
    let selectors = getselectors (selector)
    for (let selector of selectors){
        if (!match(element, selector)) {
            return false
        }
    }
    return true
}