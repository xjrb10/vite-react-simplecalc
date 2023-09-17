import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bulma/css/bulma.min.css';
import {Button, Container, Card, Table} from 'react-bulma-components';

function App() {
    const [enteredText, setEnteredText] = useState("");
    const [justAnswered, setJustAnswered] = useState(false);

    const onBtnClick = (e) => {
        let char = e.target.innerText;
        console.log(justAnswered)
        switch (char) {
            case String.fromCharCode(43):
                char = "+";
                break;
            case String.fromCharCode(8722):
                char = "-";
                break;
            case String.fromCharCode(215):
                char = "*";
                break;
            case String.fromCharCode(247):
                char = "/";
                break;
            default:
                if (justAnswered){
                    setEnteredText(char);
                    setJustAnswered(false);
                    return;
                }
        }
        setEnteredText(enteredText + char)
    };

    const CalculatorButton = (props) => {
        return (<Button color={props.color || "link"} className="is-fullwidth is-medium"
                        onClick={onBtnClick}>{props.value}</Button>)
    };

    const Header = () => {
        return (<Container>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </Container>);
    }

    return (
        <Container>
            <Card>
                <Card.Content>
                    <Container>
                        <div>
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo" alt="Vite logo"/>
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo"/>
                            </a>
                        </div>
                        <h1>Vite + React</h1>
                        <p className="read-the-docs">
                            Click on the Vite and React logos to learn more
                        </p>
                    </Container>

                    <Container>
                        <Table className='is-narrow is-borderless'>
                            <thead>
                            <tr>
                                <td colSpan="4">
                                    <div className="field">
                                        <div className="control">
                                            <input className="input is-large" type="text" placeholder="0"
                                                   value={enteredText}/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            </thead>
                            <tr>
                                <td><CalculatorButton value={7}/></td>
                                <td><CalculatorButton value={8}/></td>
                                <td><CalculatorButton value={9}/></td>
                                <td><CalculatorButton color="primary" value='&#43;'/></td>
                            </tr>
                            <tr>
                                <td><CalculatorButton value={4}/></td>
                                <td><CalculatorButton value={5}/></td>
                                <td><CalculatorButton value={6}/></td>
                                <td><CalculatorButton color="primary" value='&#8722;'/></td>
                            </tr>
                            <tr>
                                <td><CalculatorButton value={1}/></td>
                                <td><CalculatorButton value={2}/></td>
                                <td><CalculatorButton value={3}/></td>
                                <td><CalculatorButton color="primary" value='&#215;'/></td>
                            </tr>
                            <tr>
                                <td colSpan="3"><CalculatorButton value={0}/></td>
                                <td><CalculatorButton color="primary" value='&#247;'/></td>
                            </tr>
                            <tr>
                                <td>
                                    <Button color="danger" className="is-fullwidth is-medium"
                                            onClick={() => setEnteredText('')}>C</Button>
                                </td>
                                <td colSpan="2">
                                    <Button color="warning" className="is-fullwidth is-medium"
                                            onClick={() => {
                                                setEnteredText(eval(enteredText.replace(/^0+/, "")))
                                                setJustAnswered(true)
                                            }}>=</Button>
                                </td>
                                <td colSpan="1"><CalculatorButton value={'.'}/></td>
                            </tr>

                        </Table>
                    </Container>

                </Card.Content>
            </Card>
        </Container>
    )
}

export default App
