export class DnDCharacter {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    hitpoints: number;


constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10+DnDCharacter.getModifierFor(this.constitution)
}

static numberGenerator() {
    return Math.ceil(Math.random() * 6)
}

static topThreeRolls() {
    const diceRoll = [];
    while (diceRoll.length < 4) {
        diceRoll.push(this.numberGenerator())
    }
    const lowestDice = Math.min(...diceRoll);
    return diceRoll.filter(roll => roll != lowestDice);
}

static generateAbilityScore() {
    const topThree = this.topThreeRolls()
        .reduce((runningTotal, nextNumber) => runningTotal + nextNumber, 0)
    return topThree
    }

static getModifierFor(constitution: number) {
    return Math.floor((constitution -10) / 2)
}
}