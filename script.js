const questionsDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
{
id: 0,
text:"Pick a vacation destination:",
answers: [
    {
        text: "New York",
        image:"https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Photo of Empire State",
        credit: "Oliver Nibett"
    },
    {
        text: "Portofino",
        image:"https://images.unsplash.com/photo-1549893072-4bc678117f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydG9maW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Photo of Portofino",
        credit: "Carlos Alfonso"
    },
    {
        text: "German",
        image:"https://images.unsplash.com/photo-1581929955747-01a55e458b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        alt: "Photo of German",
        credit: "Elena Kuchko"
    },
    {
        text: "England",
        image:"https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8RW5nbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Photo of England",
        credit: "Jo Franc"
    },
]
},
{
id: 1,
text: "Pick some food:",
answers: [
    {
        text: "Pizza",
        image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8UGFwcGVyb25pJTIwUGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        alt: "Papperoni Pizza",
        credit: "Jo Franc"
    },
    {
        text: "Sandwich",
        image:"https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFNhbmR3aWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Sandwich",
        credit: "Jo Franc"
    },
    {
        text: "Pasta",
        image:"https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "Pasta",
        credit: "Jo Franc"
    },
    {
        text: "Humburger",
        image:"https://images.unsplash.com/photo-1669281645377-71e97d235fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SHVtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "PHumburger",
        credit: "Jo Franc"
    },
]
},
{
id: 2,
text: "Pick a home:",
answers: [
    {
        text: "Traditional",
        image:"https://images.unsplash.com/photo-1569370029765-33aaab1f4851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" ,
        alt: "Traditional home",
        credit: "Jo Franc"
    },
    {
        text: "Loft Style",
        image:"https://images.adsttc.com/media/images/5fa5/b6e1/63c0/1775/9b00/0740/medium_jpg/03_Loft_RCB_Apiron.jpg?1604695758",
        alt: "Loft home",
        credit: "Jo Franc"
    },
    {
        text: "Castle House",
        image:"https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Castle House",
        credit: "Jo Franc"
    },
    {
        text: "Cabin",
        image:"https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Cabin",
        credit: "Jo Franc"
    },
]
}
]

const answers = [
    {
        combination: ["New York", "Pizza", "Loft Style"],
        text: "100% Modern!",
        image: "https://images.unsplash.com/photo-1591800552599-b98b22cb762d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG5ldyUyMHlvcmslMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "fashion"
    },
    {
        combination: ["England", "Sandwich", "Cabin"],
        text: "Oh...You are elegant...",
        image: "https://images.unsplash.com/photo-1619814319463-7534cfcdf870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyaXRpc2glMjBzdWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        alt: "fashion"
    },
    {
        combination: ["German", "Humburger", "Traditional"],
        text: "Absolutely european casual!",
        image: "https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VybWFuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "fashion"
    },
    {
        combination: ["Portofino", "Pasta", "Castle House"],
        text: "So...easy style it's really are you!",
        image: "https://images.unsplash.com/photo-1592228305242-35b61dd6e937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM3fHxzdHlsZSUyMHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        alt: "fashion"
    },
]

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionsDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionsDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if(unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemRemove = unansweredQuestions.indexOf(questionId)

    if(itemRemove > -1 ){
        unansweredQuestions.splice(itemRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock (questionId, chosenAnswer)

    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = "#" + lowestQuestionId

    if(!unansweredQuestions.length){
        location.href = "#answer"
        showAnswer()
    }
}

const showAnswer = () => {
    let result 
    answers.forEach(answer => {
        if(
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2]) +
            chosenAnswers.includes(answer.combination[3])
        ) {
            result = answer
            return
        } else if (!result) {
            result = answers[0]
            }
        })

    console.log(result)

    const answerBlock = document.createElement("div")
    answerBlock.classList.add("result-block")
    const answerTitle = document.createElement("h3")
    answerTitle.textContent = result.text
    const answerImage = document.createElement("img")
    answerImage.setAttribute("src", result.image)
    answerImage.setAttribute("alt", result.alt)

    answerBlock.append(answerTitle, answerImage)
    answerDisplay.append((answerBlock))

    const allAnswerBlocks = document.querySelectorAll(".answer-block")
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

    }

    const disableQuestionBlock = (questionId, chosenAnswer) => {
        const currentQuestionsBlock = document.getElementById(questionId + "-questions")
        Array.from(currentQuestionsBlock.children).forEach(block => {
            if (block.children.item(1).innerText !== chosenAnswer) {
                block.style.opacity = "50%"
            }
        })

    }

