namespace SpriteKind {
    export const TextSprite = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (categoryIndex < 4) {
        if (categoryIndex == 0) {
            rouletteSprite = word.createTextSprite(adjectiveList[adjectiveIndex], 15, 1)
        } else if (categoryIndex == 1) {
            rouletteSprite = word.createTextSprite(genreList[genreIndex], 15, 1)
        } else if (categoryIndex == 2) {
            rouletteSprite = word.createTextSprite(environmentList[environmentIndex], 15, 1)
        } else {
            rouletteSprite = word.createTextSprite(wildcardList[wildcardIndex], 15, 1)
        }
        rouletteSprite.y = topHeadingOffset + lineHeight * (categoryIndex * 2) + lineHeight
        categoryIndex += 1
    }
})
function createHeadings () {
    text_list = ["Make a", "", "Set in", "Featuring"]
    for (let index = 0; index <= text_list.length - 1; index++) {
        currentHeading = word.createTextSprite(text_list[index], 15, 7)
        currentHeading.left = 5
        currentHeading.y = lineHeight * (index * 2) + topHeadingOffset
    }
}
function createRouletteSprite (text: string, y: number) {
    rouletteSprite = word.createTextSprite(text, 15, 1)
    rouletteSprite.setKind(SpriteKind.TextSprite)
    rouletteSprite.y = y
    rouletteSprite.right = 0
    rouletteSprite.setVelocity(500, 0)
}
/**
 * Game Parts:
 * 
 * Adjective
 * 
 * Environment/setting
 * 
 * Game genre
 * 
 * Wildcard game mechanic
 */
let spinningOffset = 0
let currentHeading: Sprite = null
let text_list: string[] = []
let rouletteSprite: Sprite = null
let lineHeight = 0
let topHeadingOffset = 0
let wildcardList: string[] = []
let environmentList: string[] = []
let adjectiveList: string[] = []
let genreList: string[] = []
let categoryIndex = 0
let adjectiveIndex = 0
let wildcardIndex = 0
let environmentIndex = 0
let genreIndex = 0
genreIndex = 0
environmentIndex = 0
wildcardIndex = 0
adjectiveIndex = 0
categoryIndex = 0
genreList = ["Platformer", "RPG", "Adventure", "Racing", "Fighting", "Heist", "Survival", "Rhythm", "Quiz", "Educational", "Narrative", "Farming", "Battle Royale", "Non-Interactive", "Quest", "Point and Click", "Historical"]
adjectiveList = ["Fast", "Haunted", "Relaxing", "Colorful", "Perplexing", "Surreal", "Medieval", "Deserted", "Comedic", "Slow-motion", "Monochrome", "First-person", "Shakespearean", "Neverending", "Sidescroller"]
environmentList = ["Underwater", "School", "Space", "City", "Castle", "Forest", "Jungle", "Ruins", "Tundra", "Home", "The Future", "An Island", "A Cave", "Desert", "A Library", "Beach"]
wildcardList = ["Time limit", "Must include monkeys", "Break things", "Build things", "Moral dilemma", "Collect things", "Defend", "Camouflage", "Single-button", "Multiplayer", "Two colors", "Random Levels", "Time Travel", "Tunneling", "Poetry", "Dessert", "Moon Gravity", "A Sidekick"]
topHeadingOffset = 20
lineHeight = 10
createHeadings()
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.TextSprite)) {
        if (value.left > scene.screenWidth()) {
            value.destroy()
        }
    }
})
game.onUpdateInterval(200, function () {
    spinningOffset = topHeadingOffset + lineHeight
    if (categoryIndex < 1) {
        adjectiveIndex = (adjectiveIndex + 1) % adjectiveList.length
        createRouletteSprite(adjectiveList[adjectiveIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 2) {
        genreIndex = (genreIndex + 1) % genreList.length
        createRouletteSprite(genreList[genreIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 3) {
        environmentIndex = (environmentIndex + 1) % environmentList.length
        createRouletteSprite(environmentList[environmentIndex], spinningOffset)
    }
    spinningOffset += lineHeight * 2
    if (categoryIndex < 4) {
        wildcardIndex = (wildcardIndex + 1) % wildcardList.length
        createRouletteSprite(wildcardList[wildcardIndex], spinningOffset)
    }
})
