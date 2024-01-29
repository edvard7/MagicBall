import './MagicBall.css'


 export default function MagicBall({answer, answerNumber}) {
    return ( <div className="magic-ball"
    style={{
backgroundColor: answerNumber < 2 ? "green" : "purple"
    }}
    >
        { answer }
    </div>
    ) 
}

