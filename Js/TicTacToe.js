class Square extends React.Component {
    constructor(props) {
        super(props);
        //stateを初期化
        this.state = {
            value: null,
        }
    }
    render(){
        return(
            //valueの値を表示、Squareコンポーネントがクリックされた時に’X’を表示
            <button className="Square" onclick={()=> this.setState({ value :'X' })}>
            {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component{
    //renderSquare内でvalueの値をSquareに渡す
    renderSquare(i) {
        return <Square value={i} />;    
    }

    render() {
        const status = 'Next player: X';

    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
    </div>
    );
    }
}

class Game extends React.Component {
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
            </div>
            </div>
        );
    }
}

//=======================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);