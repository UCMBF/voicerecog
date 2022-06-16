x = 0
y = 0
drawCircle = ""
drawRect = ""

var SpeechRecognition = window.webkitSpeechRecognition

var recognition = new SpeechRecognition()

function start() {
    document.getElementById("status").innerHTML = "System has started listening, please speak"
    recognition.start()
}

recognition.onresult = function(event) {
    console.log(event)

    output = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "You said " + output 

    if(output == "Circle") {
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Drawing circle"
        drawCircle = "set"
    }

    if(output == "rectangle") {
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random() * 600)
        document.getElementById("status").innerHTML = "Drawing rectangle"
        drawRect = "set"
    }

}

function setup() {
    canvas = createCanvas(900,600)
}

function draw() {

    fill("white")
    stroke("black")

    if(drawCircle == "set") {
        radius = Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML = "A Circle has been drawn"
        drawCircle = ""
    }

    if(drawRect == "set") {
        rect(x,y,70, 50)
        document.getElementById("status").innerHTML = "A Rectangle has been drawn"
        drawRect = ""
    }
}
