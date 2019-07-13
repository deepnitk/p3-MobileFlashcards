import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    React: {
        title: 'Harry Potter',
        questions: [
            {
                question: 'New students need to learn the secrets of the castle. How many staircases does Hogwarts have?',
                answer: '142'
            },
            {
                question: 'Harry is known for his talents in Quidditch. What is the max speed for a Firebolt broomstick?',
                answer: '150 mph'
            },
        ]
    },
    Datastructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'What is an array in C?',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'What is a string?',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}
