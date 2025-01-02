import Header from "./Header";

function Board() {
    function shuffle(array) {
        let currentIndex = array.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
          // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
      
          // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
      
        return array;
    }

    const handleClick = (event) => {
        const div = event.target;
        div.style.backgroundColor = "#1e6ed7";
    };

    const phrases = [
        "We'll just push it back",
        'A class is a blueprint',
        "I've been working on something", // replace?
        'Fantastic!',
        "Exams don't need to be difficult",
        'Goes long',
        'Compliments the Microsoft devs',
        "It's good to see you",
        'Did we learn something?',
        'Scraps what we did the previous class',
        "Says 'one more thing' more than once",
        'An object is a cookie cutter',
        'Compliments Murach and/or his book',
        "We're here to learn the material",
        "We've learned a lot",
        'Who here knows Java?',
        'Who here knows Python?',
        "We're here to solve simple problems",
        "Ultimately we're all self-taught",
        'Happy to see your smiling faces',
        'Wears his tan suit',
        "I'm good a making mistakes",
        'Placeholder 1',
        'Placeholder 2',
        'Placeholder 3'
    ];

    const shuffled = shuffle(phrases);
    
    return(
        <div className="container">
            <Header />

            <div className="board">
            {shuffled.map((value, index) => {
                if (index === 12) {
                    return (<div key={index} className="tile" onClick={handleClick}>FREE</div>)
                }
                else {
                    return (<div key={index} className="tile" onClick={handleClick}>{value}</div>)
                }}
            )}
            </div>
        </div>
    );
}

export default Board