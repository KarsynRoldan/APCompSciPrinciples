/**
 * Creates a card from a standard 52 card deck
 */
class Card {
    
    /**
     * creates a random card by creating a
     * random suit and a random value (1-13)
     */
    constructor(){
        
        this.suitsArray = this.getSuits();
        this.faceValuesArray = this.getFaceValues();
        this.suit = this.suitsArray[Math.floor(Math.random()*4)];
        this.value = Math.floor(Math.random()*13);
        this.faceValue = this.faceValuesArray[this.value];
    }

    /**
     * returns a list of suit names
     */
    getSuits(){
        return ["Spades","Diamonds","Clubs","Hearts"];
    }

    /**
     * returns a list of face values
     * each index in the list represents the 
     * actual value of the card A = 0, J = 10, Q = 11, K = 13
     */
    getFaceValues(){
        return ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    }

    /**
     * returns the suit of the card
     */
    getSuit(){
        return this.suit;
    }

    /**
     * returns the value of the card
     */
    getValue(){
        return this.value;
    }

    /**
     * returns the face value of the card
     */
    getFaceValue(){
        return this.faceValue;
    }

    /**
     * creates a button with displays the card 
     * as the background
     */
    makeCardButton(){
        
        this.cardImage = "card" + this.suit + this.faceValue + ".png";
        this.cardButton = document.createElement("button");
        this.cardButton.style.position = "absolute";
        this.cardButton.style.backgroundImage = "url('images/" + this.cardImage + "')";
        this.cardButton.style.width = Card.width + "px";
        this.cardButton.style.height = Card.height + "px";
        return this.cardButton;
    }
    
}

/**
 * The class variables height and width define
 * the dimensions of the card buttons
 */
Card.height = 71;
Card.width = 53;

