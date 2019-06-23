import AsyncStorage from "@react-native-community/async-storage"

export const retrieveGameCount = async () => {
  try {
    const gameCount = await AsyncStorage.getItem("gameCount")
    if (gameCount !== null) {
      return parseInt(gameCount, 10)
    }
    return parseInt(1, 10)
  } catch (error) {
    console.log(error)
  }
}

export const saveGameCount = async (count, cb) => {
  try {
    await AsyncStorage.setItem("gameCount", parseInt(count, 10))
    if (count === 6) cb()
  } catch (error) {
    console.log(error)
  }
}

export const saveGameScore = async gameScore => {
  try {
    await AsyncStorage.setItem("gameScore", JSON.stringify(gameScore))
  } catch (error) {
    console.log(error)
  }
}

export const retrieveScore = async () => {
  try {
    const gameScore = await AsyncStorage.getItem("gameScore")
    if (gameScore !== null) {
      return JSON.parse(gameScore)
    }
  } catch (error) {
    console.log(error)
  }
}
