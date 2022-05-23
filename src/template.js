function isTheCellAlive(cell) {
    return cell == 1 
}

function determineTheAmountOfAliveNeighbours(universe, cellRow, cellColumn) {
    var numberOfNeiboursAlive = 0
    return numberOfNeiboursAlive = isThereANeighbourAliveOnTheRight(universe, cellRow, cellColumn) + isThereANeighbourAliveOnTheLeft(universe, cellRow, cellColumn) + isThereANeighbourAliveDownUnder(universe, cellRow, cellColumn) + isThereANeighbourAliveDownUnderToTheRight(universe, cellRow, cellColumn) + isThereANeighbourAliveAboveToTheLeft(universe, cellRow, cellColumn)
}

function isThereANeighbourAliveOnTheRight(universe, cellRow, cellColumn){
    if (universe[cellRow][cellColumn + 1] == 1){
        return 1
    } else return 0
}

function isThereANeighbourAliveOnTheLeft(universe, cellRow, cellColumn) {
    if (universe[cellRow][cellColumn - 1] == 1) {
        return 1
    } else return 0
}

function isThereANeighbourAliveDownUnder(universe, cellRow, cellColumn) {
    if (doesTheUniverseContinueBelowThisRow(universe, cellRow)){
        if (universe[cellRow + 1][cellColumn] == 1) {
            return 1
        } else return 0
    } return 0
}

function isThereANeighbourAliveDownUnderToTheRight(universe, cellRow, cellColumn) {
    if (doesTheUniverseContinueBelowThisRow(universe, cellRow)) {
        if (universe[cellRow + 1][cellColumn + 1] == 1) {
            return 1
        } else return 0
    } return 0
}

function isThereANeighbourAliveAboveToTheLeft(universe, cellRow, cellColumn) {
    if (doesTheUniverseContinueAboveThisRow(cellRow)) {
        if (universe[cellRow - 1][cellColumn - 1] == 1) {
            return 1
        } else return 0
    } return 0
}

function doesTheUniverseContinueBelowThisRow(universe, cellRow){
    var cellRowInNormalNumbers = cellRow + 1
    return universe.length > cellRowInNormalNumbers
}

function doesTheUniverseContinueAboveThisRow(cellRow) {
    return cellRow > 0
}

module.exports = {isTheCellAlive, determineTheAmountOfAliveNeighbours}