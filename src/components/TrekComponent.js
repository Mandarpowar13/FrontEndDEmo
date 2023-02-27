import React,{ useState,useEffect} from 'react'
import { Container, Row } from 'react-bootstrap';
import TrekServices from '../serevices/TrekServices';
import TrekDis from './TrekDis';



export default function TrekComponent() {
    const [trek, setTrek] = useState([]);
    
    

    const getTreks = () =>{
        TrekServices.getTrek().then((response) => {

            setTrek(response.data);
            console.log(response.data);
        }
        
        )
    }
    useEffect(() => {
     getTreks();
    }, []);


  return (
    <>
    <Container>
        <Row>
            {
                trek.map((data) =>{
                    return(
                       <TrekDis article={data}></TrekDis>
                    )
                })
            }
        </Row>
    </Container>
    </>
  )
}
