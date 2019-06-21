const winCombos = {
  columnOne: [0, 3, 6],
  columnTwo: [1, 4, 7],
  columnThree: [2, 5, 8],
  rowOne: [0, 1, 2],
  rowTwo: [3, 4, 5],
  rowThree: [6, 7, 8],
  diagonalOne: [0, 4, 8],
  diagonalTwo: [2, 4, 6]
}
const allNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8]

export const verifyIfPitIsEmpty = pitLocation => {
  return pitLocation.choice === "" ? true : false
}

export const verifyIfHasWinner = allProps => {
  const choicesUpdated = updateFieldChoicesWithNewLocation(allProps)

  const targets = getLocationOfTarget(choicesUpdated, allProps.nextToPlay)
  const hasWinner = checkPossibility(targets)

  return hasWinner.length > 0 ? hasWinner : false
}

export const checkPossibility = allTargets => {
  const ArrWinCombos = Object.keys(winCombos)
  return ArrWinCombos.filter(combo => {
    return arrayContainsArray(allTargets, winCombos[combo])
  })
}

const getLocationOfTarget = (choicesUpdated, target) => {
  return allNumber.filter(i => {
    return checkSpot(choicesUpdated[i].choice, target)
  })
}

const checkSpot = (spot, target) => {
  return spot === target
}

export const updateFieldChoicesWithNewLocation = allProps => {
  let choicesUpdated = allProps.choices
  choicesUpdated[allProps.location] = {
    id: allProps.location,
    choice: allProps.nextToPlay
  }
  return choicesUpdated
}

const arrayContainsArray = (a, b) => {
  if (0 === b.length) {
    return false
  }
  return b.every(value => {
    return a.indexOf(value) >= 0
  })
}

export const verifyIfIsTie = plays => {
  return plays >= 8
}
